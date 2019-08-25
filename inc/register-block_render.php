<?php

namespace MELONPANBLOCKPOSTTITLE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Block render function.
 *
 * @since 1.0.0
 */
add_action( 'init', __NAMESPACE__ . '\register_block' );
function register_block() {

    register_block_type(
		'melonpan-block/post-title',
		array(
			'editor_script'   => PLUGIN_NAME,
			'render_callback' => __NAMESPACE__ . '\render_callback',
			'attributes'      => array(
				'title_html'      => array(
					'type'    => "string",
					'default' => "h1_a"
				),
				'excerpt_enabled' => array(
					'type'    => "boolean",
					'default' => false
				),
				'excerpt_html'    => array(
					'type'    => "string",
					'default' => "span"
				)
			),
		)
	);
}

/**
 * Build the HTML of the block based on the attribute values.
 *
 * @since 1.0.0
 */
function render_callback( $attributes ) {

	$post_id = get_the_ID();
	$title   = get_the_title( $post_id );
	$excerpt = has_excerpt( $post_id ) ? get_the_excerpt( $post_id ) : '';
	$url     = get_the_permalink( $post_id );
	$content = '';

	$root_classes_array = array_filter( array(
		'wp-block-melonpan-block-post-title',
		! empty( $attributes['align'] ) ? 'align-' . $attributes['align'] : '',
	) );

	$root_classes = implode( ' ', $root_classes_array );

	$title_classes = true === $attributes['excerpt_enabled']
		? 'mbpt-title'
		: $root_classes . ' mbpt-title';

	switch ( $attributes['title_html'] ) {

		case "a":
			$content .= '<a class="' . esc_attr( $title_classes ) . '" href="' . esc_url( $url ) . '">';
			$content .= esc_attr( $title );
			$content .= '</a>';
			break;

		case "a_h1":
			$content .= '<a class="' . esc_attr( $title_classes ) . '" href="' . esc_url( $url ) . '">';
			$content .= '<h1>';
			$content .= esc_attr( $title );
			$content .= '</h1>';
			$content .= '</a>';
			break;

		case "h1":
			$content .= '<h1 class="' . esc_attr( $title_classes ) . '">';
			$content .= esc_attr( $title );
			$content .= '</h1>';
			break;

		case "h1_a":
			$content .= '<h1 class="' . esc_attr( $title_classes ) . '">';
			$content .= '<a href="' . esc_url( $url ) . '">';
			$content .= esc_attr( $title );
			$content .= '</a>';
			$content .= '</h1>';
			break;

		default:
			$content .= '<span class="' . esc_attr( $title_classes ) . '">';
			$content .= esc_attr( $title );
			$content .= '</span>';
			break;
	}

	if ( true === $attributes['excerpt_enabled'] ) {

		switch ( $attributes['excerpt_html'] ) {

			case "h2":
				$content .= '<h2 class="mbpt-excerpt">';
				$content .= esc_attr( $excerpt );
				$content .= '</h2>';
				break;

			case "h3":
				$content .= '<h3 class="mbpt-excerpt">';
				$content .= esc_attr( $excerpt );
				$content .= '</h3>';
				break;

			case "h4":
				$content .= '<h4 class="mbpt-excerpt">';
				$content .= esc_attr( $excerpt );
				$content .= '</h4>';
				break;

			default:
				$content .= '<span class="mbpt-excerpt">';
				$content .= esc_attr( $excerpt );
				$content .= '</span>';
				break;
		}

		$content = '<div class="' . esc_attr( $root_classes ) . '">' . $content . '</div>';
	}

	return $content;
}
