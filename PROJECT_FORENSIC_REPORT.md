# PROJECT FORENSIC REPORT: CodeClub Portfolio

**Generated:** 2026-01-03  
**Analyst:** Antigravity AI  
**Repository:** d:\01_Web_Development\CodeClub\code-club

---

## 1. THE DNA (Architecture & Tech Stack)

### Core Stack

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "vite": "^7.0.4",
  "react-router-dom": "^7.7.1",
  "framer-motion": "^12.23.12",
  "gsap": "^3.13.0",
  "@gsap/react": "^2.1.2",
  "@emailjs/browser": "^4.4.1",
  "tailwindcss": "^4.1.11"
}
```

**Key Observations:**
- **React 19.1.0** - Latest version with concurrent features
- **Vite 7.0.4** - Ultra-fast build tool and dev server
- **Framer Motion 12.23.12** - Declarative animations
- **GSAP 3.13.0** - Professional-grade scroll animations
- **EmailJS 4.4.1** - Client-side email service integration
- **React Router DOM 7.7.1** - Client-side routing

### Styling Strategy

**Approach:** Tailwind CSS 4.1.11 (Latest version with Vite plugin)

**Global Styling (`index.css`):**
```css
@import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

@theme {
  --font-body: "Inter", sans-serif;
  --animate-fade-in-down: fadeInDown 0.2s ease-out;
  --animate-fade-in-up: fadeInUp 0.6s ease-out forwards;
  --animate-slideUpText: slideUpText 6s ease-in-out infinite;
  
  /* Custom breakpoints */
  --breakpoint-sm: 350px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1000px;
  --breakpoint-xl: 1200px;
}
```

**Strategy Analysis:**
- Uses Tailwind's new `@theme` directive (v4 feature)
- Custom CSS animations defined for text effects
- Google Fonts (Inter) loaded globally
- Custom breakpoints override Tailwind defaults
- Utility-first approach with inline classes throughout components

### Build Configuration

**File:** `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

**Analysis:**
- **Minimal Configuration** - No custom aliases, proxies, or advanced optimizations
- **Plugins:**
  - `@tailwindcss/vite` - Native Tailwind v4 integration
  - `@vitejs/plugin-react` - React Fast Refresh support
- **Missing:** No path aliases (e.g., `@/components`), no environment-specific configs
- **Deployment:** Uses `.htaccess` for Apache hosting (found in root)

---

## 2. THE NERVOUS SYSTEM (Routing & Navigation)

### Entry Point Flow

```
index.html 
  └─> src/main.jsx (React 19 createRoot)
      └─> src/App.jsx (BrowserRouter wrapper)
          └─> Routes + Global Components
```

**main.jsx:**
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### Complete Route Map

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `Index` | Homepage with hero, services, expertise sections |
| `/our-team` | `OurTeam` | Team member profiles |
| `/vision` | `OurVision` | Company vision statement |
| `/careers` | `CareerPage` | Job opportunities |
| `/caseStudies` | `CaseStudies` | Portfolio/project showcase |
| `/methodology` | `OurMethodology` | Development process explanation |
| `/development` | `DevelopmentApproach` | Development philosophy |
| `/launch` | `IdeaToLaunch` | Idea-to-launch journey |
| `/code-club-team` | `OurTeam` | Duplicate team route |
| `/contact` | `Contact` | Contact form |
| `/about` | `AboutUsSection` | Company information |
| `/service/:slug` | `Service` | Dynamic service pages (6 services) |
| `/news` | `NewsPage` | News/blog section |

**Dynamic Routes:**
- `/service/mobile-apps`
- `/service/web-development`
- `/service/ai`
- `/service/cybersecurity`
- `/service/ui-ux`
- `/service/iot`

### Navigation Implementation

**Primary Navigation:** `Navbar.jsx` (368 lines)

