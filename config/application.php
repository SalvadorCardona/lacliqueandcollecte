<?php
/**
 * Your base production configuration goes in this file. Environment-specific
 * overrides go in their respective config/environments/{{WP_ENV}}.php file.
 *
 * A good default policy is to deviate from the production config as little as
 * possible. Try to define as much of your configuration in this file as you
 * can.
 */

use App\Kernel;
use App\Model\Config as ConfigModel;
use DI\Bridge\Slim\Bridge;
use DI\ContainerBuilder;
use Roots\WPConfig\Config as ConfigAlias;

/**
 * Directory containing all of the site's files
 *
 * @var string
 */
$root_dir = dirname(__DIR__);

/**
 * Document Root
 *
 * @var string
 */
$webroot_dir = $root_dir . '/web';

/**
 * Expose global env() function from oscarotero/env
 */
Env::init();

/**
 * Use Dotenv to set required environment variables and load .env file in root
 */
$dotenv = Dotenv\Dotenv::createImmutable($root_dir);
if (file_exists($root_dir . '/.env')) {
    $dotenv->load();
    $dotenv->required(['WP_HOME', 'WP_SITEURL']);
    if (!env('DATABASE_URL')) {
        $dotenv->required(['DB_NAME', 'DB_USER', 'DB_PASSWORD']);
    }
}

/**
 * Set up our global environment constant and load its config first
 * Default: production
 */
define('WP_ENV', env('WP_ENV') ?: 'production');

/**
 * URLs
 */
ConfigAlias::define('WP_HOME', env('WP_HOME'));
ConfigAlias::define('WP_SITEURL', env('WP_SITEURL'));

/**
 * Custom Content Directory
 */
ConfigAlias::define('CONTENT_DIR', '/app');
ConfigAlias::define('WP_CONTENT_DIR', $webroot_dir . ConfigAlias::get('CONTENT_DIR'));
ConfigAlias::define('WP_CONTENT_URL', ConfigAlias::get('WP_HOME') . ConfigAlias::get('CONTENT_DIR'));

/**
 * DB settings
 */
ConfigAlias::define('DB_NAME', env('DB_NAME'));
ConfigAlias::define('DB_USER', env('DB_USER'));
ConfigAlias::define('DB_PASSWORD', env('DB_PASSWORD'));
ConfigAlias::define('DB_HOST', env('DB_HOST') ?: 'localhost');
ConfigAlias::define('DB_CHARSET', 'utf8mb4');
ConfigAlias::define('DB_COLLATE', '');
$table_prefix = env('DB_PREFIX') ?: 'wp_';

if (env('DATABASE_URL')) {
    $dsn = (object)parse_url(env('DATABASE_URL'));

    ConfigAlias::define('DB_NAME', substr($dsn->path, 1));
    ConfigAlias::define('DB_USER', $dsn->user);
    ConfigAlias::define('DB_PASSWORD', isset($dsn->pass) ? $dsn->pass : null);
    ConfigAlias::define('DB_HOST', isset($dsn->port) ? "{$dsn->host}:{$dsn->port}" : $dsn->host);
}

/**
 * Authentication Unique Keys and Salts
 */
ConfigAlias::define('AUTH_KEY', env('AUTH_KEY'));
ConfigAlias::define('SECURE_AUTH_KEY', env('SECURE_AUTH_KEY'));
ConfigAlias::define('LOGGED_IN_KEY', env('LOGGED_IN_KEY'));
ConfigAlias::define('NONCE_KEY', env('NONCE_KEY'));
ConfigAlias::define('AUTH_SALT', env('AUTH_SALT'));
ConfigAlias::define('SECURE_AUTH_SALT', env('SECURE_AUTH_SALT'));
ConfigAlias::define('LOGGED_IN_SALT', env('LOGGED_IN_SALT'));
ConfigAlias::define('NONCE_SALT', env('NONCE_SALT'));

/**
 * Custom Settings
 */
ConfigAlias::define('AUTOMATIC_UPDATER_DISABLED', true);
ConfigAlias::define('DISABLE_WP_CRON', env('DISABLE_WP_CRON') ?: false);
// Disable the plugin and theme file editor in the admin
ConfigAlias::define('DISALLOW_FILE_EDIT', true);
// Disable plugin and theme updates and installation from the admin
ConfigAlias::define('DISALLOW_FILE_MODS', true);

/**
 * Debugging Settings
 */
ConfigAlias::define('WP_DEBUG_DISPLAY', false);
ConfigAlias::define('WP_DEBUG_LOG', env('WP_DEBUG_LOG') ?? false);
ConfigAlias::define('SCRIPT_DEBUG', false);
ini_set('display_errors', '0');

/**
 * Allow WordPress to detect HTTPS when used behind a reverse proxy or a load balancer
 * See https://codex.wordpress.org/Function_Reference/is_ssl#Notes
 */
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
    $_SERVER['HTTPS'] = 'on';
}

$env_config = __DIR__ . '/environments/' . WP_ENV . '.php';

if (file_exists($env_config)) {
    require_once $env_config;
}

ConfigAlias::apply();

/**
 * Bootstrap WordPress
 */
if (!defined('ABSPATH')) {
    define('ABSPATH', $webroot_dir . '/wp/');
}

$containerBuilder = new ContainerBuilder();
$containerBuilder->useAutowiring(true);

$containerBuilder->addDefinitions(require __DIR__ . '/configuration.php');

$services = require __DIR__ . '/services.php';
$services($containerBuilder);

$container = $containerBuilder->build();

$app = Bridge::create($container);

Kernel::setAPP($app);
