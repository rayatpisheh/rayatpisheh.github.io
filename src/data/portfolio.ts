/**
 * Site content. Edit this file to update the portfolio.
 */

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  /** Iconify id, preferably Solar bold-duotone or line-duotone. */
  icon: string;
  /** Path under `public/`, for example `mockup/cryptopay.png`. */
  image: string;
  description: string;
  stack: string[];
  placeholder?: boolean;
  links?: ProjectLink[];
}

export interface SkillItem {
  name: string;
  /**
   * Local SVG under `src/icons/` (from [Tech Stack Icons](https://www.tech-stack-icons.com/)).
   * Omit when there is no clear brand mark for the skill.
   */
  icon?: string;
}

export interface SkillGroup {
  title: string;
  /** Iconify id, preferably Solar bold-duotone or line-duotone. */
  icon: string;
  items: SkillItem[];
  note?: string;
}

export type WorkLocation = 'on-site' | 'remote' | 'hybrid';

export interface Experience {
  id: string;
  role: string;
  organization: string;
  /** Path under `public/`, for example `logos/igame.png`. */
  logo: string;
  period: string;
  location: WorkLocation;
  summary: string;
  responsibilities: string[];
  placeholder?: boolean;
}

export interface ContactLink {
  label: string;
  href: string;
  text: string;
  /** Iconify id, preferably Solar bold-duotone or line-duotone. */
  icon: string;
}

export const meta = {
  title: 'Mohammad Rayat Pisheh | Senior Full Stack Developer',
  description:
    'Senior full stack developer with 12+ years of experience in C#, ASP.NET Core, EF Core, microservices, payment systems, and backend architecture.',
};

export const profile = {
  name: 'Mohammad Rayat Pisheh',
  greeting: "Hi, I'm Mohammad Rayat Pisheh",
  availability: 'Available for freelance & part-time work',
  title: 'Senior Full Stack Developer',
  photo: 'cv-photo.jpg',
  introduction:
    'I design and build maintainable backend systems for payments, bookings, and enterprise platforms.',
  summary:
    'Senior software developer with over 12 years of experience analyzing, designing, developing, and optimizing enterprise and web-based systems, with a strong focus on backend development in the .NET ecosystem. Experienced in payment systems, financial gateways, multilayer and microservices architectures, multi-tenant systems, and real-time services. I have worked as a Senior Backend Developer, Full-Stack Developer, and Backend Tech Lead across cryptocurrency payment gateways, reservation and ticketing systems, e-commerce platforms, enterprise solutions, and digital service platforms.',
  highlights: [
    '12+ years across backend, full-stack, and tech lead roles',
    'Payment systems, financial gateways, and real-time services',
    'Microservices, multi-tenant platforms, and API design',
    'Data modeling, database optimization, and complex technical problem-solving',
  ],
};

