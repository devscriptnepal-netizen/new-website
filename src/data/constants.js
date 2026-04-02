export const C = {
  bg: "#080808", bg2: "#0C0C0C", bg3: "#111",
  surface: "#161616", surf2: "#1A1A1A",
  border: "rgba(255,255,255,0.07)", borderB: "rgba(255,255,255,0.14)",
  red: "#E01F1F", redD: "#B01212", redG: "rgba(224,31,31,0.28)",
  white: "#F0F0F0", silver: "#C0C0C0", muted: "#606060", muted2: "#2E2E2E",
  D: "'Bebas Neue',cursive", B: "'DM Sans',sans-serif",
};

export const SERVICES = [
  { icon: "fa-solid fa-code", name: "Web Development", slug: "web", color: "#4F8EF7", desc: "High-performance websites & web apps with React, Next.js, Node.js — fast, SEO-ready, pixel-perfect.", features: ["React / Next.js / Vue", "RESTful & GraphQL APIs", "SEO & Core Web Vitals", "E-commerce (WooCommerce/Custom)", "CMS integration", "PWA"] },
  { icon: "fa-solid fa-mobile-screen-button", name: "Mobile Apps", slug: "mobile", color: "#A855F7", desc: "Native & cross-platform iOS/Android apps with React Native & Flutter — smooth, beautiful, production-ready.", features: ["React Native & Flutter", "iOS & Android", "Offline-first architecture", "Push notifications", "App Store publishing", "CI/CD pipelines"] },
  { icon: "fa-solid fa-pen-ruler", name: "UI/UX Design", slug: "design", color: "#F59E0B", desc: "Research-driven interfaces and design systems. Figma prototypes, user flows, and pixel-perfect handoffs.", features: ["User research & personas", "Wireframing", "High-fidelity Figma prototypes", "Design systems", "Accessibility (WCAG 2.1)", "Handoff to dev"] },
  { icon: "fa-solid fa-cloud", name: "Cloud Services", slug: "cloud", color: "#10B981", desc: "Cloud infrastructure, CI/CD, and managed services on AWS, Azure & GCP — scalable and cost-optimised from day one.", features: ["AWS / Azure / GCP", "Docker & Kubernetes", "CI/CD with GitHub Actions", "Load balancing & auto-scaling", "Cost optimisation", "24/7 monitoring"] },
  { icon: "fa-solid fa-shield-halved", name: "Cybersecurity", slug: "security", color: "#EF4444", desc: "Security audits, penetration testing, and hardening to protect your apps, APIs, and data from modern threats.", features: ["Penetration testing", "OWASP vulnerability audits", "SSL & WAF setup", "GDPR compliance", "Incident response", "Security training"] },
  { icon: "fa-solid fa-database", name: "Database Solutions", slug: "database", color: "#06B6D4", desc: "Scalable schema design, query optimisation, and data pipelines for SQL and NoSQL at any scale.", features: ["PostgreSQL / MySQL", "MongoDB / Redis", "Query optimisation", "Data migrations", "Backup strategies", "Real-time data pipelines"] },
];

export const BLOG_POSTS = [
  { id: 1, cat: "Web Development", date: "Jan 2025", read: "6 min", title: "Website Development Cost in Nepal 2025 — Complete Guide", desc: "Transparent pricing & feature breakdowns from static sites to custom eCommerce. Know exactly what you're paying for.", icon: "fa-solid fa-globe" },
  { id: 2, cat: "UI/UX", date: "Feb 2025", read: "5 min", title: "Why Great Design is the Biggest Competitive Advantage for Nepali Startups", desc: "How investing in UX from day one dramatically improves conversion and retention rates.", icon: "fa-solid fa-pen-ruler" },
  { id: 3, cat: "Cloud Services", date: "Mar 2025", read: "7 min", title: "Moving to the Cloud: A Step-by-Step Guide for Nepali Businesses", desc: "Everything you need to know — costs, timelines, risks, and what to expect from a cloud migration.", icon: "fa-solid fa-cloud" },
  { id: 4, cat: "Cybersecurity", date: "Mar 2025", read: "5 min", title: "Top 10 Security Vulnerabilities Every Nepali Startup Should Fix in 2025", desc: "Common but critical security gaps we find in almost every audit — and how to close them fast.", icon: "fa-solid fa-shield-halved" },
  { id: 5, cat: "Mobile Apps", date: "Apr 2025", read: "6 min", title: "React Native vs Flutter in 2025: Which Should You Choose?", desc: "A practical comparison for businesses — performance, cost, talent pool, and long-term maintainability.", icon: "fa-solid fa-mobile-screen-button" },
  { id: 6, cat: "SEO", date: "Apr 2025", read: "4 min", title: "How We Got a Nepali E-commerce Site to Page 1 in 3 Months", desc: "A case study on technical SEO, content strategy, and Core Web Vitals optimisation.", icon: "fa-solid fa-magnifying-glass" },
];

