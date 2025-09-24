# H3 Heading Exporter

A simple WordPress plugin that lets administrators download the text of every `<h3>` heading from all published posts. The export bundles one text file per post into a single ZIP archive. Each file uses the post title as its filename, making it easy to identify which headings belong to which post.

## Features

- Adds a **Tools → H3 Heading Exporter** page in the WordPress dashboard.
- Provides a single button that collects all `<h3>` headings from every published post.
- Generates a downloadable ZIP file containing one `.txt` file per post.
- Filenames are derived from the post titles (with a fallback to the post ID when necessary).
- Automatically reports meaningful errors when no posts exist or when the server is missing the ZipArchive extension.

## Usage

1. Upload the `h3-heading-exporter` folder to your WordPress site's `wp-content/plugins` directory or install it via the WordPress plugin uploader.
2. Activate **H3 Heading Exporter** from the **Plugins** page.
3. Navigate to **Tools → H3 Heading Exporter**.
4. Click **Export H3 Headings**.
5. Your browser will download a ZIP archive containing the headings, with each post's headings stored in a text file named after that post's title.

## Requirements

- WordPress 5.8 or later.
- PHP 7.4 or later with the `ZipArchive` extension enabled.

## Development

This repository only contains the plugin code. It is intended to be copied into a WordPress installation for testing and use. No build steps are required.