**Menu Structure:**
```javascript
const menuData = {
  "Our Expertise": [
    { label: "Web Development", icon: <FaCode /> },
    { label: "App Development", icon: <FaMobileAlt /> },
    { label: "AI & ML", icon: <FaBrain /> },
    { label: "Cybersecurity", icon: <FaShieldAlt /> },
    { label: "UI/UX Design", icon: <FaPencilRuler /> },
    { label: "IoT Solutions", icon: <FaMicrochip /> }
  ],
  "Who we are": [
    { label: "About us", icon: <FaBuilding /> },
    { label: "Code Club Team", icon: <FaUsers /> },
    { label: "Careers", icon: <FaBriefcase /> },
    { label: "News", icon: <FaBriefcase /> }
  ],
  "Case Studies": []
}
```

**Navigation Features:**
- **Scroll-based visibility** - Navbar hides/shows on scroll
- **Hover dropdowns** - Desktop mega-menu with icons + descriptions
- **Mobile hamburger menu** - Responsive drawer
- **Programmatic navigation** - Uses `useNavigate()` hook
- **Active state tracking** - Uses `useLocation()` for current route

**Global Components (Always Rendered):**
- `<Navbar />` - Top navigation
- `<FooterMain />` - Site footer
- `<CursorDot />` - Custom animated cursor (desktop only)
- `<ScrollToTop />` - Resets scroll position on route change

---

## 3. THE ORGANS (Component Hierarchy & Data Flow)

### Component Tree Structure

```
App.jsx
├── Navbar (Global)
├── Routes
│   ├── Index (Homepage)
│   │   ├── CursorDot
│   │   ├── HeroMain
│   │   │   └── HeroPic (Video background + animated text)
│   │   ├── DifferenceMain
│   │   │   ├── DifferenceTop
│   │   │   ├── DifferenceMid
│   │   │   ├── DifferenceBottom
│   │   │   └── CaseComponents
│   │   ├── GuidanceMain
│   │   │   ├── GuidanceTop
│   │   │   ├── GuidanceMid
│   │   │   └── GuidanceBottom
│   │   ├── ExpertiseMain (GSAP scroll-pinning)
│   │   │   └── ExpertiseComponent (6 instances)
│   │   ├── NumbersMain
│   │   │   └── Spacer
│   │   ├── ServicesMain
│   │   │   └── AllServices
│   │   │       └── ServicesComponent (6 cards)
│   │   ├── Brands (Client logos carousel)
│   │   └── UnlockComponent (CTA section)
│   │
│   ├── Service/:slug (Dynamic)
│   │   ├── Hero Section (bg image from ServiceData)
│   │   ├── FeatureCard (maps features array)
│   │   ├── TechComp (maps techStack object)
│   │   ├── IndComp (maps industries array)
│   │   ├── Team Cards (Framer Motion animations)
│   │   ├── StatsMain (3 stat cards)
│   │   └── UnlockComponent
│   │
│   ├── Contact
│   │   └── ContactMain (EmailJS form)
│   │
│   └── [Other Pages...]
│
├── FooterMain (Global)
└── CursorDot (Global)
```

### Major Component Analysis

#### 1. **HeroPic.jsx** (Hero Section)

**Props:** None  
**State:** None (uses undefined `setIsHovered`, `timeoutRef` - **BUG**)  
**Side Effects:**
- Video autoplay with loop
- CSS animation `animate-slideUpText` (3 rotating headlines)

**Data Flow:**
```javascript
// Animated text rotation (6s cycle)
<div className="animate-slideUpText">
  FUELING DIGITAL DISRUPTION ACROSS TRANSFORMATIVE DOMAINS
</div>
<div className="animate-slideUpText">
  CUSTOM SOFTWARE SOLUTIONS FOR BUSINESS GROWTH
</div>
<div className="animate-slideUpText">
  AI-DRIVEN, CLOUD-POWERED, INDUSTRY-CHANGING
</div>
```

#### 2. **ExpertiseMain.jsx** (Scroll-Pinned Panels)

**Props:** None  
**State:**
- `isLargeScreen` - Tracks viewport width (≥768px)

**Side Effects:**
```javascript
useEffect(() => {
  if (isLargeScreen) {
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }
}, [isLargeScreen]);
```