export const TEAM = [
  { name: "Aarav Shrestha", role: "CEO & Lead Developer", icon: "fa-solid fa-code", bio: "10+ years full-stack. Obsessed with clean architecture and shipping products users actually love." },
  { name: "Sita Rai", role: "Head of Design", icon: "fa-solid fa-pen-ruler", bio: "Former Canva designer. Believes every pixel should have a reason." },
  { name: "Bikram Tamang", role: "Cloud Architect", icon: "fa-solid fa-cloud", bio: "AWS certified. Has migrated 20+ companies to the cloud without a single outage." },
  { name: "Priya Maharjan", role: "Mobile Lead", icon: "fa-solid fa-mobile-screen-button", bio: "Ships React Native and Flutter apps. Makes complicated things feel simple." },
];

// export const TESTIMONIALS = [
//   { name: "Rajan Shrestha", role: "CEO, TechBridge Nepal", av: "RS", text: "DevScript transformed our platform into a blazing-fast web app. Code quality, communication, and delivery — all exceeded expectations." },
//   { name: "Priya Maharjan", role: "Founder, ShopLocal.np", av: "PM", text: "Needed a mobile app in 8 weeks — DevScript delivered in 7. Beautiful UI, users love it, post-launch support is outstanding." },
//   { name: "Bikash Tamang", role: "CTO, FinPulse", av: "BT", text: "Cloud migration saved us 40% on infrastructure and eliminated downtime completely. They understand both tech and business." },
//   { name: "Sushila Rai", role: "Director, EduNepal", av: "SR", text: "UI/UX redesign increased retention by 60% in two months. World-class design thinking — they build for real users." },
// ];

export const TESTIMONIALS = [
  {
    name: "Amit K.",
    role: "Small Business Owner",
    av: "AK",
    text: "They built our website exactly how we wanted. Communication was smooth and they handled changes quickly. Really happy with the result."
  },
  {
    name: "Sneha M.",
    role: "Online Store Owner",
    av: "SM",
    text: "I needed a simple e-commerce site and they delivered on time. The design is clean and easy to manage. Good experience overall."
  },
  {
    name: "Rohit T.",
    role: "Startup Founder",
    av: "RT",
    text: "We worked with them on our web app MVP. They understood our idea well and helped us launch faster than expected."
  },
  {
    name: "Kiran P.",
    role: "Freelancer",
    av: "KP",
    text: "Very easy to work with. They fixed issues in my site and improved performance. Would definitely recommend for small projects."
  },
];

export const FAQS = [
  { q: "How much does a website cost?", a: "NPR 50,000 for a landing page to NPR 500,000+ for complex apps. Transparent quotes after a free discovery call." },
  { q: "How long does a typical project take?", a: "2–4 weeks for a website. 6–12 weeks for a full web or mobile app. Clear timelines defined before work begins." },
  { q: "Do you work with international clients?", a: "Yes — US, UK, Australia, and more. Async-first with weekly video syncs." },
  { q: "What tech do you specialise in?", a: "React, Next.js, Node.js, React Native, Flutter, AWS, GCP, PostgreSQL, MongoDB." },
  { q: "Do you provide post-launch support?", a: "30-day post-launch window included. Ongoing maintenance packages with SLA available." },
  { q: "Can you redesign my existing website?", a: "Yes — we analyse UX, performance, and conversion before redesigning, not just making it look better." },
];

