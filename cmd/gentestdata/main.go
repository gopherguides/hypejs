package main

import (
	"context"
	"encoding/json"
	"log"
	"os"
	"path/filepath"
	"time"

	"github.com/gopherguides/hype"
	"golang.org/x/sync/errgroup"
)

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}

func run() error {
	pwd, err := os.Getwd()
	if err != nil {
		return err
	}

	op := filepath.Join(pwd, "src", "testdata")

	ctx := context.Background()
	ctx, cancel := context.WithTimeout(ctx, 60*time.Second)
	defer cancel()

	root := "/Users/markbates/Dropbox/dev/guides/content/book/chapters"
	chaps := []string{
		"09-errors",
		"10-generics",
		"12-context",
	}

	var wg errgroup.Group

	for _, c := range chaps {
		wg.Go(func() error {
			fp := filepath.Join(root, c)
			p := hype.NewParser(os.DirFS(fp))
			p.Root = fp

			doc, err := p.ParseExecuteFile(ctx, "module.md")
			if err != nil {
				return err
			}

			f, err := os.Create(filepath.Join(op, c+".json"))
			if err != nil {
				return err
			}
			defer f.Close()

			enc := json.NewEncoder(f)
			enc.SetIndent("", "  ")
			err = enc.Encode(doc)
			if err != nil {
				return err
			}

			return nil
		})
	}

	return wg.Wait()
}