**Data:** Hardcoded arrays (e.g., `expertAreasAI`, `expertAreasWeb`)  
**Rendering:** 6 `<ExpertiseComponent>` instances with scroll-pinning on desktop

#### 3. **AllServices.jsx** (Service Cards)

**Props:** None  
**State:** None  
**Data Source:**
```javascript
const services = [
  { title: "Artificial Intelligence and ML", icon: AI, link: "/service/ai" },
  { title: "App Development", icon: mobile, link: "/service/mobile-apps" },
  { title: "Web Development", icon: web, link: "/service/web-development" },
  { title: "Cyber Security", icon: it_consulting, link: "/service/cybersecurity" },
  { title: "UI/UX Design", icon: software_development, link: "/service/ui-ux" },
  { title: "IoT Solutions", icon: ioT, link: "/service/iot" }
];
```

**Rendering:**
```javascript
{services.map((service, index) => (
  <ServicesComponent
    key={index}
    link={service.link}
    icon={service.icon}
    title={service.title}
  />
))}
```

#### 4. **Service.jsx** (Dynamic Service Pages)

**Props:** None  
**State:**
- `selected` - Currently selected tech stack tab
- `tabOptions` - Available tech categories

**Data Source:** `ServiceData.js` (605 lines)

**Data Flow:**
```javascript
const { slug } = useParams(); // URL parameter
const currentService = serviceMap[slug]; // Lookup in data object

// Auto-select first tech tab on mount
useEffect(() => {
  if (currentService?.techStack) {
    const keys = Object.keys(currentService.techStack);
    setSelected(keys[0]);
  }
}, [slug]);
```

**Rendering Logic:**
1. Hero section with `bgImage` from data
2. Map `features` array → `<FeatureCard>`
3. Render tech stack tabs dynamically from object keys
4. Map `techStack[selected]` → `<TechComp>`
5. Map `industries` → `<IndComp>`
6. Map `team` → Framer Motion cards with stagger animation

#### 5. **ContactMain.jsx** (EmailJS Integration)

**Props:** None  
**State:**
- `name`, `email`, `number`, `message`, `company` - Form fields
- `loading` - Submission state
- `success` - Success message

**Side Effects:**
```javascript
const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
  emailjs.sendForm(
    "service_eyo8hk4",
    "template_dfs32cr",
    form.current,
    { publicKey: "QUXxa6No-djZfWLxa" }
  )
  .then(() => {
    setLoading(false);
    // Reset form
    setSuccess("Message Sent Successfully");
  });
};
```

**Security Note:** EmailJS credentials exposed in client code (standard for EmailJS)

#### 6. **CursorDot.jsx** (Custom Cursor)

**Props:** None  
**State:**
- `targetPos` - Mouse position
- `currentPos` (ref) - Animated cursor position

**Side Effects:**
```javascript
useEffect(() => {
  const handleMouseMove = (e) => {
    setTargetPos({ x: e.clientX, y: e.clientY });
  };

  const animate = () => {
    const speed = 0.8;
    const dx = targetPos.x - currentPos.current.x;
    const dy = targetPos.y - currentPos.current.y;
    
    // Smooth easing
    currentPos.current.x += dx * speed;
    currentPos.current.y += dy * speed;
    
    dotRef.current.style.left = `${currentPos.current.x}px`;
    dotRef.current.style.top = `${currentPos.current.y}px`;
    
    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", handleMouseMove);
  animate();
}, [targetPos]);
```

**Rendering:** Fixed blue dot (8px) with smooth lag animation

---

## 4. THE MUSCLES (Animations & Interactivity)

### Animation Libraries

1. **GSAP (GreenSock Animation Platform)**
   - **Usage:** Scroll-triggered pinning in `ExpertiseMain.jsx`
   - **Plugin:** ScrollTrigger
   - **Effect:** Panels stick to viewport during scroll

2. **Framer Motion**
   - **Usage:** Team member cards in `Service.jsx`
   - **Effect:** Fade-in + slide-up with stagger delay
   ```javascript
   <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.2 * idx }}
   />
   ```

