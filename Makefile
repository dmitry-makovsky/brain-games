# Makefile

install:
	npm install
build:
	npm run build
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .

brain-even:
	npx node dist/bin/brain-even.js
brain-calc:
	npx node dist/bin/brain-calc.js
brain-gcd:
	npx node dist/bin/brain-gcd.js
brain-progression:
	npx node dist/bin/brain-progression.js
brain-prime:
	npx node dist/bin/brain-prime.js