# Images Directory

This is where you should place all your existing images from your old project.

## How to Use Your Existing Images

1. **Copy your images** from your old project's 'images' folder into this directory
2. **Update the code** to reference your actual images instead of the placeholder emojis

## Image Recommendations

### For the Home Page:
- `artist.jpg` - Photo of your permanent makeup artist for the "Meet Our Artist" section
- `spa-interior.jpg` - Interior photo of your spa for the about section
- `logo.png` - Your spa logo for the header (optional)

### For the Services Page:
- `microblading-example.jpg` - Example of microblading work
- `lip-blushing-example.jpg` - Example of lip blushing work
- `eyeliner-example.jpg` - Example of permanent eyeliner work

### For the Gallery Page:
- `before-after-1.jpg` - Before and after microblading
- `before-after-2.jpg` - Before and after lip blushing
- `before-after-3.jpg` - Before and after eyeliner
- `gallery-1.jpg` through `gallery-8.jpg` - Various work examples

### For the Care Page:
- `aftercare-1.jpg` - Aftercare instructions visual
- `aftercare-2.jpg` - Healing process example

## How to Replace Placeholders

In the code, you'll see placeholder emojis like this:
```jsx
<div className={styles.imagePlaceholder}>✨</div>;
```

Replace them with your actual images like this:
```jsx
<Image
  src="/images/your-image-name.jpg"
  alt="Description of the image"
  width={400}
  height={300}
  className={styles.yourImageClass}
/>;
```

## Image Formats
- **JPG/JPEG**: Best for photographs
- **PNG**: Best for graphics with transparency
- **WebP**: Modern format with good compression (if supported)

## Image Sizes
- **Hero images**: 1200x600px or larger
- **Gallery images**: 800x600px or similar aspect ratio
- **Thumbnails**: 400x300px
- **Profile photos**: 400x500px (portrait orientation)

## Optimization Tips
- Compress images to reduce file size
- Use descriptive filenames
- Include alt text for accessibility
- Consider using Next.js Image component for automatic optimization
