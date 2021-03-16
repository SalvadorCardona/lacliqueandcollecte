ENV ?= "dev"
SOURCE_DIR = $(shell pwd)

install: install-php database-import install-asset remove-theme

install-common:
	ln -s $(pwd)/theme $(pwd)/web/app/themes/hello-theme-master

install-asset:
	cd assets && yarn install && yarn build

install-php:
	php -r "copy('https://getcomposer.org/installer', 'composer.phar');"
	cp .env.dev .env
	php composer.phar install
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

server-dev:
	/bin/sh -c 'XDEBUG_MODE=debug XDEBUG_AUTO_TRACE=1 php wp-cli.phar server --host=0.0.0.0 --port=8000   --allow-root &'
	/bin/sh -c 'cd assets && yarn parcel'

server-dev-no-debug:
	php  wp-cli.phar server --host=0.0.0.0 --port=8000 --allow-root

server-dev-stop:
	kill -9 $(lsof -t -i:8000 -sTCP:LISTEN) && kill -9 $(lsof -t -i:8080) && killall -9 php

database-export:
	php wp-cli.phar db export base.sql  --allow-root

database-import:
	php wp-cli.phar db import base.sql  --allow-root

test:
	php vendor/bin/phpunit

wp-rewrite-url:
	php wp-cli.phar  rewrite flush --allow-root

remove-theme:
	rm -R ./web/wp/wp-content/themes/**

php-cs-fix:
	php vendor/bin/phpcbf

lint:
	php vendor/bin/phpcs
	cd assets && yarn lint

build-on-integration:
	rm -Rf master master.zip ${FOLDER_NAME}
	wget https://github.com/SalvadorCardona/lacliqueandcollecte/archive/master.zip
	unzip master.zip
	cd ${FOLDER_NAME} && make install-php
	cd ${FOLDER_NAME} && make install-asset
	rm -R ${FOLDER_NAME}/assets
	rm ${FOLDER_NAME}/.env
	cd ${FOLDER_NAME} && zip -r master.zip ./ && mv master.zip ./..
	sshpass -p ${FTP_PASSWORD} scp master.zip ${FTP_USER}@${FTP_HOST}:./${FTP_PATH_FOLDER}
	sshpass -p ${FTP_PASSWORD} ssh ${FTP_USER}@${FTP_HOST} unzip -o ./${FTP_PATH_FOLDER}/master.zip -d ${FTP_PATH_FOLDER}
	rm -Rf master master.zip ${FOLDER_NAME}
