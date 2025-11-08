# Website Build Prompt: Foreign Escort Goa

## Project Overview
Create a complete, production-ready website for **Foreign Escort** (https://foreignescort.com) targeting Goa, India. The website should replicate the exact design, layout, structure, and functionality of the existing Foreign Escort website, but customized for Goa with the Foreign Escort branding.

---

## Technical Stack & Requirements

### Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans, Geist Mono, Playfair Display (from Google Fonts)
- **Images**: Next.js Image component with optimization
- **SEO**: Complete metadata, structured data (JSON-LD), Open Graph, Twitter Cards

### Domain & Branding
- **Domain**: https://foreignescort.com
- **Brand Name**: Foreign Escort
- **Location**: Goa, India
- **Service Type**: Russian Escorts in Goa
- **Contact Phone**: +91-8121426651 (or update as needed)

---

## Design System & Color Scheme

### Color Palette
- **Primary Background**: `bg-zinc-950` (dark black)
- **Text Colors**: 
  - Primary: `text-white`
  - Secondary: `text-white/80`, `text-white/60`, `text-white/40`
  - Accent: `text-[#B8860B]` (golden yellow for headings)
  - Links: `text-amber-400` with `hover:text-amber-300`
- **Accent Colors**:
  - Amber: `amber-400`, `amber-500`, `#facc15`
  - Rose: `rose-400`, `rose-500`
  - Pink: `pink-500/30`
  - Sky: `sky-500/20`
- **Border Colors**: `border-white/15`, `border-white/20`, `border-white/25`
- **Gradient Overlays**: `bg-zinc-950/50`, `bg-zinc-950/55`, `bg-black/50`, `bg-black/60`

### Typography
- **Display Font**: Playfair Display (for headings) - variable `--font-playfair`
- **Body Font**: Geist Sans - variable `--font-geist-sans`
- **Mono Font**: Geist Mono - variable `--font-geist-mono`
- **Heading Sizes**: `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`
- **Section Headings**: Use `font-display` class with `text-[#B8860B]` color

### Animations & Effects
- **Float Animation**: `animate-[floatY_6s_ease-in-out_infinite]` - vertical floating effect
- **Shine Sweep**: `animate-[shineSweep_2.8s_linear_infinite]` - shimmer effect
- **Pulse Glow**: Glowing effects on hover states
- **Blur Effects**: `blur-3xl` for background gradients
- **Backdrop Blur**: `backdrop-blur-xl`, `backdrop-blur-2xl`

---

## Page Structure & Sections

### 1. Hero Section (Full Screen)
**Location**: Top of homepage, full viewport height

**Features**:
- **Background Images**: 
  - Mobile: `/images/mobile-hero.jpg` (shown on `md:hidden`)
  - Desktop: `/images/desktop-hero.jpg` (shown on `hidden md:block`)
- **Overlay**: Dark overlay `bg-zinc-950/50` on top of images
- **Animated Blur Circles**: 
  - Left: `bg-pink-500/30 blur-3xl` at `-left-32 top-20`
  - Right: `bg-sky-500/20 blur-3xl` at `right-[-120px] bottom-10`
- **Content Layout**: Two-column on desktop (`lg:flex-row`)

**Left Column**:
- **Main Heading (H1)**: "Goa Russian Escorts | Book Russian Girls With 10% Discount"
- **Subheading (H2)**: "REAL RUSSIAN GIRLS AVAILABLE NOW AT AFFORDABLE RATES"
- **Description Paragraph**: 2-3 sentences about the service
- **Stats Cards** (3 cards in grid):
  - "Cities Live" / "08+"
  - "Profiles Synced" / "120"
  - "Support Window" / "24/7"
  - Each card: Gradient border, dark background, hover effects, golden gradient text on numbers

**Right Column**:
- **Orbit Animation Circle**: 
  - Outer circles with dashed borders
  - Central card showing "Tonight's flow" with steps (Choose city, Match profile, Confirm slot)
  - Orbiting city links around the circle (animated with `floatY`)
  - Each city link has accent color gradient

**Container**: `max-w-6xl`, padding `px-6`, `pt-44`, `pb-24`

---

### 2. Content Section - Service Areas
**Layout**: Two-column flex (`lg:flex-row`)

**Left Column**:
- **Heading**: "Russian Escorts Available Throughout Goa"
- **Paragraphs**: 2-3 paragraphs about services in Goa
- **Internal Links**: Service area links styled with `text-amber-400 hover:text-amber-300 underline`

**Right Column**:
- **Service Areas Card**:
  - Border: `border-white/15`
  - Background: `bg-black/50 backdrop-blur-lg`
  - Grid of service area links (2 columns on `sm:grid-cols-2`)
  - Each area: Rounded card with blue accent dot, hover effects with blue gradient
  - Areas: Candolim, Calangute, Baga, Panaji, Arpora, Vagator, Morjim, Anjuna, Siolim, Colva, etc.

---

### 3. How to Book Section
**Layout**: Two-column with alternating image/text

**Structure**:
- **Left**: Image (`/images/erotic-russian-kiss.jpg`)
- **Right**: Heading "How to Book Russian Escorts in Goa" + paragraphs
- **Image Style**: Rounded `rounded-3xl`, `min-h-[400px]`, `object-cover`

---

### 4. Experienced Escorts Section
**Layout**: Two-column (text on left, image on right)

**Content**:
- **Heading**: "Experienced Russian Escorts You Can Trust"
- **Image**: `/images/high-profile-russian-escorts-in-chennai.avif` (or Goa-specific)

---

### 5. Business Events Section
**Layout**: Two-column (image on left, text on right)

**Content**:
- **Heading**: "Need Someone for Business Events or Social Gatherings?"
- **Image**: `/images/gallery/1.jpeg`

---

### 6. Privacy & Reliability Section
**Layout**: Two-column (text on left, image on right)

**Content**:
- **Heading**: "Your Privacy Matters and We Keep Our Word"
- **Image**: `/images/gallery/10.jpeg`

---

### 7. Verified Escorts Section
**Layout**: Two-column (image on left, text on right)

**Content**:
- **Heading**: "Real Russian Girls - No Fake Profiles, No Scams"
- **Image**: `/images/gallery/20.jpeg`

---

### 8. In-Call & Out-Call Section
**Layout**: Two-column (text on left, image on right)

**Content**:
- **Heading**: "Meet at Your Hotel or Your Place - Your Choice"
- **Image**: `/images/gallery/30.jpeg`

---

### 9. Body Massage Section
**Layout**: Two-column (image on left, text on right)

**Content**:
- **Heading**: "Need to Unwind? We've Got You Covered"
- **Image**: `/images/gallery/40.jpeg`

---

### 10. Short Term & Overnight Section
**Layout**: Two-column (text on left, image on right)

**Content**:
- **Heading**: "Two Hours or All Night - Whatever Works for You"
- **Image**: `/images/gallery/50.jpeg`

---

### 11. Party & Events Section
**Layout**: Two-column (image on left, text on right)

**Content**:
- **Heading**: "Need a Date for an Event? We've Got You"
- **Image**: `/images/gallery/60.jpeg`

---

### 12. No Advance Payment Section
**Layout**: Two-column (text on left, image on right)

**Content**:
- **Heading**: "No Advance Payment Required - Pay After You're Happy"
- **Image**: `/images/gallery/70.jpeg`

---

### 13. 24/7 Availability Section
**Layout**: Two-column (image on left, text on right)

**Content**:
- **Heading**: "Available 24/7 - We're Here When You Need Us"
- **Image**: `/images/gallery/80.jpeg`

---

### 14. Beautiful & Fashionable Section
**Layout**: Two-column (text on left, image on right)

**Content**:
- **Heading**: "They Show Up Looking Good Every Time"
- **Image**: `/images/gallery/90.jpeg`

---

### 15. Open-Minded Section
**Layout**: Two-column (image on left, text on right)

**Content**:
- **Heading**: "They Listen and They're Open to What You Want"
- **Image**: `/images/gallery/100.jpeg`

---

### 16. Affordable Rates Section
**Layout**: Two-column (text on left, image on right)

**Content**:
- **Heading**: "Good Service That Doesn't Break the Bank"
- **Image**: `/images/gallery/110.jpeg`

---

### 17. Safety & Hygiene Section
**Layout**: Two-column (image on left, text on right)

**Content**:
- **Heading**: "Your Health and Safety Come First"
- **Image**: `/images/gallery/112.jpeg`

---

### 18. Gallery Section
**Component**: `<Gallery />`
- Grid of images from `/images/gallery/`
- Lightbox/modal functionality
- Responsive grid layout

---

### 19. Curvaceous Girls Section
**Layout**: Two-column (image on left, text on right)

**Content**:
- **Heading**: "Curvaceous and Slim Russian Girls - All Types Available"
- **Image**: `/images/russian-call-girl.jpg`

---

### 20. Final CTA Section
**Layout**: Two-column (text on left, image on right)

**Content**:
- **Heading**: "Russian Escorts in Goa That Deliver What You Want"
- **Image**: `/images/russian-escort-in-chennai.jpg` (or Goa-specific)

---

### 21. Video Gallery Section
**Component**: `<VideoGallery />`

**Features**:
- Carousel of 5 videos (`/images/gallery/v1.mp4` to `v5.mp4`)
- Auto-play functionality (muted by default)
- Play/Pause controls
- Volume control with mute toggle
- Fullscreen mode
- Video indicators/dots
- Thumbnail strip below main player
- Auto-advance every 8 seconds
- Smooth transitions between videos

**Styling**:
- Dark gradient background with animated blur circles
- Golden border and accents
- Luxury frame design with rounded corners
- Video info overlay at bottom

---

### 22. Testimonials Section
**Component**: `<Testimonials cityName="Goa" />`

**Features**:
- Carousel of client testimonials (15 testimonials for Goa)
- Auto-slide every 6 seconds
- Responsive: 1 item on mobile, 3 on desktop
- Each testimonial card:
  - Quote icon
  - Testimonial text
  - 5-star rating
  - Client name and role
- Gradient background with blur effects
- Navigation dots/indicators

**Testimonial Data**: Include Goa-specific testimonials mentioning:
- Beach resorts (Candolim, Baga, Vagator)
- Beach parties and nightlife
- Water sports
- Beach villas
- Sunset parties

---

### 23. Hotels Section
**Component**: `<Hotels />`

**Features**:
- Grid of hotels in Goa
- Each hotel card with:
  - Hotel image
  - Hotel name
  - Link to hotel-specific page
- Hotels to include: Taj Exotica, W Goa, Hyatt, Leela, etc.

---

### 24. FAQ Section
**Layout**: Grid of 2 columns (`md:grid-cols-2`)

**Questions to Include** (Goa-specific):
1. "How to book Russian escorts in Goa?"
2. "Do you offer Russian escorts with discount in Goa?"
3. "Are Russian escorts in Goa verified?"
4. "Do you require advance payment for Russian escorts?"
5. "Are Russian escorts available 24/7 in Goa?"
6. "Do Russian escorts provide in-call and out-call services?"

**Styling**:
- Each FAQ card: `rounded-2xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg`
- Schema.org markup for FAQPage

---

## Navigation & Header

### Main Navigation Component
**Location**: Fixed at top (`fixed inset-x-0 top-0 z-50`)

**Features**:
- Glassmorphism effect: `bg-zinc-950/65 backdrop-blur-2xl`
- Border: `border border-white/15`
- Rounded: `rounded-full`
- Links: Home, About, Gallery, Blog, Contact
- Active link: Golden background with shine effect
- Mobile: Hamburger menu
- Logo/Brand name: "Foreign Escort"

**Styling**:
- Links: Small uppercase text with tracking
- Active state: Golden gradient background
- Hover effects: Shine sweep animation

---

## Footer Component

**Features**:
- Dark background
- Links: Privacy Policy, Terms, Contact
- Copyright: "(c) 2024 Foreign Escort"
- Contact information
- Social media links (if applicable)

---

## SEO & Metadata

### Homepage Metadata
```typescript
{
  title: "Goa Russian Escorts | Book Russian Girls With 10% Discount",
  description: "Book verified Russian escorts in Goa with 10% discount. Real Russian call girls available 24/7 for in-call and out-call services. Professional, verified profiles with no advance payment required.",
  keywords: [
    "Goa Russian escorts",
    "Russian escorts Goa",
    "Russian call girls Goa",
    "Russian escorts in Goa",
    "Goa Russian escort service",
    // ... more keywords
  ],
  metadataBase: new URL("https://foreignescort.com"),
  openGraph: {
    title: "Goa Russian Escorts | Book Russian Girls With 10% Discount",
    description: "...",
    url: "https://foreignescort.com",
    siteName: "Foreign Escort",
    images: [{ url: "/images/desktop-hero.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    // ...
  },
  robots: {
    index: true,
    follow: true,
    // ...
  },
  alternates: {
    canonical: "https://foreignescort.com",
  },
  other: {
    "geo.region": "IN-GA",
    "geo.placename": "Goa",
    "geo.position": "15.2993;74.1240",
    "ICBM": "15.2993, 74.1240",
    // ...
  }
}
```

### Structured Data (JSON-LD)
Include these schemas:
1. **WebSite Schema**
2. **Organization Schema**
3. **LocalBusiness Schema**
4. **Service Schema**
5. **FAQPage Schema**
6. **BreadcrumbList Schema**

**Key Details**:
- Name: "Foreign Escort"
- URL: https://foreignescort.com
- Location: Goa, India
- Coordinates: 15.2993, 74.1240
- Region: IN-GA
- Phone: +91-8121426651
- Hours: 24/7 (00:00-23:59, all days)

---

## Content Customization for Goa

### Location-Specific Content
- **Service Areas**: Candolim, Calangute, Baga, Panaji, Arpora, Vagator, Morjim, Anjuna, Siolim, Colva, etc.
- **Hotels**: Mention Goa-specific hotels (Taj Exotica, W Goa, Hyatt, Leela, etc.)
- **Activities**: Beach parties, sunset cruises, water sports, beach clubs, nightlife
- **Landmarks**: Beach references, coastal areas, resort areas

### Content Tone
- Professional yet friendly
- Emphasize: beach lifestyle, privacy, discretion, 24/7 availability
- Mention: No advance payment, verified profiles, real Russian girls
- Goa-specific: Beach resorts, beach parties, coastal lifestyle

---

## Component Structure

### Required Components
1. **MainNav** - Navigation header
2. **Footer** - Footer component
3. **Gallery** - Image gallery with lightbox
4. **VideoGallery** - Video carousel
5. **Testimonials** - Client testimonials carousel
6. **Hotels** - Hotels grid
7. **AgeVerification** - Age gate (if needed)

---

## Responsive Design

### Breakpoints
- Mobile: Default (< 768px)
- Tablet: `sm:` (640px+), `md:` (768px+)
- Desktop: `lg:` (1024px+), `xl:` (1280px+)

### Mobile Considerations
- Hero section: Stack vertically on mobile
- Stats cards: 1 column on mobile, 3 on desktop
- Content sections: Stack image/text on mobile
- Navigation: Hamburger menu on mobile
- Service areas: 1 column on mobile, 2 on desktop

---

## Image Assets Required

### Hero Images
- `/images/mobile-hero.jpg` - Mobile hero background
- `/images/desktop-hero.jpg` - Desktop hero background

### Gallery Images
- `/images/gallery/1.jpeg` through `/images/gallery/112.jpeg`
- `/images/russian-call-girl.jpg`
- `/images/russian-escort-in-chennai.jpg`
- `/images/erotic-russian-kiss.jpg`
- `/images/high-profile-russian-escorts-in-chennai.avif`

### Video Files
- `/images/gallery/v1.mp4` through `/images/gallery/v5.mp4`

---

## Key Features to Implement

1. **Smooth Animations**: All hover effects, transitions, and animations
2. **Glassmorphism**: Frosted glass effects on cards and navigation
3. **Gradient Accents**: Golden/amber gradients throughout
4. **Blur Effects**: Background blur for depth
5. **Responsive Images**: Next.js Image optimization
6. **SEO Optimization**: Complete metadata and structured data
7. **Performance**: Optimize images, lazy loading, code splitting
8. **Accessibility**: Proper ARIA labels, semantic HTML

---

## Development Checklist

- [ ] Setup Next.js project with TypeScript
- [ ] Configure Tailwind CSS with custom colors
- [ ] Add Google Fonts (Geist Sans, Geist Mono, Playfair Display)
- [ ] Create layout component with navigation and footer
- [ ] Build hero section with orbit animation
- [ ] Create all content sections (18+ sections)
- [ ] Implement Gallery component
- [ ] Implement VideoGallery component
- [ ] Implement Testimonials component (Goa-specific)
- [ ] Implement Hotels component
- [ ] Add FAQ section with schema markup
- [ ] Configure SEO metadata
- [ ] Add structured data (JSON-LD)
- [ ] Optimize all images
- [ ] Test responsive design on all breakpoints
- [ ] Add age verification (if needed)
- [ ] Configure domain and hosting

---

## Notes

- All content should be Goa-specific (replace Chennai with Goa throughout)
- Maintain exact same design aesthetic and styling
- Ensure all links work correctly
- Test all animations and interactions
- Verify SEO metadata is complete
- Ensure mobile responsiveness across all sections
- Use Goa-specific testimonials and content
- Update all contact information and branding to "Foreign Escort"

---

## Final Deliverables

1. Complete Next.js application
2. All components implemented
3. All images optimized and placed
4. SEO metadata configured
5. Structured data implemented
6. Responsive design verified
7. Production-ready code
8. Deployed to foreignescort.com domain

---

**This prompt provides a complete blueprint for building the Foreign Escort Goa website with the exact same design and functionality as the Foreign Escort website, customized for Goa.**


