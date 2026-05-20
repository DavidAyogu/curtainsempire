# Image Organization Guide for Curtains Empire

## Setup Instructions

Your gallery is now ready! To display your images on the website, follow these steps:

### Step 1: Organize Your Images
Move your images into the appropriate folders:

```
public/images/
├── installed/          (Already installed curtains in homes)
│   ├── 1001536147.jpg
│   ├── 1001588050.jpg
│   ├── 1001588054.jpg
│   ├── 1001602184.jpg
│   ├── 1001606735.jpg
│   └── 1001606743.jpg
│
├── uninstalled/        (Premium fabrics & collections)
│   ├── 1001606747.jpg
│   ├── 1001606751.jpg
│   ├── 1001606759.jpg
│   ├── 1001606763.jpg
│   ├── 1001606767.jpg
│   └── 1001606771.jpg
│
└── accessories/        (Luxury finishes & accessories)
    ├── 1001606797.jpg
    ├── 1001627288.jpg
    ├── cf30f137-9457-4601-bd26-27d2e7b608d7-1_all_38620.jpg
    ├── cf30f137-9457-4601-bd26-27d2e7b608d7-1_all_38625.jpg
    ├── cf30f137-9457-4601-bd26-27d2e7b608d7-1_all_38630.jpg
    └── cf30f137-9457-4601-bd26-27d2e7b608d7-1_all_38650.jpg
```

### Step 2: Update Gallery Component (if needed)

If your images are named differently, update the `galleryItems` object in `components/Gallery.tsx`:

```typescript
const galleryItems = {
  installed: [
    { id: 1, src: '/images/installed/your-image-name.jpg', title: 'Title', description: 'Description' },
    // ... more items
  ],
  // ... other categories
};
```

### Step 3: View Your Gallery

The gallery appears on your homepage with three interactive tabs:
- **Installed**: Showcases completed installations
- **Collections**: Premium fabrics ready for installation  
- **Accessories**: Luxury finishing elements

## Features

✨ **Classy Design Elements:**
- Luxury dark theme with gold accents
- Smooth hover animations and transitions
- Category filtering with elegant tab navigation
- Lightbox modal for detailed image viewing
- Fully responsive grid layout (mobile, tablet, desktop)
- Glassmorphism effects and backdrop blur
- Call-to-action buttons for consultations

🎨 **Interactive Features:**
- Click any image to view it in fullscreen
- Smooth animations on scroll
- Hover effects with image zoom
- Category tabs with smooth transitions
- CTA section encouraging bookings

## Customization

To customize the gallery:

1. **Change titles/descriptions**: Edit the `galleryItems` in `components/Gallery.tsx`
2. **Adjust colors**: Update Tailwind color classes (gold, charcoal, etc.) in the component
3. **Modify animations**: Adjust Framer Motion transition values
4. **Add more images**: Add new items to the relevant category array

## Technical Details

- Built with Next.js 14 & React 18
- Styled with Tailwind CSS
- Animated with Framer Motion
- Responsive images with Next.js Image component
- Deployed with smooth scrolling and modern UX

Enjoy your luxury curtains gallery! 🎭✨
