build:
	npm run build

test: build
	npm run test:dev

publish: test
	npm publish --access public
