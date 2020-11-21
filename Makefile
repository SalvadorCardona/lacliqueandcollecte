ENV ?= "dev"

install: install-php database-import

install-php:
	composer install
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	cp .env.dev .env

server-dev:
	php wp-cli.phar server --host=0.0.0.0 --port=8000  --allow-root

build-dev-api-ts:
	 npx swagger-typescript-api -p swagger.yaml -o ./

server-dev-2:
	/bin/sh -c 'php -S localhost:8000 -t web &'

database-export:
	php wp-cli.phar db export base.sql  --allow-root

database-import:
	php wp-cli.phar db import base.sql  --allow-root

trans:
	ngx-translate-extract --input ./web/app/languages --output ./angular/src/assets/i18n/{en,da,de,fi,nb,nl,sv}.json --clean --format json

test:
	php vendor/bin/phpunit