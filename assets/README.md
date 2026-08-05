# Artwork Asset Architecture

Place artwork files here using this structure:

```
assets/artworks/
  artwork-name/
    artwork.avif
    artwork.webp
    artwork.jpg
    preview.jpg
```

Recommended workflow:
- Remove EXIF metadata before publishing
- Export AVIF/WebP for web delivery
- Keep original files offline
- Use responsive picture elements
- Use lazy loading for gallery images