3. **CSS Animations**
   - **animate.css** library imported
   - Custom keyframes in `index.css`:
     - `fadeInDown` - Navbar entrance
     - `fadeInUp` - Section reveals
     - `slideUpText` - Hero text rotation (6s infinite)

4. **Custom JavaScript Animations**
   - **CursorDot:** requestAnimationFrame loop with easing
   - **Navbar:** Scroll-based show/hide with transform

### Triggering Mechanisms

| Trigger | Animation | Location |
|---------|-----------|----------|
| **Page Load** | Hero text rotation starts | HeroPic.jsx |
| **Scroll** | GSAP panel pinning | ExpertiseMain.jsx |
| **Scroll** | Navbar hide/show | Navbar.jsx |
| **Mouse Move** | Custom cursor follows | CursorDot.jsx |
| **Hover** | Dropdown menus appear | Navbar.jsx |
| **Hover** | Service card scale | ServicesComponent.jsx |
| **Mount** | Team cards stagger in | Service.jsx |

---

## 5. THE SENSES (External Integrations)

### APIs & Services

1. **EmailJS**
   - **Service ID:** `service_eyo8hk4`
   - **Template ID:** `template_dfs32cr`
   - **Public Key:** `QUXxa6No-djZfWLxa`
   - **Usage:** Contact form submissions
   - **File:** `contactMain.jsx`

2. **Google Fonts**
   - **Font:** Inter (variable weights 100-900)
   - **Loading:** CSS `@import` in `index.css`

### Asset Management

**Icons:**
- **lucide-react** - Modern icon set (Paperclip, Mic, Info)
- **react-icons** - Comprehensive icon library
  - `fa` - Font Awesome icons
  - `tb` - Tabler icons
  - `si` - Simple Icons (brand logos)
  - `hi` - Hero Icons
  - `md` - Material Design icons

