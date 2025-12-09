# C. Likhith AI Healthcare Portfolio

## Overview

This is a personal portfolio website for C. Likhith, a PharmD graduate and AI healthcare innovator. The site showcases professional experience, projects, skills, and research in the intersection of clinical pharmacy and artificial intelligence. Built as a single-page application with a modern tech stack, it features sections for hero introduction, about, projects, skills, experience, and contact information.

The application follows a full-stack architecture with React frontend and Express backend, designed to present a professional portfolio with interactive contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter (lightweight alternative to React Router). Single-page application pattern with a primary home page and 404 fallback.

**UI Component Library**: Shadcn/ui (Radix UI primitives) with the "New York" style variant. Extensive collection of pre-built components including forms, dialogs, cards, navigation, and more. Components are locally sourced (not npm packages) following the Shadcn convention of copying component code directly into the project.

**Styling**: Tailwind CSS with custom design system defined in `tailwind.config.ts` and `client/src/index.css`. Dark mode is the default and primary theme. Custom CSS variables for colors, spacing, and shadows. Design guidelines follow a modern aesthetic inspired by OutSkill.com with neon green accent colors (#00FF00 spectrum) against dark backgrounds.

**State Management**: TanStack Query (React Query) v5 for server state management. Custom query client configuration with specific behavior for 401 responses and disabled refetching.

**Form Handling**: React Hook Form with Zod validation via @hookform/resolvers. Forms are validated against schemas defined in the shared directory.

**Typography**: Inter font family for headings and body text, with JetBrains Mono available for monospaced/technical content. Font weights range from 400-800 with specific sizing scales for different heading levels.

### Backend Architecture

**Framework**: Express.js with TypeScript, running on Node.js. HTTP server created using Node's built-in `http` module to support potential WebSocket upgrades.

**API Design**: RESTful API with JSON request/response format. Currently implements two endpoints for contact message management (POST and GET).

**Request Logging**: Custom middleware that logs HTTP method, path, status code, and duration for all API requests. Formatted timestamps and source identification for debugging.

**Data Storage**: Currently using in-memory storage (`MemStorage` class) as the primary implementation. Schema is defined for PostgreSQL using Drizzle ORM, but the database is not yet connected. The storage interface (`IStorage`) abstracts data operations, allowing for easy swapping to database-backed storage.

**Schema Validation**: Zod schemas generated from Drizzle table definitions using `drizzle-zod`. Validates incoming requests before processing.

**Error Handling**: Structured error responses with status codes and error messages. Zod validation errors return detailed field-level error information.

### Static File Serving

**Development**: Vite dev server with HMR (Hot Module Replacement) via WebSocket connection. Custom middleware integration with Express. Template HTML manipulation to prevent caching during development.

**Production**: Express serves pre-built static files from `dist/public` directory. SPA fallback routing sends all non-API requests to `index.html`.

**Build Process**: Custom build script (`script/build.ts`) that:
1. Cleans the dist directory
2. Builds the client using Vite
3. Bundles the server using esbuild with selective dependency bundling (allowlist approach to reduce syscalls and improve cold start)

### Design System

**Color Palette**: Dark mode color scheme using HSL color space with CSS custom properties. Primary accent color is neon green (130° hue, 100% saturation, 50% lightness). Semantic color tokens for background, foreground, borders, cards, and interactive elements.

**Spacing System**: Tailwind's default spacing scale with custom vertical padding for sections (py-20 mobile, py-32 desktop). Consistent horizontal padding using px-6 mobile and px-12 desktop.

**Layout Strategy**: Full-width sections with max-w-7xl centered containers. Responsive grid systems using Tailwind's grid utilities (1 column mobile, 2-3 columns desktop).

**Component Patterns**: Reusable section components with consistent structure (hero, about, projects, skills, experience, contact, footer). Card-based layouts with subtle shadows and borders. Gradient effects for accent elements.

## External Dependencies

### UI & Styling

- **Radix UI**: Comprehensive collection of unstyled, accessible UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **class-variance-authority**: For creating variant-based component APIs
- **clsx** & **tailwind-merge**: Class name manipulation utilities
- **React Icons**: Icon library (react-icons/si for brand icons)
- **Lucide React**: Icon library for UI elements
- **Embla Carousel**: Carousel/slider component library

### State & Data Management

- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation and type safety

### Backend & Database

- **Express**: Web application framework
- **Drizzle ORM**: TypeScript ORM for SQL databases (configured for PostgreSQL)
- **Drizzle Kit**: Schema migration tool
- **pg**: PostgreSQL client (listed but not actively used)
- **drizzle-zod**: Generates Zod schemas from Drizzle table definitions

### Development Tools

- **Vite**: Frontend build tool and dev server
- **TypeScript**: Type safety across the stack
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution for Node.js
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit development environment

### Date & Utilities

- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing library

### Fonts

- **Google Fonts**: Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter (loaded via CDN)

### Database Note

The application is configured to use PostgreSQL via Drizzle ORM (connection string expected in `DATABASE_URL` environment variable), but currently operates with in-memory storage. The schema is fully defined and migration-ready in `shared/schema.ts`. Tables include:
- **users**: Basic user authentication schema
- **contact_messages**: Contact form submissions with name, email, subject, message, and timestamp

## Portfolio Content

### Personal Information
- **Name**: C. Likhith
- **Title**: Digital Health Innovator & PharmD Graduate
- **Email**: likhith.pharmd@gmail.com
- **GitHub**: https://github.com/likhithc98-commits
- **Location**: Andhra Pradesh, India
- **Languages**: English, Hindi, Telugu (Professional)

### Education
1. Doctor of Pharmacy (Pharm.D) - Jawaharlal Nehru Technological University (Sep 2019 - Mar 2025, Grade A)
2. Intermediate (BiPC) - Sri Chaitanya College of Education (2017, Grade A)

### Published Research (2 International Publications)
1. **Clinical Profile and Drug Therapy of Various Liver Diseases** - JPTCP (Scopus-indexed), Vol. 31 No. 10, Oct 2024, DOI: 10.53555/g06aa848
2. **Pharmacokinetic Study: Drug Interactions with Prasugrel** - IJCPMS, Vol. 4(1), 2024, DOI: 10.26452/ijcpms.v4i1.575
3. **AI Healthcare Projects** - AI Drug Interaction Prediction (87% accuracy) & Pharmacovigilance Dashboard

### Certifications (6 Total)
1. Generative AI Mastermind - Outskill (Oct 2025)
2. Python Bootcamp with AI - CodeFobe (Aug 2025)
3. Python & AI Internship Certificate - CodeFobe
4. Clinical Pharmacy Internship - Sri Padmavati School of Pharmacy
5. CME on Pharmacovigilance - SVIMS, Tirupati (Sep 2024)
6. NSS Volunteer Certificate - National Service Scheme

### Experience
1. Python & AI Intern - CodeFobe (Mar 2025 - Aug 2025, 6 months)
2. Clinical Pharmacy Intern - SVRR Government Hospital (Apr 2024 - Mar 2025, 12 months)

### Skills (70+ Total)
Categories: Digital Health & Analytics, Clinical Expertise, AI & Programming, Data & Research, Regulatory & Quality