# Hadith Fetcher

A WordPress plugin that fetches hadith content from sunnah.com and populates a custom post type with specific fields.

## Features

- Fetch individual hadiths from sunnah.com
- Bulk import multiple hadiths
- Automatic taxonomy creation and assignment
- Support for multiple languages (English, Urdu, Bengali, etc.)
- Customizable field mapping
- Detailed hadith preview before saving

## Data Structure

The plugin uses a structured JSON format to organize and save hadith data:

```json
{
  "post": {
    "post_title": "Hadith title here",
    "post_status": "publish",
    "post_type": "hadith"
  },
  "meta": {
    "hadith_arabic_text": "Arabic text here...",
    "hadith_collection": "Collection name",
    "hadith_book": "Book name",
    "hadith_chapter": "Chapter name",
    "hadith_number": "Number"
  },
  "reference": {
    "book_name": "Full book name",
    "volume_number": "Volume",
    "page_number": "Page",
    "hadith_number": "Number",
    "chapter_name": "Chapter",
    "authenticity_grade": "Grade",
    "additional_reference": "Additional info"
  },
  "narrators": [
    {
      "narrator_name": "First narrator",
      "narrator_info": "Info about narrator",
      "position": 1
    },
    {
      "narrator_name": "Second narrator",
      "narrator_info": "Info about narrator",
      "position": 2
    }
  ],
  "translations": [
    {
      "language_code": "en",
      "scholar_id": 1,
      "translation_text": "English translation here"
    },
    {
      "language_code": "ur",
      "scholar_id": 1,
      "translation_text": "Urdu translation here"
    }
  ]
}
```

## Custom Fields

The plugin saves data to the following custom fields:

1. **Post Meta Fields**
   - `hadith_arabic_text`: Full Arabic text
   - `hadith_collection`: Name of the collection (e.g., "Sahih Bukhari")
   - `hadith_book`: Identifier for the book within that collection
   - `hadith_chapter`: Chapter title or number
   - `hadith_number`: Number of the hadith in its collection

2. **Reference Data**
   - `book_name`: Complete book title
   - `volume_number`: Volume (if any)
   - `page_number`: Page in the printed work
   - `hadith_number`: Same as above, for cross-reference
   - `chapter_name`: Chapter title in full
   - `authenticity_grade`: e.g., "sahih," "hasan," "daif"
   - `additional_reference`: Any extra source notes

3. **Narrators**
   - Stored as JSON array with:
     - `narrator_name`: Full name
     - `narrator_info`: Short note (role, lifetime, etc.)
     - `position`: Chain order (1, 2, 3...)

4. **Translations**
   - Stored as JSON array with:
     - `language_code`: Two-letter code (e.g., "en," "fr," "ur")
     - `scholar_id`: Numeric ID linking to scholars list
     - `translation_text`: Full translated text

## Taxonomies

The plugin creates and uses the following taxonomies:

- `collections`: Hadith collections (e.g., Sahih Bukhari)
- `books`: Books within collections
- `authenticity`: Authenticity grades
- `narrators`: People in the chain of narration

## Installation

1. Upload the plugin files to the `/wp-content/plugins/hadith-fetcher` directory
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Use the Hadith Fetcher menu to configure the plugin and fetch hadiths

## Usage

1. Go to Hadith Fetcher > Fetch Hadiths to fetch individual hadiths
2. Go to Hadith Fetcher > Bulk Import to import multiple hadiths at once
3. Go to Hadith Fetcher > Settings to configure field mappings and other options

## Requirements

- WordPress 5.0 or higher
- PHP 7.0 or higher

## License

GPL v2 or later 