**Images:**
- **Location:** `src/assets/` (109 files)
- **Types:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.avif`
- **Videos:** `.mp4` (hero background videos)
- **PDFs:** Documentation files
- **Management:** Direct imports (e.g., `import logo from "../../assets/logo.png"`)

**Notable Assets:**
- `main-old-video.mp4` (6.6MB) - Hero background
- `logo.png` (369KB) - Company logo
- Service images (webp format for optimization)
- Team member photos
- Brand logos (11 client brands)
- Project screenshots (web/app/AI projects)

---

## 6. THE SKELETON (File Structure)

```
code-club/
├── public/                    # Static assets (6 files)
├── src/
│   ├── assets/               # Images, videos, icons (109 files)
│   │   ├── *.jpg, *.png      # Raster images
│   │   ├── *.webp, *.avif    # Optimized formats
│   │   ├── *.svg             # Vector graphics
│   │   ├── *.mp4             # Video backgrounds
│   │   └── *.pdf             # Documents
│   │
│   ├── components/           # Reusable UI components
│   │   ├── brands/
│   │   │   └── brands.jsx    # Client logo carousel
│   │   ├── casestudies/
│   │   │   ├── OurProjects.jsx
│   │   │   └── PageBanner.jsx
│   │   ├── contact/
│   │   │   └── contactMain.jsx  # EmailJS form
│   │   ├── differenceSec/
│   │   │   ├── DifferenceMain.jsx
│   │   │   ├── DifferenceTop.jsx
│   │   │   ├── DifferenceMid.jsx
│   │   │   ├── DifferenceBottom.jsx
│   │   │   └── CaseComponents.jsx
│   │   ├── expertise/
│   │   │   ├── ExpertiseMain.jsx    # GSAP scroll-pinning
│   │   │   ├── ExpertiseLeft.jsx
│   │   │   ├── ExpertiseRight.jsx
│   │   │   └── ExperiseComponent.jsx
│   │   ├── expertiseCard/
│   │   │   └── FeatureCard.jsx
│   │   ├── footer/
│   │   │   └── FooterMain.jsx
│   │   ├── guidance/
│   │   │   ├── GuidanceMain.jsx
│   │   │   ├── GuidanceTop.jsx
│   │   │   ├── GuidanceMid.jsx
│   │   │   └── GuidanceBottom.jsx
│   │   ├── header/
│   │   │   ├── Navbar.jsx           # 368 lines, complex menu
│   │   │   ├── HeaderMain.jsx
│   │   │   ├── HeaderMid.jsx
│   │   │   ├── HeaderRight.jsx
│   │   │   └── headerLeft.jsx
│   │   ├── heroSection/
│   │   │   ├── HeroMain.jsx
│   │   │   ├── HeroPic.jsx          # Video + animated text
│   │   │   ├── HeroSection.css
│   │   │   └── txt
│   │   ├── industryComp/
│   │   │   └── IndComp.jsx
│   │   ├── numbers/
│   │   │   ├── NumbersMain.jsx
│   │   │   └── Spacer.jsx
│   │   ├── ourteam/
│   │   │   └── TeamCard.jsx
│   │   ├── services/
│   │   │   ├── ServicesMain.jsx
│   │   │   ├── AllServices.jsx      # Service grid
│   │   │   └── ServicesComponent.jsx
│   │   ├── statsCard/
│   │   │   └── statsMain.jsx
│   │   ├── techComp/
│   │   │   └── TechComp.jsx
│   │   ├── CursorDot.jsx            # Custom animated cursor
│   │   ├── UnlockComponent.jsx      # CTA section
│   │   ├── scrollToTop.jsx
│   │   └── helper.jsx
│   │
│   ├── pages/                # Route components
│   │   ├── Index.jsx         # Homepage
│   │   ├── Service.jsx       # Dynamic service pages
│   │   ├── ServiceData.js    # 605 lines - SERVICE DATABASE
│   │   ├── AboutUsSection.jsx
│   │   ├── Careers.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Contact.jsx
│   │   ├── Development.jsx
│   │   ├── Idea.jsx
│   │   ├── NewsPage.jsx
│   │   ├── OurMethodology.jsx
│   │   ├── OurTeam.jsx
│   │   └── OurVision.jsx
│   │
│   ├── App.jsx               # Router + global layout
│   ├── App.css
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles + Tailwind
│
├── .htaccess                 # Apache rewrite rules
├── index.html                # HTML entry point
├── package.json              # Dependencies
├── vite.config.js            # Build configuration
├── eslint.config.js          # Linting rules
└── README.md
```

### Directory Purpose Breakdown

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `assets/` | Static media files | Images, videos, icons, PDFs |
| `components/` | Reusable UI building blocks | Organized by feature/section |
| `pages/` | Route-level components | One file per route + ServiceData.js |
| `public/` | Publicly accessible files | Served as-is by Vite |

---

## 7. CRITICAL DATA STRUCTURE: ServiceData.js

**File:** `src/pages/ServiceData.js` (605 lines)

This is the **single source of truth** for all service-related content.

### Structure

```javascript
export const serviceMap = {
  "mobile-apps": { /* ... */ },
  "web-development": { /* ... */ },
  "ai": { /* ... */ },
  "cybersecurity": { /* ... */ },
  "ui-ux": { /* ... */ },
  "iot": { /* ... */ }
};
```

### Schema (Per Service)

```javascript
{
  title: String,              // Display name
  description: String,        // Hero subtitle
  bgImage: ImportedImage,     // Hero background
  
  features: [                 // Feature cards
    {
      title: String,
      items: [String, String, String]
    }
  ],
  
  techStack: {                // Tech stack tabs
    frameworks: [{ name: String, icon: ImportedImage }],
    languages: [{ name: String, icon: ImportedImage }],
    database: [{ name: String, icon: ImportedImage }],
    devops: [{ name: String, icon: ImportedImage }],
    // Service-specific keys (e.g., "ai", "mobDev", "webDev")
  },
  
  industries: [               // Industry applications
    {
      title: String,
      items: [String, String, String]
    }
  ],
  
  team: [                     // Team members
    {
      name: String,
      role: String,
      LinkedIn?: String       // Optional
    }
  ]
}
```

### Example: Mobile Apps Service

```javascript
"mobile-apps": {
  title: "Mobile Apps Development",
  description: "Transform your vision into high-performance mobile applications...",
  bgImage: mobImg,
  
  features: [
    {
      title: "Cross-Platform App Development",
      items: ["Messaging apps", "Social media apps", "Productivity tools"]
    },
    {
      title: "Native App Development",
      items: ["Mobile banking apps", "Fitness tracking apps", "Gaming apps"]
    },
    {
      title: "Hybrid App Development",
      items: ["E-commerce apps", "Educational apps", "Event management apps"]
    }
  ],
  
  techStack: {
    frameworks: [
      { name: "React Native", icon: icon10 },
      { name: "Flutter", icon: icon7 },
      { name: "Ionic / Capacitor", icon: icon11 }
    ],
    languages: [
      { name: "JavaScript / TypeScript", icon: icon5 },
      { name: "Swift (iOS)", icon: icon4 },
      { name: "Kotlin (Android)", icon: icon1 }
    ],
    mobDev: [
      { name: "React Native", icon: icon10 },
      { name: "Swift (native iOS)", icon: icon4 },
      { name: "Kotlin (native Android)", icon: icon1 }
    ],
    database: [
      { icon: icon12, name: "Firebase (Realtime / Firestore)" },
      { icon: icon15, name: "PostgreSQL (server)" },
      { icon: icon13, name: "MongoDB (sync / offline)" }
    ],
    devops: [
      { icon: icon9, name: "Docker (CI/CD containers)" },
      { icon: icon12, name: "Firebase (hosting / auth / analytics)" },
      { icon: icon14, name: "CI/CD (GitHub Actions / Fastlane)" }
    ]
  },
  
  industries: [
    {
      title: "FinTech",
      items: [
        "Billing & Payment Solutions",
        "Financial Analytics",
        "Personal Finance Management Apps"
      ]
    },
    {
      title: "HealthTech",
      items: [
        "EHR, EMR, Patient Portal",
        "Telemedicine Platforms",
        "Patient Monitoring"
      ]
    },
    {
      title: "E-commerce",
      items: [
        "B2B, B2C, C2C Platforms",
        "Shopping Cart Solutions",
        "Customer Relationship Management"
      ]
    }
  ],
  
  team: [
    { name: "Amad ur Rehman", role: "Team Lead" },
    { name: "Abdullah", role: "Senior App Developer" },
    { name: "Affan", role: "Junior App Developer" }
  ]
}
```

### Data Usage Flow

1. **URL Parameter Extraction:**
   ```javascript
   const { slug } = useParams(); // e.g., "mobile-apps"
   ```

2. **Data Lookup:**
   ```javascript
   const currentService = serviceMap[slug];
   ```

3. **Conditional Rendering:**
   ```javascript
   if (!currentService) {
     return <div>Service not found.</div>;
   }
   ```

4. **Dynamic Content Rendering:**
   ```javascript
   // Hero
   <h1>{currentService.title}</h1>
   <p>{currentService.description}</p>
   
   // Features
   {currentService.features.map((feature, idx) => (
     <FeatureCard title={feature.title} items={feature.items} />
   ))}
   
   // Tech Stack (with tab selection)
   {currentService.techStack[selected]?.map(({ icon, name }) => (
     <TechComp icon={icon} name={name} />
   ))}
   
   // Industries
   {currentService.industries.map((section) => (
     <IndComp title={section.title} items={section.items} />
   ))}
   
   // Team
   {currentService.team.map((member) => (
     <motion.div>
       <h2>{member.name}</h2>
       <p>{member.role}</p>
     </motion.div>
   ))}
   ```

---

## 8. SPECIAL MECHANISMS

### 1. Footer Scroll Lock (App.jsx)

**Purpose:** Prevent over-scrolling past footer

```javascript
useEffect(() => {
  const footer = document.querySelector("footer");
  const handleScroll = () => {
    const rect = footer.getBoundingClientRect();
    const footerTop = rect.top + window.scrollY;
    const scrollTop = window.scrollY;
    const scrollDir = scrollTop > lastScroll.current ? "down" : "up";

    // Lock scroll when footer bottom is reached
    if (
      scrollDir === "down" &&
      window.innerHeight + scrollTop >= footerTop + footer.offsetHeight
    ) {
      window.scrollTo({ top: lastScroll.current, behavior: "auto" });
      return;
    }

    lastScroll.current = scrollTop;
  };

  window.addEventListener("scroll", handleScroll);
}, []);
```

### 2. Responsive GSAP Pinning (ExpertiseMain.jsx)

**Purpose:** Only apply scroll-pinning on desktop

```javascript
const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

