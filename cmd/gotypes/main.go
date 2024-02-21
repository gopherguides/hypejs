package main

import (
	"log"
	"os"
	"path/filepath"
)

func main() {
	pwd, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	pwd = filepath.Join(pwd, "src", "gotypes.ts")

	f, err := os.Create(pwd)
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	if err := generate(f); err != nil {
		log.Fatal(err)
	}
}
