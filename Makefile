build: clean
	npm run build

clean:
	rm -rf dist

test: build
	npm run test:dev

publish: test
	npm publish --access public
