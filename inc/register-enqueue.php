<?php

namespace MELONPANBLOCKPOSTTITLE;

// Exit if accessed directly.
if (!defined("ABSPATH")) {
	exit();
}

/**
 * Enqueue the plugin styles and scripts in the editor.
 *
 * @since 1.0.0
 */
\add_action("enqueue_block_editor_assets", __NAMESPACE__ . '\enqueue');
function enqueue()
{
	\wp_enqueue_style(
		PLUGIN_NAME,
		DIST_DIR . PLUGIN_NAME . ".css",
		[],
		PLUGIN_VERSION
	);

	\wp_enqueue_script(
		PLUGIN_NAME,
		DIST_DIR . PLUGIN_NAME . ".js",
		[
			"wp-block-editor",
			"wp-blocks",
			"wp-components",
			"wp-data",
			"wp-editor",
			"wp-element",
			"wp-i18n",
		],
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);
}
