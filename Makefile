dev: build
	npm run test:dev

gotypes:
	go run ./cmd/gotypes

gentestdata:
	go run ./cmd/gentestdata

build: clean gotypes
	npm run build

clean:
	rm -rf dist

test: build gentestdata
	npm run test

publish: test
	npm publish --access public
