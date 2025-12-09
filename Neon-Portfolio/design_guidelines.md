# Design Guidelines: C. Likhith AI Healthcare Portfolio

## Design Approach

**Reference-Based**: OutSkill.com modern aesthetic combined with premium tech portfolio patterns (Linear, Stripe). Focus on bold typography, generous spacing, and strategic neon accents against deep black backgrounds.

**Core Principle**: Professional credibility through clean layouts + striking visual moments through neon green highlights and subtle animations.

## Typography System

**Font Stack**: 
- Headings: Inter (700-800 weight) - bold, technical feel
- Body: Inter (400-500 weight) - excellent readability
- Accent/Numbers: Space Grotesk or JetBrains Mono for technical data

**Scale**:
- Hero Headline: 64px desktop / 40px mobile (font-bold)
- Section Titles: 48px desktop / 32px mobile (font-bold)
- Subsections: 24px / 20px (font-semibold)
- Body Text: 18px / 16px (font-normal)
- Small/Meta: 14px (font-medium)

## Layout & Spacing

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Consistent horizontal padding: px-6 mobile, px-12 desktop
- Section vertical spacing: py-20 mobile, py-32 desktop

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing (within cards): 2, 4, 6
- Component spacing: 8, 12, 16
- Section spacing: 20, 24, 32

**Grid System**:
- Projects: 3-column grid desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Skills: 4-6 columns for icon grids
- Single column max-w-3xl for text-heavy content

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Large headline with gradient effect (neon green to lighter green)
- Professional headshot (256px circular avatar) with subtle glow effect
- Subtitle describing "AI Healthcare Innovator" positioning
- CTA buttons (primary neon green, secondary outline)
- Scroll indicator at bottom

### Navigation
- Fixed top navbar with backdrop-blur effect
- Logo/name left, navigation links center, contact CTA right
- Smooth scroll to sections
- Mobile: hamburger menu with slide-in panel

### About Section
- Two-column layout: bio text + highlighted stats/achievements
- Clean paragraph spacing with max-w-prose
- Key metrics in neon green accent boxes (years experience, projects completed, etc.)

### Projects Showcase
- Card-based grid layout with hover lift effects
- Each card: thumbnail image, title, tech stack tags, description
- "View Details" button revealing modal/expanded view with full case study
- Technology tags with neon green borders

### Skills & Technologies
- Icon grid displaying AI/ML tools with logos
- Categories: AI/ML Frameworks, Healthcare Tech, Programming Languages
- Hover effect: icon scales slightly, neon green glow appears
- Simple icon + label format

### Experience Timeline
- Vertical timeline with neon green connector line
- Each position: company logo, title, dates, bullet achievements
- Alternating left-right layout desktop, stacked mobile

### Contact Section
- Centered layout with email + social links (LinkedIn, GitHub, Twitter)
- Simple contact form: name, email, message fields with neon green focus states
- Social icons with hover glow effect

## Visual Treatments

**Glassmorphism Cards**:
- background: rgba(255, 255, 255, 0.05)
- backdrop-filter: blur(10px)
- border: 1px solid rgba(0, 255, 65, 0.1)
- Subtle shadow for depth

**Neon Glow Effects**:
- Primary CTAs: box-shadow with neon green (#00FF41)
- Hover states: increase glow intensity
- Active project cards: border glow

**Gradient Text** (Hero headline):
- Linear gradient from #00FF41 to #00CC33
- background-clip: text for gradient effect

## Animations

**Micro-interactions**:
- Button hover: scale(1.05) + increased glow
- Card hover: translateY(-4px) + shadow increase
- Link hover: neon green underline slide-in

**Page Load**:
- Hero content: fade-in + slide-up (0.5s delay stagger)
- Section reveals: fade-in on scroll (use intersection observer)

**Scroll Indicators**:
- Animated chevron/arrow in hero section

## Images

**Hero Section**: Professional headshot with circular crop, subtle neon green ring border, positioned prominently with bio text.

**Project Cards**: Thumbnail images (16:9 aspect ratio) showing project interfaces, dashboards, or representative visuals. Use placeholder gradients if images unavailable.

**Company Logos**: Grayscale logos in experience section, color on hover.

**No large background images** - maintain solid black (#0a0a0a) backgrounds throughout for consistency with OutSkill aesthetic.

## Accessibility

- Maintain 4.5:1 contrast ratio (neon green #00FF41 on black passes)
- Focus visible states with neon green outline
- Semantic HTML (nav, section, article tags)
- ARIA labels for icon-only buttons
- Keyboard navigation support for all interactive elements

## Responsive Strategy

**Breakpoints**:
- Mobile: base (< 768px) - single column, stacked layout
- Tablet: md (768px-1024px) - 2-column grids where applicable
- Desktop: lg (1024px+) - full multi-column layouts

**Mobile Optimizations**:
- Reduce hero height to 80vh
- Stack timeline items vertically
- Collapse navigation to hamburger menu
- Reduce spacing (py-12 instead of py-32)