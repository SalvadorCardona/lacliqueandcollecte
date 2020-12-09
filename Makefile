ENV ?= "dev"

install: install-php database-import install-asset

install-asset:
	yarn install
	yarn development

install-php:
	composer install
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	cp .env.dev .env

server-dev:
	/bin/sh -c 'XDEBUG_MODE=debug php wp-cli.phar server --host=0.0.0.0 --port=8000   --allow-root &'
	/bin/sh -c 'cd assets && yarn parcel'

server-dev-no-debug:
	php  wp-cli.phar server --host=0.0.0.0 --port=8000   --allow-root

server-dev-stop:
	kill -9 $(lsof -t -i:8000 -sTCP:LISTEN) && kill -9 $(lsof -t -i:8080) && killall -9 php

database-export:
	php wp-cli.phar db export base.sql  --allow-root

database-import:
	php wp-cli.phar db import base.sql  --allow-root

test:
	php vendor/bin/phpunit

wp-rewrite-url:
	php wp-cli.phar  rewrite flush   --allow-root