export const navigation = [
  { href: '#about', label: 'About', icon: 'solar:user-rounded-bold-duotone' },
  { href: '#skills', label: 'Skills', icon: 'solar:code-square-bold-duotone' },
  { href: '#projects', label: 'Projects', icon: 'solar:folder-bold-duotone' },
  { href: '#experience', label: 'Experience', icon: 'solar:case-round-bold-duotone' },
  { href: '#contact', label: 'Contact', icon: 'solar:letter-bold-duotone' },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'solar:server-bold-duotone',
    items: [
      { name: 'C#', icon: 'tech/csharp' },
      { name: '.NET', icon: 'tech/net' },
      { name: 'ASP.NET Core', icon: 'tech/netcore' },
      { name: 'EF Core' },
      { name: 'REST APIs' },
      { name: 'Multithreading' },
    ],
  },
  {
    title: 'Architecture',
    icon: 'solar:widget-5-bold-duotone',
    items: [
      { name: 'Microservices' },
      { name: 'Software architecture' },
      { name: 'System design' },
      { name: 'Multi-tenant systems' },
      { name: 'Blockchain architecture' },
    ],
  },
  {
    title: 'Databases',
    icon: 'solar:database-bold-duotone',
    items: [
      { name: 'SQL Server' },
      { name: 'Azure Database', icon: 'tech/azure' },
      { name: 'Database design' },
      { name: 'Query optimization' },
      { name: 'MongoDB', icon: 'tech/mongodb' },
    ],
  },
  {
    title: 'Messaging & Realtime',
    icon: 'solar:chat-round-dots-bold-duotone',
    items: [
      { name: 'RabbitMQ', icon: 'tech/rabbitmq' },
      { name: 'MassTransit' },
      { name: 'Hangfire' },
      { name: 'SignalR' },
      { name: 'WebSockets' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'solar:monitor-bold-duotone',
    items: [
      { name: 'HTML', icon: 'tech/html5' },
      { name: 'CSS', icon: 'tech/css3' },
      { name: 'JavaScript', icon: 'tech/js' },
      { name: 'jQuery', icon: 'tech/jquery' },
      { name: 'React', icon: 'tech/react' },
      { name: 'Next.js', icon: 'tech/nextjs' },
    ],
    note: 'React and Next.js are technologies of interest alongside backend-focused work.',
  },
  {
    title: 'Tools & Practices',
    icon: 'solar:settings-bold-duotone',
    items: [
      { name: 'Git', icon: 'tech/git' },
      { name: 'Debugging' },
      { name: 'Performance tuning' },
      { name: 'Code reviews' },
      { name: 'Technical documentation' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'carchi24',
    title: 'Automotive Services Platform',
    icon: 'solar:wheel-bold-duotone',
    image: 'mockup/carchi.png',
    description:
      'Designed and developed a modular monolith platform for automotive services, with clearly separated business domains, extensible modules, and maintainable workflows. The platform includes service inquiries, payments, auctions, dynamic forms, and real-time updates. Development was accelerated with AI-assisted coding while maintaining architectural consistency and code quality.',
    stack: ['ASP.NET Core', 'Next.js', 'React', 'Hangfire', 'SignalR', 'Cursor'],
    links: [{ label: 'carchi24.ir', href: 'https://carchi24.ir/' }],
  },
  {
    id: 'crypto-payment-gateway',
    title: 'Cryptocurrency Payment Gateway',
    icon: 'solar:wallet-bold-duotone',
    image: 'mockup/cryptopay.png',
    description:
      'ASP.NET Core crypto payment gateway supporting 40+ currencies, networks, and token standards. Core systems covered wallets, deposits, withdrawals, blockchain monitoring, confirmation, settlement, and merchant APIs, with an event-driven pipeline for reliable real-time processing at scale.',
    stack: ['C#', 'ASP.NET Core', 'Hangfire', 'SignalR', 'Queues', 'SQL Server'],
  },
  {
    id: 'flight-reservation',
    title: 'Flight Reservation and Ticketing Platform',
    icon: 'solar:plain-2-bold-duotone',
    image: 'mockup/charter.png',
    description:
      'High-traffic online flight reservation and ticketing platform covering search, availability, booking, and issuance. Supplier integrations were isolated behind resilient microservice boundaries, with asynchronous messaging for booking, accounting, and notifications.',
    stack: ['C#', 'ASP.NET Core', 'Microservices', 'RabbitMQ', 'MassTransit'],
    links: [{ label: 'charter.ir', href: 'https://charter.ir/' }],
  },
  {
    id: 'digital-services-store',
    title: 'Digital Services Store Migration',
    icon: 'solar:gamepad-bold-duotone',
    image: 'mockup/igame.png',
    description:
      'Key contribution to migrating a digital-services store for in-game credit and gift cards from WordPress to .NET, improving stability, scalability, and maintainability. Backend services and admin panels covered products, orders, supplier fulfilment, and customer-loyalty workflows.',
    stack: ['C#', '.NET', 'ASP.NET Core', 'SQL Server'],
    links: [{ label: 'igame.ir', href: 'https://igame.ir/' }],
  },
  {
    id: 'hadish-ecommerce',
    title: 'e-commerce platform for Hadish Computer online store',
    icon: 'solar:shop-bold-duotone',
    image: 'mockup/ehadish.png',
    description:
      'E-commerce platform for computer hardware, laptops, peripherals, and digital accessories. Covers product catalog with specs, search and filtering, shopping cart, online ordering, customer accounts, and an admin dashboard for products, inventory, pricing, and orders.',
    stack: ['C#', '.NET', 'ASP.NET Mvc', 'SQL Server', 'EF Core', 'jQuery', 'Bootstrap'],
    links: [{ label: 'ehadish.com', href: 'https://www.ehadish.com/' }],
  },
  {
    id: 'taxicore',
    title: 'Taxi Fleet Management & ERP System',
    icon: 'solar:car-bold-duotone',
    image: 'mockup/taxicore.png',
    description:
      'An ERP system for the Shiraz Taxi Organization, designed to streamline administrative operations, synchronize data with handheld devices through web services, and support digital document scanning and management.',
    stack: [
      'C#',
      '.NET',
      'ASP.NET Mvc',
      'SQL Server',
      'EF Core',
      'Windows Service',
      'RESTful Web Services',
    ],
  },
];

export const experience: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Senior Full-Stack Developer',
    organization: 'Independent',
    logo: 'logos/freelance.svg',
    period: 'June 2026 - Present',
    location: 'remote',
    summary:
      'Design and deliver backend systems for client products, from architecture and APIs through production support.',
    responsibilities: [
      'Developed a comprehensive vehicle services platform, implementing core business workflows, payment integrations, and scalable backend APIs using ASP.NET Core and modern frontend technologies.',
      'Maintained and modernized an established accounting system, extending business-critical functionality, optimizing database operations, and improving application reliability across the stack.',
      
      
    ],
  },
  {
    id: 'igame',
    role: 'Full Stack Engineer',
    organization: 'iGame',
    logo: 'logos/igame.png',
    period: 'January 2024 - May 2026',
    location: 'hybrid',
    summary:
      'Focused on migrating and improving a digital-services store, backend services, admin panels, and technical architecture.',
    responsibilities: [
      'Key contributor to migrating a digital-services store (in-game credit and gift cards) from WordPress to .NET, improving stability, scalability, and maintainability.',
      'Developed and improved backend services and admin panels for products, order management, supplier fulfilment, and customer-loyalty workflows.',
      'Collaborated on redesigning the technical architecture to enable further product development and reduce recurring system bugs.',
    ],
  },
  {
    id: 'crypto-gateway',
    role: 'Backend Tech Lead / Senior .NET Developer',
    organization: 'Crypto Payment Gateway (FinTech)',
    logo: 'logos/Crypto Payment Gateway .png',
    period: 'May 2021 - November 2023',
    location: 'remote',
    summary:
      'Led architecture and backend development for a production cryptocurrency payment gateway, including wallets, blockchain monitoring, settlement, and merchant APIs.',
    responsibilities: [
      'Led the architecture and backend development of an ASP.NET Core crypto payment gateway supporting 40+ currencies, networks, and token standards.',
      'Scaled the platform to 100K+ users, processing thousands of blockchain transactions daily and about $100K in daily transaction volume.',
      'Designed core systems for wallets, deposits, withdrawals, blockchain monitoring, transaction confirmation, settlement, and merchant APIs.',
      'Built an event-driven, asynchronous processing pipeline using queues, Hangfire, and SignalR/WebSockets for reliable and real-time transaction processing.',
      'Implemented idempotent and fault-tolerant transaction processing, including handling node failures and blockchain reorganizations.',
      'Led code reviews, established development standards, and mentored backend developers on .NET architecture and blockchain systems.',
    ],
  },
  {
    id: 'icharter',
    role: 'Senior Back-End Developer',
    organization: 'icharter',
    logo: 'logos/icharter.jpg',
    period: 'September 2017 - May 2021',
    location: 'on-site',
    summary:
      'Delivered accounting, ticketing, multi-tenant store, and supplier-integration work on a microservices architecture.',
    responsibilities: [
      'Analyzed, designed, and delivered an accounting subsystem on a microservices architecture, including the ePay module that unified accounting records with electronic payment processing.',
      'Built core parts of a high-traffic online flight reservation and ticketing platform, covering search, availability, booking, and issuance flows.',
      'Designed and shipped a multi-tenant store management panel that let agencies run branded storefronts on shared infrastructure.',
      'Developed supplier integration microservices (SafarPazh, Zagros, Nira) for flight inquiry, availability, and booking, isolating unstable third-party APIs behind resilient service boundaries.',
      'Implemented asynchronous service-to-service communication with RabbitMQ and MassTransit to decouple booking, accounting, and notification workloads.',
      'Delivered a video-sharing platform on AWS with MongoDB Atlas and Python.',
    ],
  },
  {
    id: 'arapendar',
    role: 'Full-Stack Web Developer',
    organization: 'AraPendar',
    logo: 'logos/AraPendar.jpg',
    period: 'January 2016 - March 2017',
    location: 'on-site',
    summary:
      'Built messaging, payments, e-commerce, and loyalty systems, and improved collaboration tooling for the team.',
    responsibilities: [
      'Developer and database designer for the Navida messaging platform.',
      'Researched and implemented international payment solutions with Stripe and Braintree.',
      'Designed and developed the ParsiTeb, ParsiCard, and DarmanGostar e-commerce platforms on a centralized database architecture, and the Hadish Computer online store (ehadish.com).',
      'Implemented customer loyalty club systems for SuperStore and ParsiCard.',
      'Debugged the IranTick and ParsiConcert projects and improved the seat-selection algorithm.',
      'Introduced and configured TFS to improve team collaboration, version control, and parallel project management.',
    ],
  },
  {
    id: 'pishgaman-asia',
    role: 'Back-end Developer',
    organization: 'Pishgaman Asia',
    logo: 'logos/Pishgaman Asia.jpg',
    period: 'April 2014 - February 2015',
    location: 'on-site',
    summary:
      'Built attendance, meal management, warehouse, and municipal systems with device integration and documentation.',
    responsibilities: [
      'Built a time-and-attendance system integrated with fingerprint devices for near real-time attendance synchronization, and a self-service meal management system with biometric authentication.',
      'Contributed to warehouse, procurement, support, and HR systems for a client in the oil and gas industry.',
      'Analyzed and implemented the Shiraz Taxi Organization management system, including handheld-device data synchronization over web services and client-side document scanning.',
      'Produced technical documentation with prototypes and UML diagrams.',
    ],
  },
  {
    id: 'dadeh-negar',
    role: 'Full-Stack Web Developer & UI/UX Designer',
    organization: 'Dadeh Negar Khwarazmi',
    logo: 'logos/Dadeh Negar Khwarazmi.png',
    period: 'September 2012 - February 2014',
    location: 'on-site',
    summary:
      'Delivered UI design, CMS work, and domain systems for university and outsourcing projects.',
    responsibilities: [
      'Designed user interfaces in PSD format, converting them to HTML, CSS, and jQuery.',
      'Re-engineered the Sava outsourcing system, including database analysis and UI design.',
      'Developed content management systems for Shiraz University of Medical Sciences.',
      'Designed auction, evaluation, and medical council systems for the university.',
    ],
  },
];

export const contact = {
  invitation:
    'I am open to backend engineering roles and to conversations about system design, architecture, and production .NET systems.',
  note: '',
  links: [
    {
      label: 'Email',
      href: 'mailto:rayatpisheh.info@gmail.com',
      text: 'rayatpisheh.info@gmail.com',
      icon: 'solar:letter-bold-duotone',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohammad-rayat-pisheh-50380962',
      text: 'linkedin.com/in/mohammad-rayat-pisheh-50380962',
      icon: 'ph:linkedin-logo-duotone',
    },
  ] satisfies ContactLink[],
};
