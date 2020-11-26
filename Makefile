ENV ?= "dev"

install: install-php database-import

install-php:
	composer install
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	cp .env.dev .env

server-dev:
	/bin/sh -c 'php  -ddisplay_errors=1 -dzend_extension=xdebug.so -dxdebug.remote_enable=1 -dxdebug.remote_autostart=1 -dxdebug.remote_port=3004 wp-cli.phar server --host=0.0.0.0 --port=8000   --allow-root &'
	/bin/sh -c 'yarn watch'

server-dev-no-debug:
	php  wp-cli.phar server --host=0.0.0.0 --port=8000   --allow-root

server-dev-stop:
	killall -9 php

database-export:
	php wp-cli.phar db export base.sql  --allow-root

database-import:
	php wp-cli.phar db import base.sql  --allow-root

test:
	php vendor/bin/phpunit