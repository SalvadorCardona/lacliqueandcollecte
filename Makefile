ENV ?= "dev"
SOURCE_DIR = $(shell pwd)
FRONT_DIR = ./front
BACK_DIR = ./back

GREEN	=\033[0m\e[1m\e[32m

install: install-php database-import trans install-asset install-common clean

install-common:
	rm -Rf back/web/app/themes/hello-theme-master
	ln -sF $(shell pwd)/back/theme $(shell pwd)/back/web/app/themes/hello-theme-master

install-asset:
	cd front && yarn install && yarn build

install-php:
	rm -f ${BACK_DIR}/composer.phar
	cd ${BACK_DIR} && wget https://getcomposer.org/download/2.0.12/composer.phar
	cd ${BACK_DIR} && cp .env.dev .env
	cd ${BACK_DIR} && php composer.phar install
	cd ${BACK_DIR} && curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

server-dev:
	cd ${BACK_DIR} &&  /bin/sh -c 'XDEBUG_MODE=debug XDEBUG_AUTO_TRACE=1 php wp-cli.phar server --host=0.0.0.0 --port=8000   --allow-root &'
	/bin/sh -c 'yarn --cwd front parcel'

server-dev-stop:
	kill -9 $(lsof -t -i:8000 -sTCP:LISTEN) && kill -9 $(lsof -t -i:8080) && killall -9 php

database-export:
	cd ${BACK_DIR} && php wp-cli.phar db export base.sql  --allow-root

database-import:
	cd ${BACK_DIR} && php wp-cli.phar db import base.sql  --allow-root

test:
	php ${BACK_DIR}/vendor/bin/phpunit

wp-rewrite-url:
	php ${BACK_DIR}/wp-cli.phar rewrite flush --allow-root

code-fix:
	cd ${BACK_DIR} && php vendor/bin/phpcbf
	yarn --cwd front lint --fix

lint:
	cd ${BACK_DIR} && php vendor/bin/phpcs
	cd ${BACK_DIR} && php vendor/bin/phpstan analyse
	yarn --cwd front eslint
	yarn --cwd front stylelint

clean:
	rm -Rf ${BACK_DIR}/web/wp/wp-content/themes/**
	@echo  -e '${GREEN}success : all composer.phar and themes folder delete'

trans:
	cd ${BACK_DIR} && php wp-cli.phar i18n make-mo './theme/languages'