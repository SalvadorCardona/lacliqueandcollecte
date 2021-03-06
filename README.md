## Overview
Wordpress Api Rest With Slim framework and angular theme 

## Features

- Injection dependency
- Php Autowiring
- Swager Api Rest Documentation

## Requirements

- PHP >= 8
- Composer - [Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
- Yarn - [Install](https://classic.yarnpkg.com/en/docs/install#debian-stable)
- Node >= 12
- Linux

## Installation

1. Install project:
   ```sh
   $ make install
   ```
2. Update environment variables in the `.env` file. Wrap values that may contain non-alphanumeric characters with quotes, or they may be incorrectly parsed.

- Database variables
  - `DB_NAME` - Database name
  - `DB_USER` - Database user
  - `DB_PASSWORD` - Database password
  - `DB_HOST` - Database host
  - Optionally, you can define `DATABASE_URL` for using a DSN instead of using the variables above (e.g. `mysql://user:password@127.0.0.1:3306/db_name`)
- `WP_ENV` - Set to environment (`development`, `staging`, `production`)
- `WP_HOME` - Full URL to WordPress home (https://example.com)
- `WP_SITEURL` - Full URL to WordPress including subdirectory (https://example.com/wp)
- `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT`
  - Generate with [wp-cli-dotenv-command](https://github.com/aaemnnosttv/wp-cli-dotenv-command)
  - Generate with [our WordPress salts generator](https://roots.io/salts.html)

## Documentation

@implement me