<?php
/**
 * Plugin Name: Hadith Fetcher
 * Plugin URI: https://example.com/hadith-fetcher
 * Description: A plugin to fetch hadiths from sunnah.com and store them in the existing hadith post type
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://example.com
 * Text Domain: hadith-fetcher
 * Domain Path: /languages
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('HADITH_FETCHER_VERSION', '1.0.0');
define('HADITH_FETCHER_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('HADITH_FETCHER_PLUGIN_URL', plugin_dir_url(__FILE__));

// Include required files
require_once HADITH_FETCHER_PLUGIN_DIR . 'includes/class-hadith-fetcher.php';
require_once HADITH_FETCHER_PLUGIN_DIR . 'includes/class-hadith-fetcher-api.php';
require_once HADITH_FETCHER_PLUGIN_DIR . 'includes/class-hadith-fetcher-database.php';

// Initialize the plugin - hook into the proper WordPress hook
function hadith_fetcher_init() {
    // Initialize main plugin class - using existing post type
    $hadith_fetcher = new Hadith_Fetcher();
    $hadith_fetcher->init();
}
add_action('init', 'hadith_fetcher_init', 15); // Set priority after post types are registered

// Initialize admin class if in admin area
add_action('plugins_loaded', function() {
    if (is_admin()) {
        require_once HADITH_FETCHER_PLUGIN_DIR . 'includes/class-hadith-fetcher-admin.php';
        $hadith_fetcher_admin = new Hadith_Fetcher_Admin();
        $hadith_fetcher_admin->init(); // Initialize admin class
    }
});

// Register activation hook
register_activation_hook(__FILE__, 'hadith_fetcher_activate');
function hadith_fetcher_activate() {
    // Create database tables
    $db = new Hadith_Fetcher_Database();
    $db->check_tables();
    
    // Flush rewrite rules
    flush_rewrite_rules();
}

// Register deactivation hook
register_deactivation_hook(__FILE__, 'hadith_fetcher_deactivate');
function hadith_fetcher_deactivate() {
    // Flush rewrite rules on deactivation
    flush_rewrite_rules();
}

// Load textdomain
function hadith_fetcher_load_textdomain() {
    load_plugin_textdomain('hadith-fetcher', false, dirname(plugin_basename(__FILE__)) . '/languages');
}
add_action('init', 'hadith_fetcher_load_textdomain'); 