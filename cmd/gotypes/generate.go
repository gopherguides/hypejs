package main

import (
	"fmt"
	"io"
	"os/exec"
	"regexp"
	"strings"
)

type GoType struct {
	Full string
	Name string
	Type string
}

type TypeMap map[string][]GoType

func generate(w io.Writer) error {
	types, err := findTypes()
	if err != nil {
		return err
	}
	fmt.Fprintln(w, "let gotypes = {")
	for _, k := range types["types"] {
		printType(w, k)
	}
	fmt.Fprintln(w, "}")

	fmt.Fprintln(w)

	fmt.Fprintln(w, "let goerrors = {")
	for _, k := range types["errors"] {
		printType(w, k)
	}
	fmt.Fprintln(w, "}")

	fmt.Fprintln(w)

	fmt.Fprintln(w, "export { gotypes, goerrors }")
	return nil
}

func printType(w io.Writer, k GoType) {
	if k.Type == "func" {
		return
	}

	v := fmt.Sprintf("hype.%s", k.Name)
	fmt.Fprintf(w, "\t%s: \"%s\",\n", k.Name, v)
}

func findTypes() (TypeMap, error) {
	cmd := exec.Command("go", "doc", "github.com/gopherguides/hype")
	out, err := cmd.Output()
	if err != nil {
		return nil, err
	}

	gx, err := regexp.Compile(`type\s([a-zA-Z0-9_]+)\s([^{|(]+)`)
	if err != nil {
		return nil, err
	}

	res := TypeMap{}

	lines := strings.Split(string(out), "\n")
	for _, line := range lines {
		mm := gx.FindStringSubmatch(line)
		if len(mm) < 1 {
			continue
		}

		full := mm[0]
		key := mm[1]
		ty := mm[2]

		tt := GoType{
			Full: full,
			Name: key,
			Type: ty,
		}

		if strings.HasSuffix(key, "Error") || strings.HasPrefix(key, "Err") {
			res["errors"] = append(res["errors"], tt)
		} else {
			res["types"] = append(res["types"], tt)
		}

	}

	return res, nil
}
