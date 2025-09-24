<?php
/**
 * Plugin Name: H3 Heading Exporter
 * Description: Export all H3 headings from every published post into downloadable text files named after each post title.
 * Version: 1.0.0
 * Author: OpenAI Assistant
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'H3_Heading_Exporter' ) ) {

    class H3_Heading_Exporter {

        /**
         * Bootstraps the plugin hooks.
         */
        public static function init() {
            add_action( 'admin_menu', array( __CLASS__, 'register_tools_page' ) );
            add_action( 'admin_post_h3_heading_export', array( __CLASS__, 'handle_export_request' ) );
        }

        /**
         * Registers the plugin page under Tools.
         */
        public static function register_tools_page() {
            add_management_page(
                __( 'H3 Heading Exporter', 'h3-heading-exporter' ),
                __( 'H3 Heading Exporter', 'h3-heading-exporter' ),
                'manage_options',
                'h3-heading-exporter',
                array( __CLASS__, 'render_admin_page' )
            );
        }

        /**
         * Renders the admin page with the export button.
         */
        public static function render_admin_page() {
            if ( ! current_user_can( 'manage_options' ) ) {
                wp_die( esc_html__( 'You do not have permission to access this page.', 'h3-heading-exporter' ) );
            }

            ?>
            <div class="wrap">
                <h1><?php esc_html_e( 'H3 Heading Exporter', 'h3-heading-exporter' ); ?></h1>
                <p><?php esc_html_e( 'Export the H3 headings from every published post. Each post will be saved as a text file named after the post title.', 'h3-heading-exporter' ); ?></p>
                <form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
                    <?php wp_nonce_field( 'h3_heading_export_action' ); ?>
                    <input type="hidden" name="action" value="h3_heading_export" />
                    <?php submit_button( __( 'Export H3 Headings', 'h3-heading-exporter' ) ); ?>
                </form>
            </div>
            <?php
        }

        /**
         * Handles the export request and outputs a ZIP archive.
         */
        public static function handle_export_request() {
            if ( ! current_user_can( 'manage_options' ) ) {
                wp_die( esc_html__( 'You do not have permission to export headings.', 'h3-heading-exporter' ) );
            }

            check_admin_referer( 'h3_heading_export_action' );

            if ( ! class_exists( 'ZipArchive' ) ) {
                wp_die( esc_html__( 'ZipArchive is required to export the headings.', 'h3-heading-exporter' ) );
            }

            $posts = get_posts(
                array(
                    'numberposts' => -1,
                    'post_type'   => 'post',
                    'post_status' => 'publish',
                )
            );

            if ( empty( $posts ) ) {
                wp_die( esc_html__( 'No published posts were found to export.', 'h3-heading-exporter' ) );
            }

            $tmp_file = wp_tempnam( 'h3-heading-export' );
            if ( ! $tmp_file ) {
                wp_die( esc_html__( 'Unable to create a temporary file for the export.', 'h3-heading-exporter' ) );
            }

            $zip = new ZipArchive();
            if ( true !== $zip->open( $tmp_file, ZipArchive::CREATE | ZipArchive::OVERWRITE ) ) {
                wp_die( esc_html__( 'Unable to initialize the export archive.', 'h3-heading-exporter' ) );
            }

            foreach ( $posts as $post ) {
                $post_title = get_the_title( $post );
                $filename   = self::generate_filename( $post_title, $post->ID );
                $headings   = self::extract_h3_headings( $post->post_content );

                if ( empty( $headings ) ) {
                    $content = esc_html__( 'No H3 headings were found in this post.', 'h3-heading-exporter' );
                } else {
                    $content = implode( PHP_EOL, $headings );
                }

                $zip->addFromString( $filename, $content );
            }

            $zip->close();

            $export_filename = sprintf( 'h3-headings-export-%s.zip', gmdate( 'Y-m-d-His' ) );

            nocache_headers();

            header( 'Content-Type: application/zip' );
            header( 'Content-Disposition: attachment; filename=' . $export_filename );
            header( 'Content-Length: ' . filesize( $tmp_file ) );

            readfile( $tmp_file );
            @unlink( $tmp_file );
            exit;
        }

        /**
         * Extracts the H3 headings from post content.
         *
         * @param string $content Post content.
         *
         * @return array<int, string> Array of heading text.
         */
        protected static function extract_h3_headings( $content ) {
            $headings = array();

            if ( empty( $content ) ) {
                return $headings;
            }

            $use_internal_errors = libxml_use_internal_errors( true );

            $dom = new DOMDocument();
            $encoding_wrapper = '<?xml encoding="utf-8" ?>';
            $html = $encoding_wrapper . wp_kses_post( $content );

            if ( ! empty( $html ) ) {
                $dom->loadHTML( $html );
                $nodes = $dom->getElementsByTagName( 'h3' );

                foreach ( $nodes as $node ) {
                    $text = trim( wp_strip_all_tags( $node->textContent ) );

                    if ( '' !== $text ) {
                        $headings[] = $text;
                    }
                }
            }

            libxml_clear_errors();
            libxml_use_internal_errors( $use_internal_errors );

            return $headings;
        }

        /**
         * Generates a safe filename for the exported text file.
         *
         * @param string $title Post title.
         * @param int    $post_id Post ID.
         *
         * @return string
         */
        protected static function generate_filename( $title, $post_id ) {
            $sanitized = sanitize_title( $title );

            if ( empty( $sanitized ) ) {
                $sanitized = 'post-' . absint( $post_id );
            }

            return $sanitized . '.txt';
        }
    }

    H3_Heading_Exporter::init();
}
