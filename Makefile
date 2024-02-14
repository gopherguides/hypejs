dev: build
	npm run test:dev

build: clean
	npm run build

clean:
	rm -rf dist

test: build
	npm run test

publish: test
	npm publish --access public
