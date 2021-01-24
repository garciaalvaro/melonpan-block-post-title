<?php
/**
 * Plugin Name: Melonpan Block - Post Title
 * Plugin URI: https://wordpress.org/plugins/melonpan-block-post-title/
 * Description: Block that displays the current Post Title and Excerpt.
 * Author: melonpan
 * Version: 1.0.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace MELONPANBLOCKPOSTTITLE;

// Exit if accessed directly.
if (!defined("ABSPATH")) {
	exit();
}

define(__NAMESPACE__ . "\PLUGIN_NAME", "melonpan-block-post-title");
define(__NAMESPACE__ . "\PLUGIN_VERSION", "1.0.0");
define(__NAMESPACE__ . "\DIST_DIR", plugins_url("dist/", __FILE__));
define(__NAMESPACE__ . "\INC_DIR", plugin_dir_path(__FILE__) . "inc/");

require_once INC_DIR . "register-enqueue.php";
require_once INC_DIR . "register-block_render.php";