export const STATS = [
  { num: 20, suf: "+", label: "Projects Delivered", icon: "fa-solid fa-diagram-project" },
  { num: 15, suf: "+", label: "Happy Clients", icon: "fa-solid fa-face-smile" },
  { num: 6, suf: "", label: "Service Areas", icon: "fa-solid fa-layer-group" },
  { num: 1, suf: "+", label: "Years Active", icon: "fa-solid fa-calendar-check" },
];

export const TICKER_DATA = ["WEB DEVELOPMENT", "MOBILE APPS", "UI/UX DESIGN", "CLOUD SERVICES", "CYBERSECURITY", "DATABASE SOLUTIONS", "IT CONSULTING", "DIGITAL TRANSFORMATION"];

export const GCSS = `
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;overflow-x:hidden;}
  body{font-family:${C.B};background:${C.bg};color:${C.white};line-height:1.6;overflow-x:hidden;}
  a{text-decoration:none;color:inherit;}
  button,input,textarea,select{font-family:${C.B};}
  ::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-track{background:${C.bg};}
  ::-webkit-scrollbar-thumb{background:${C.red};border-radius:2px;}

  /* anims */
  @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:.15}}
  @keyframes float1{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
  @keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
  @keyframes float3{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(224,31,31,.5)}70%{box-shadow:0 0 0 10px rgba(224,31,31,0)}}
  @keyframes scanl{from{top:-2px}to{top:100vh}}
  @keyframes sheen{0%{transform:translateX(-100%) skewX(-15deg)}100%{transform:translateX(400%) skewX(-15deg)}}
  @keyframes pageIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}

  /* reveal */
  .rv{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease;}
  .rv.on{opacity:1;transform:none;}
  .rv.rl{transform:translateX(-28px);}.rv.rl.on{transform:none;}
  .rv.rr{transform:translateX(28px);}.rv.rr.on{transform:none;}
  .d1{transition-delay:.08s}.d2{transition-delay:.17s}.d3{transition-delay:.26s}
  .d4{transition-delay:.35s}.d5{transition-delay:.44s}.d6{transition-delay:.53s}

  /* page wrapper */
  .page{animation:pageIn .5s ease forwards;}

  /* nav */
  .nl{padding:.45rem 1rem;font-size:.875rem;font-weight:500;color:${C.muted};border-radius:6px;transition:color .2s,background .2s;display:block;letter-spacing:.02em;}
  .nl:hover,.nl.on{color:${C.white};background:rgba(255,255,255,.05);}

  /* tilt */
  .tilt{transform-style:preserve-3d;will-change:transform;}

  /* faq */
  .faqb{overflow:hidden;transition:max-height .42s cubic-bezier(.4,0,.2,1),opacity .38s ease;}

  /* metallic card */
  .mc{background:linear-gradient(145deg,rgba(26,26,26,.97) 0%,rgba(14,14,14,.99) 100%);border:1px solid rgba(255,255,255,.08);border-top-color:rgba(255,255,255,.13);box-shadow:0 8px 40px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.05);border-radius:14px;position:relative;overflow:hidden;}
  .mc::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);}

  /* responsive */
  @media(max-width:768px){.nd{display:none!important;}.hb{display:flex!important;}}
  @media(min-width:769px){.hb{display:none!important;}}
  @media(max-width:1024px){.g2{grid-template-columns:1fr!important;}}
  @media(max-width:768px){.hv{display:none!important;}}
  @media(max-width:1100px){.g3{grid-template-columns:repeat(2,1fr)!important;}}
  @media(max-width:600px){.g3{grid-template-columns:1fr!important;}}
  @media(max-width:768px){.g4{grid-template-columns:repeat(2,1fr)!important;}}
  @media(max-width:900px){.gp{grid-template-columns:repeat(2,1fr)!important;}.pline{display:none!important;}}
  @media(max-width:900px){.gc{grid-template-columns:1fr!important;}}
  @media(max-width:1024px){.gf{grid-template-columns:1fr 1fr!important;}}
  @media(max-width:600px){.gf{grid-template-columns:1fr!important;}}
  @media(max-width:768px){.blog-g{grid-template-columns:1fr!important;}}
`;