useEffect(() => {
  if (isLargeScreen) {
    // Apply GSAP ScrollTrigger
  }
}, [isLargeScreen]);
```

### 3. Auto-Tab Selection (Service.jsx)

**Purpose:** Auto-select first tech stack tab on service change

```javascript
useEffect(() => {
  if (currentService?.techStack) {
    const keys = Object.keys(currentService.techStack);
    setSelected(keys[0]); // Always select first tab
  }
}, [slug]);
```

---

## 9. IDENTIFIED ISSUES

### 🔴 Critical

1. **Undefined Variables in HeroPic.jsx**
   - Lines 12-13, 17-18: `setIsHovered`, `timeoutRef` used but never declared
   - **Impact:** Runtime errors (currently unused code in comments)

### 🟡 Medium

2. **No Path Aliases**
   - Deep relative imports (e.g., `../../assets/logo.png`)
   - **Recommendation:** Add Vite aliases for cleaner imports

3. **Hardcoded EmailJS Credentials**
   - Public key exposed in client code
   - **Note:** This is standard for EmailJS, but consider environment variables

4. **Large Video Files**
   - `main-old-video.mp4` (6.6MB) loaded on homepage
   - **Recommendation:** Compress or use streaming service

5. **No Error Boundaries**
   - React errors will crash entire app
   - **Recommendation:** Add error boundaries for graceful degradation

### 🟢 Low

6. **Duplicate Route**
   - `/our-team` and `/code-club-team` both render `<OurTeam />`

7. **Unused Imports**
   - `Navigate` imported but not used in HeroPic.jsx

8. **Icon Inconsistency**
   - ServiceData.js uses placeholder icon variables (icon1-icon15)
   - **Recommendation:** Use react-icons directly for clarity

---

## 10. PERFORMANCE NOTES

### Optimization Opportunities

1. **Image Optimization**
   - Already using WebP/AVIF formats ✅
   - Consider lazy loading for below-fold images

2. **Code Splitting**
   - React Router supports lazy loading
   - Recommendation: `const Service = lazy(() => import('./pages/Service'))`

3. **Bundle Size**
   - GSAP + Framer Motion = ~200KB combined
   - Consider removing one if overlap exists

4. **Font Loading**
   - Google Fonts loaded via CSS import (render-blocking)
   - **Recommendation:** Use `font-display: swap`

---

## 11. DEPLOYMENT CONFIGURATION

**File:** `.htaccess`

```apache
# Apache rewrite rules for SPA routing
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Purpose:** Redirect all routes to index.html for client-side routing

---

## SUMMARY

**Project Type:** Corporate portfolio website with service showcase  
**Architecture:** React SPA with client-side routing  
**Data Strategy:** Centralized JSON-like object (ServiceData.js)  
**Styling:** Tailwind CSS v4 with custom animations  
**Animation:** GSAP (scroll effects) + Framer Motion (entrance animations)  
**External Services:** EmailJS for contact form  
**Build Tool:** Vite 7 (fast HMR, optimized builds)  
**Deployment:** Apache server with SPA routing

**Code Quality:** Well-organized component structure, consistent naming, but lacks TypeScript and comprehensive error handling.

**Scalability:** Current architecture supports easy addition of new services via ServiceData.js. Consider migrating to headless CMS for non-technical content updates.

---

**End of Report**
