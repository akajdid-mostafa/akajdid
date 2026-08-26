import {
  Herohala,
  Problemhala,
  Approachhala,
  Outcomehala,
  herostory,
  Problemstory,
  Approachstory,
  Outcomestory,
  herorealestat,
  Outcomerealestat,
  Approachrealestat,
  problemrealestat,
  Heromonpatient,
  Problemmonpatient,
  Approachmonpatient,
  Outcomemonpatient,
  HeroPiolec,
  ProblemPiolec,
  ApproachPiolec,
  OutcomePiolec,
  Heroglass,
  Problemglass,
  Approachglass,
  Outcomeglass,
} from "../assets/projects";

const caseStudies = [
  {
    id: 1,
    slug: "realstate",
    title: "Real Estate Platform",
    subtitle:
      "I rebuilt this real estate project as two connected apps: a public property website and a dashboard that manages the data behind it.",
    description:
      "A public property website connected to a protected dashboard for listings, images, availability, and reservations.",
    image: herorealestat,
    stack: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
    liveUrl: "https://realstat-eta.vercel.app",
    githubUrl: null,
    meta: {
      role: "Full-Stack Development",
      duration: "2024–2026",
      year: "2026",
      type: "Web Application",
    },
    facts: {
      industry: "Real Estate",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
    status: "Personal Project",
    story: [
      {
        title: "The Problem",
        text: [
          "Visitors needed a simple way to search and compare properties. On the other side, the people managing the website needed one place for listings, images, availability, and reservations.",
          "My first version kept the public website, API, database access, authentication, and media logic in one application. It worked, but every new feature made the boundaries less clear.",
        ],
        image: problemrealestat,
        imageAlt:
          "Real Estate Platform properties page with search filters and property listings",
      },
      {
        title: "The Approach",
        text: [
          "I split the project into two applications. The public website focuses on property discovery; the protected dashboard owns the API, authentication, database access, and Cloudinary operations.",
          "I moved it in stages—read routes first, then listing management, JWT protection, reservations, and the final frontend cutover—while keeping the existing database and its data.",
        ],
        image: Approachrealestat,
        imageAlt:
          "Real Estate Platform dashboard for managing property listings",
      },
      {
        title: "The Outcome",
        text: [
          "Visitors can search and filter properties, open detailed listings, view images and map data, and share a property. Administrators manage that information and the reservation workflow from one dashboard.",
          "The part I value most in this project is the second version: I did not just add features; I went back and gave the system clearer boundaries.",
        ],
        image: Outcomerealestat,
        imageAlt:
          "Real Estate Platform property detail view with images, specifications, and map data",
      },
    ],
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "REST API",
      "JWT Authentication",
      "Cloudinary",
      "Vercel",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    slug: "ocean-glass",
    title: "Ocean Glass",
  
    subtitle:
      "A client website in English, French, and Arabic, with service pages, project galleries, and a quotation flow built around how the business works.",
  
    description:
      "A multilingual website for a glass company, with RTL support, project galleries, and online quotation requests.",
  
    image: Heroglass,
  
    stack: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Firebase",
      "i18next",
      "GSAP"
    ],
  
    liveUrl: "https://glass-ocean-five.vercel.app/en",
  
    githubUrl: null,
  
    meta: {
      role: "Full Stack Developer",
      duration: "4 Weeks",
      year: "2025",
      type: "Client Project",
    },
  
    facts: {
      industry: "Glass Services",
      platform: "Web",
      responsive: "Desktop • Tablet • Mobile",
      team: "Solo",
    },
  
    status: "Completed",
  
    story: [
      {
        title: "The Problem",
        text: [
          "Ocean Glass had services and completed work to show, but no clear place to organize them. Customers also had to contact the company before giving even the basic details needed for a quotation.",
  
          "The website needed to work in English, French, and Arabic because the audience was not limited to one language. Arabic also meant treating RTL as part of the layout, not as translated text added at the end."
        ],
  
        image: Problemglass,
  
        imageAlt: "Ocean Glass service page"
      },
  
      {
        title: "The Approach",
        text: [
          "I organized the website around the questions a customer asks first: what the company does, what similar work looks like, and how to request a quote.",
  
          "I built the three language versions with Next.js and i18next, adjusted the layouts for Arabic, and connected service pages and project galleries to a quotation form."
        ],
  
        image: Approachglass,
  
        imageAlt: "Ocean Glass quotation and multilingual experience"
      },
  
      {
        title: "The Outcome",
        text: [
          "Ocean Glass now has one place to explain its services, publish completed projects, and receive quotation requests with useful context from the customer.",
  
          "This project taught me that multilingual work is not only translation. Navigation, spacing, direction, and the order of information all change the experience."
        ],
  
        image: Outcomeglass,
  
        imageAlt: "Ocean Glass gallery and completed projects"
      }
    ],
  
    technologies: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Firebase",
      "i18next",
      "GSAP",
      "Responsive Design",
      "SEO",
      "RTL Support"
    ]
  },
  {
  id: 3,
  slug: "piolec",

  title: "Piolec",

  subtitle:
    "A public website and custom dashboard that let an electrical engineering company publish its own projects, articles, and field photography.",

  description:
    "A client website with a private content dashboard for projects, articles, media, users, and publishing.",

  image: HeroPiolec,

  stack: [
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "REST API",
    "Custom CMS",
  ],

  liveUrl: "https://piolec-ten.vercel.app/",

  githubUrl: "https://github.com/akajdid-mostafa/Piolec",

  meta: {
    role: "Full-Stack Development",
    duration: "1 Month",
    year: "2024",
    type: "Corporate Website & CMS",
  },

  facts: {
    industry: "Electrical Engineering",
    platform: "Web",
    responsive: "Yes",
    team: "Solo",
  },

  status: "Live Client Project",

  story: [
    {
      title: "The Problem",

      text: [
        "Piolec needed more than a static company website. Its services cover electrical installations, automation, security systems, renewable energy, IT infrastructure, maintenance, and industrial projects — each requiring clear presentation supported by real technical work and project photography.",

        "The company also needed to remain independent after delivery. Projects, articles, images, team access, and published content had to be managed internally without editing source code or relying on a developer for every update.",
      ],

      image: ProblemPiolec,

      imageAlt:
        "Piolec industrial services and project portfolio displayed across desktop and mobile",
    },

    {
      title: "The Approach",

      text: [
        "I designed the product as two connected experiences: a responsive public website for customers and a dedicated administration dashboard for the Piolec team. The public side presents the company, its technical services, completed projects, work galleries, detailed project pages, and direct contact paths.",

        "The dashboard acts as a custom content management system. Authorized team members can manage projects and blog posts, organize media assets, control publication states, manage users and roles, review activity, and update the public website through structured workflows.",
      ],

      image: ApproachPiolec,

      imageAlt:
        "Piolec custom administration dashboard for managing projects, articles, media, and users",
    },

    {
      title: "The Outcome",

      text: [
        "Visitors can explore Piolec's services, browse completed installations, open detailed project galleries, and contact the company from any device.",

        "More importantly, the team does not need me for every content change. They can create, organize, update, and publish their own work from the dashboard.",
      ],

      image: OutcomePiolec,

      imageAlt:
        "Published Piolec project detail page with technical information and field photography",
    },
  ],

  technologies: [
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "REST API",
    "Custom CMS",
    "Content Management",
    "Project Management",
    "Blog Management",
    "Media Library",
    "Role-Based Dashboard",
    "Responsive Design",
    "Vercel",
  ],
},
  {
    id: 4,
    slug: "monpatient",
    title: "MonPatient",
    subtitle:
      "A healthcare project where patients, doctors, nurses, pharmacies, and administrators each get the workflows and information meant for their role.",
    description:
      "A role-based healthcare platform covering care requests, records, prescriptions, notifications, chat, and document access.",
    image: Heromonpatient,
    stack: ["React", "Fastify", "Prisma", "PostgreSQL"],
    liveUrl: "https://monpatient-kappa.vercel.app",
    githubUrl: null,
    meta: {
      role: "Full-Stack Development",
      duration: "2025–2026",
      year: "2026",
      type: "Web Application",
    },
    facts: {
      industry: "Healthcare",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
    status: "Personal Project",
    story: [
      {
        title: "The Problem",
        text: [
          "Healthcare coordination often relies on disconnected tools for patient profiles, care requests, medical records, prescriptions, and communication. This makes it difficult for patients and healthcare professionals to follow the same care journey.",
          "The project needed one role-based platform where patients, doctors, nurses, pharmacies, and administrators could access the information and actions relevant to them without sharing the same interface or permissions.",
        ],
        image: Problemmonpatient,
        imageAlt:
          "MonPatient registration and role-based access experience",
      },
      {
        title: "The Approach",
        text: [
          "I built the product as a React frontend connected to a Fastify backend, with JWT authentication, role guards, Prisma, and PostgreSQL. Each role receives a dedicated dashboard and protected workflows based on its responsibilities.",
          "The working core includes registration, login, profile completion, doctor–patient requests, nurse service requests, medical records, prescriptions, notifications, chat, document uploads, and responsive dashboards. Modules planned for later versions remain visible through honest Coming Soon states instead of broken pages.",
        ],
        image: Approachmonpatient,
        imageAlt:
          "MonPatient healthcare dashboard with role-based navigation and patient workflows",
      },
      {
        title: "The Outcome",
        text: [
          "Users can register, complete their profile, reach the dashboard for their role, and use the care and communication workflows that are currently implemented.",
          "I kept unfinished modules visible as Coming Soon instead of making them look complete. For a project with this many roles, being clear about what works became part of the product work.",
        ],
        image: Outcomemonpatient,
        imageAlt:
          "MonPatient patient profile with healthcare and emergency information",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "REST API",
      "JWT Authentication",
      "Cloudinary",
      "WebSocket",
      "Vercel",
      "Responsive Design",
    ],
  },
  {
    id: 5,
    slug: "storycareer",
    title: "StoryCareer",
    subtitle:
      "A place to read career stories from people, not another collection of generic advice about how a career should look.",
  
    description:
      "A reading and publishing platform for discovering, writing, and saving real career stories.",
  
    image: herostory,
  
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk"
    ],
  
    liveUrl: "https://storycareer-six.vercel.app",
    githubUrl: "https://github.com/akajdid-mostafa/storycareer",
  
    meta: {
      role: "Full-Stack Development",
      duration: "2 Months",
      year: "2025",
      type: "Web Application",
    },
  
    facts: {
      industry: "Career Development",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
  
    status: "Personal Project",
  
    story: [
      {
        title: "The Problem",
        text: [
          "Most career advice online comes in the form of generic articles, motivational posts, or unrealistic success stories. What people often need instead is honesty — learning how others faced setbacks, changed careers, solved problems, and eventually found their path.",
          "The challenge was to create a platform where professionals can share authentic career experiences, giving students and early-career professionals practical insights they can actually relate to."
        ],
        image: Problemstory,
        imageAlt: "StoryCareer homepage featuring real career stories",
      },
  
      {
        title: "The Approach",
        text: [
          "StoryCareer was designed around one core idea: people learn best from other people's experiences. Users can discover stories by industry, publish their own journey, save inspiring stories, and build a personal reading collection.",
          "The interface stays intentionally simple. The focus is always on the content itself, making reading comfortable and distraction-free while encouraging meaningful contributions from the community."
        ],
        image: Approachstory,
        imageAlt: "StoryCareer story reading experience",
      },
  
      {
        title: "The Outcome",
        text: [
          "Readers can discover stories by industry, save the ones they want to return to, and publish their own experience after signing in.",
          "I kept the interface quiet because the story should carry the page. The main technical pieces are Next.js, Prisma, PostgreSQL, and Clerk."
        ],
        image: Outcomestory,
        imageAlt: "StoryCareer story publishing interface",
      },
    ],
  
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Server Actions",
      "Responsive Design",
      "SEO Optimization",
    ],
  },
  {
  id: 6,
  slug: "halatranslat",

  title: "Hala Translat",

  subtitle:
    "A translation workflow that starts with a document upload and continues through pricing, tracking, administration, and final file delivery.",

  description:
    "A client portal and administrative dashboard for pricing, tracking, managing, and delivering document translation requests.",

  image: Herohala,

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Cloudinary",
    "Tailwind CSS",
    "Shadcn UI",
    "Vercel",
  ],

  liveUrl: "https://translate-front-beta.vercel.app/",
  githubUrl: null,

  meta: {
    role: "Full Stack Engineer",
    duration: "6 Weeks",
    year: "2026",
    type: "Production Web Platform",
  },

  facts: {
    industry: "Translation Services",
    platform: "Web",
    responsive: "Yes",
    team: "Solo",
  },

  status: "Production Deployment",

  story: [
    {
      title: "The Problem",
      text: [
        "Translation agencies often manage requests through emails, messaging apps, and spreadsheets. Price estimation, document delivery, and project tracking are handled manually, making the process slow and difficult to scale.",
        "The objective was to build a complete platform where clients could upload documents, receive instant pricing, submit translation requests, track progress, and securely download completed files without relying on manual communication.",
      ],
      image: Problemhala,
      imageAlt: "Hala Translat document upload interface",
    },

    {
      title: "The Solution",
      text: [
        "The platform provides two connected experiences: a public client portal and a secure administrative dashboard. Clients upload documents, receive automatic price calculations, submit requests, and monitor every stage of the translation process using a unique tracking ID.",
        "Administrators manage incoming requests, review uploaded files, update order status, upload translated documents, and securely deliver completed work. Prisma handles database operations while Cloudinary manages document storage and delivery.",
      ],
      image: Approachhala,
      imageAlt: "Hala Translat translation management dashboard",
    },

    {
      title: "The Result",
      text: [
        "A request can move from document upload to automatic pricing, status updates, file replacement, and protected download without being passed between email threads and spreadsheets.",
        "This was the project where the workflow mattered more than any single screen. Each step had to leave the right information for the client and for the administrator handling the request.",
      ],
      image: Outcomehala,
      imageAlt: "Hala Translat platform across desktop and mobile devices",
    },
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Prisma ORM",
    "PostgreSQL",
    "Cloudinary",
    "REST API",
    "Tailwind CSS",
    "Shadcn UI",
    "Vercel",
  ],
},
];

export default caseStudies;

export function getProjectBySlug(slug) {
  return caseStudies.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug) {
  const index = caseStudies.findIndex((project) => project.slug === currentSlug);
  if (index === -1) return caseStudies[0];
  return caseStudies[(index + 1) % caseStudies.length];
}
