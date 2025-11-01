import {
	Cpu,
	BrainCircuit,
	Rocket,
	Code2,
	Zap,
	Sparkles,
	Server,
	Handshake,
	MessageCircle,
	PhoneIcon,
	MapPinIcon,
	MailIcon,
	Target,
	Eye,
	Heart,
	Users,
} from "lucide-react";

export const navItems = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Blog", link: "/blog" },
	{ name: "Services", link: "/services" },
	{ name: "Projects", link: "/projects" },
	{ name: "Contact", link: "/contact" },
];

export const skills = [
	{
		name: "JavaScript",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/javascript.svg?updatedAt=1760894715673",
	},
	{
		name: "TypeScript",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/typescript.svg?updatedAt=1760894836152",
	},
	{
		name: "HTML",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/html.svg?updatedAt=1760894717578",
	},
	{
		name: "CSS",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/css.svg?updatedAt=1760894715285",
	},
	{
		name: "MongoDB",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/mongodb.svg?updatedAt=1760894715690",
	},
	{
		name: "Python",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/python.svg?updatedAt=1760894715688",
	},
	{
		name: "ReactJs",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/react.svg?updatedAt=1760894717645",
	},
	{
		name: "Git",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/git.svg?updatedAt=1760894715697",
	},
	{
		name: "ExpressJs",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/express-js.svg?updatedAt=1760894715673",
	},
	{
		name: "NextJs",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/nextjs.svg?updatedAt=1760895672096",
	},
	{
		name: "NodeJs",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/nodejs.svg?updatedAt=1760894717573",
	},
	{
		name: "PostgreSQL",
		src: "https://ik.imagekit.io/xp2qigjdg/website-images/postgresql.svg?updatedAt=1760894715707",
	},
];

export const faq = [
	{
		question: "What does JackFruit do?",
		answer:
			"JackFruit is a software and automation company that helps businesses scale faster through modern web development, AI automation, and digital transformation. We build smart, fast, and elegant solutions customized for your goals.",
	},
	{
		question: "What kind of services do you offer?",
		answer:
			"We offer full-stack web development, AI agent automation, mobile app development, SaaS product creation, custom dashboards, API integrations, and branding solutions — everything your business needs to grow digitally.",
	},
	{
		question: "Do you provide custom solutions for startups?",
		answer:
			"Absolutely. We love working with startups. From MVP development to product design and automation, we help startups launch fast, scale smart, and stand out with a premium digital presence.",
	},
	{
		question: "How long does it take to build a project?",
		answer:
			"It depends on the complexity and features. Small projects may take 1–3 weeks, while large-scale platforms can take 2–3 months. We provide clear timelines before starting.",
	},
	{
		question: "What technologies do you use?",
		answer:
			"We use modern technologies like Next.js, React, Node.js, Express, MongoDB, PostgreSQL, Prisma, Tailwind CSS, Shadcn UI, and AI automation tools like n8n, OpenAI, and LangChain.",
	},
	{
		question: "Do you provide post-launch support?",
		answer:
			"Yes. We offer maintenance, updates, and ongoing optimization for all our products. You can choose a monthly support plan or pay per update depending on your needs.",
	},
	{
		question: "Can you integrate AI into existing software?",
		answer:
			"Yes, we specialize in AI integrations — from chatbots and workflow automations to predictive analytics — we can embed AI into your current systems seamlessly.",
	},
	{
		question: "How do I start working with JackFruit?",
		answer:
			"Simply fill out our contact form or schedule a free consultation call. We’ll discuss your project, goals, and prepare a proposal with clear cost and timeline estimates.",
	},
	{
		question: "Where is JackFruit located?",
		answer:
			"We’re a global remote-first company based in Bangladesh, serving clients worldwide with modern communication and project management tools.",
	},
	{
		question: "How much do your services cost?",
		answer:
			"Pricing depends on the project type and complexity. We offer flexible pricing for startups, small businesses, and enterprises. Every project starts with a free quote.",
	},
];

export const features = [
	{
		title: "AI-Driven Innovation",
		description:
			"We integrate cutting-edge AI tools and automation to build smarter, faster, and more efficient digital solutions.",
		icon: BrainCircuit,
	},
	{
		title: "End-to-End Development",
		description:
			"From concept to launch — we handle everything including design, development, deployment, and scaling.",
		icon: Code2,
	},
	{
		title: "Scalable Architecture",
		description:
			"Every product we build is designed to scale seamlessly as your user base and business grow.",
		icon: Server,
	},
	{
		title: "Next-Gen Web Experiences",
		description:
			"We craft luxurious, lightning-fast, and responsive websites powered by Next.js and modern UI frameworks.",
		icon: Rocket,
	},
	{
		title: "Performance & Optimization",
		description:
			"We prioritize speed, clean architecture, and optimized builds to deliver the best performance possible.",
		icon: Zap,
	},
	{
		title: "Seamless Collaboration",
		description:
			"We maintain transparent communication and align closely with your team for smooth delivery.",
		icon: Handshake,
	},
	{
		title: "Clean & Maintainable Code",
		description:
			"Our engineering principles ensure your product stays robust, readable, and future-proof.",
		icon: Cpu,
	},
	{
		title: "Luxury Digital Experience",
		description:
			"We believe in premium design — crafting elegant digital products that feel as powerful as they look.",
		icon: Sparkles,
	},
];

export const contacts = [
	{
		title: "Live chat",
		link: "https://wa.me/8801719000000",
		icon: MessageCircle,
		description: "Chat with us on WhatsApp",
		details: "Start a conversation",
	},
	{
		title: "Phone",
		link: "tel:+8801719-000000",
		icon: PhoneIcon,
		description: "Monday-Friday from 8am to 5pm",
		details: "+8801719-000000",
	},
	{
		title: "Email",
		link: "mailto:0BtYb@example.com",
		description: "We would love to hear from you",
		icon: MailIcon,
		details: "0BtYb@example.com",
	},
	{
		title: "Office",
		link: "",
		icon: MapPinIcon,
		description: "Come say hello at our office HQ",
		details: "New York, NY, USA",
	},
];

export const values = [
	{
		icon: Target,
		title: "Mission",
		description:
			"To redefine how humans and machines collaborate, creating intelligent solutions that amplify human potential.",
	},
	{
		icon: Eye,
		title: "Vision",
		description:
			"To make AI accessible for every modern business, democratizing innovation and excellence.",
	},
	{
		icon: Heart,
		title: "Values",
		description:
			"Innovation, integrity, and impact guide every decision we make and solution we build.",
	},
	{
		icon: Users,
		title: "Culture",
		description:
			"A collaborative environment where creativity thrives and boundaries are pushed daily.",
	},
];

export const team = [
	{
		role: "Leadership",
		members:
			"Visionary leaders with decades of combined experience in software engineering and AI",
	},
	{
		role: "Engineering",
		members:
			"World-class developers passionate about building elegant, scalable solutions",
	},
	{
		role: "Design",
		members:
			"Creative minds crafting beautiful, intuitive experiences that users love",
	},
	{
		role: "Strategy",
		members: "Business experts who understand technology and transformation",
	},
];

export const services = [
	{
		title: "Custom Web App Development",
		subtitle: "Build tailored business software",
		shortDescription:
			"High-performance web apps designed to automate operations and scale smoothly.",
		longDescription:
			"We design and develop bespoke web applications using the finest modern frameworks such as Next.js and React. Each solution is meticulously built for strength, security, and scalability, ensuring it grows seamlessly alongside your enterprise.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/web-application.svg?updatedAt=1761237850488",
	},
	{
		title: "AI Automation & Workflow Systems",
		subtitle: "Automate repetitive tasks",
		shortDescription:
			"Boost productivity by automating manual, repetitive business workflows.",
		longDescription:
			"Our intelligent automation systems harness the power of AI, n8n, and custom-built bots to refine efficiency and precision. These pipelines reduce human effort, eliminate costly mistakes, and allow your team to focus on work that truly matters.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/ai-automation.svg?updatedAt=1761237850360",
	},
	{
		title: "UI/UX Design & Branding",
		subtitle: "Beautiful and usable design",
		shortDescription:
			"Polished, conversion-focused designs crafted to represent your brand and delight users.",
		longDescription:
			"Our design philosophy balances elegance with function. Every interface we create is crafted to be intuitive, visually graceful, and deeply engaging. Through refined branding and cohesive design systems, we help your business present a confident and enduring identity.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/ui-ux-design.svg?updatedAt=1761237850545",
	},
	{
		title: "SaaS Product Development",
		subtitle: "Launch subscription-based platforms",
		shortDescription:
			"We build complete SaaS products from concept to deployment with scalable architecture.",
		longDescription:
			"We bring subscription-based platforms to life with complete systems for authentication, billing, analytics, and user management. Each product is built with growth in mind—secure, seamless, and ready to serve an expanding audience.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/saas-application.svg?updatedAt=1761237850603",
	},
	{
		title: "Mobile App Development",
		subtitle: "Cross-platform mobile solutions",
		shortDescription:
			"Deliver smooth mobile app experiences across iOS and Android using modern stacks.",
		longDescription:
			"Our mobile applications, created with React Native or Flutter, combine performance with beauty. They deliver swift navigation, intuitive experiences, and consistent reliability across all devices, ensuring your users remain engaged and connected.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/mobile-application.svg?updatedAt=1761238653223",
	},
	{
		title: "E-Commerce Development",
		subtitle: "Online stores that convert",
		shortDescription:
			"High-converting e-commerce solutions with secure checkout and product management.",
		longDescription:
			"We design e-commerce experiences that inspire trust and drive conversions. With payment integrations such as Stripe and SSLCOMMERZ, along with intelligent dashboards and analytics, your business gains a complete digital commerce ecosystem built for success.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/ecommerce-app.svg?updatedAt=1761237850521",
	},
	{
		title: "API Development & Integration",
		subtitle: "Connect your systems securely",
		shortDescription:
			"Custom APIs and third-party integrations built for speed, reliability, and data security.",
		longDescription:
			"Our APIs are designed with precision and foresight, using REST and GraphQL architectures to ensure secure and seamless communication between systems. We connect your platform to CRMs, AI models, payment gateways, and analytical tools with effortless harmony.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/api-development.svg?updatedAt=1761237850426",
	},
	{
		title: "Cloud Infrastructure & DevOps",
		subtitle: "Deploy, scale, and automate",
		shortDescription:
			"Secure cloud environments with CI/CD, monitoring, backups, and fail-safe deployments.",
		longDescription:
			"We build and maintain robust cloud environments using AWS, Vercel, Railway, and Docker. Our DevOps practices ensure security, reliability, and agility, allowing your digital systems to scale gracefully as your ambitions expand.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/devops-cloud.svg?updatedAt=1761237850474",
	},
	{
		title: "Maintenance & Technical Support",
		subtitle: "Keep systems healthy",
		shortDescription:
			"Continuous updates, bug fixes, security patches, and performance improvements.",
		longDescription:
			"Our commitment extends beyond deployment. We provide attentive technical support and continuous maintenance to preserve system health, prevent disruptions, and uphold user satisfaction at every moment.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/maintenance-technical.svg?updatedAt=1761237850478",
	},
	{
		title: "Startup MVP Development",
		subtitle: "Validate ideas fast",
		shortDescription:
			"Launch a minimum viable product to validate ideas and attract investors.",
		longDescription:
			"We guide emerging ventures from concept to prototype with precision and clarity. Our approach focuses on the essential features that validate ideas swiftly, attract investors, and pave the way for full-scale development.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/startup-mvp.svg?updatedAt=1761237850439",
	},
	{
		title: "Consultation & Project Strategy",
		subtitle: "Plan your digital roadmap",
		shortDescription:
			"Strategic planning to align technology with business goals and growth.",
		longDescription:
			"Every great product begins with vision and strategy. We collaborate closely to define clear objectives, architect scalable solutions, and map a practical path toward successful delivery. Our counsel ensures your technology investments are wise, strategic, and future-ready.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/consultation-strategy.svg?updatedAt=1761237850501",
	},
];

export const featuredProjects = [
	{
		title: "AwakeNation Football Website",
		industry: "Sports & Event Management",
		problem:
			"Scaling and efficiently managing a high-attendance national football event with dynamic scheduling and real-time content needs.",
		solution:
			"Built a custom, performance-focused Event Management Platform utilizing a Sanity Headless CMS for rapid, real-time content delivery and easy administrative control.",
		impact:
			"Facilitated a successful, high-profile national event with massive user attendance, proving the platform's scalability and robustness under peak load.",
		tags: ["Sanity CMS", "Event Management", "Headless CMS"],
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/website-images/awakenationbd.com_.png?updatedAt=1761837030089",
	},
	{
		title: "Omnifood Meal Planning Website",
		industry: "Health-Tech / Food Delivery",
		problem:
			"Users struggle with planning healthy, personalized meals daily, leading to diet inconsistency and frustration.",
		solution:
			"Developed an AI-powered meal subscription application that uses machine learning to select meals from over 5,000 recipes based on user preferences and nutritional goals.",
		impact:
			"Provided personalized, healthy meal plans delivered daily, significantly improving user adherence to diet goals and simplifying the meal preparation process.",
		tags: ["Health-Tech", "Landing Page Development", "Subscription Service"],
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/website-images/onmifood-ab.netlify.app_.png?updatedAt=1761994685349",
	},
	{
		title: "High-Fidelity Productivity SaaS Landing Page",
		industry: "Software as a Service (SaaS) / Productivity",
		problem:
			"Creating a high-impact, modern landing page for a new productivity application to effectively capture leads and clearly communicate product value.",
		solution:
			"Designed and developed a visually striking, high-fidelity landing page (using Vercel for deployment) focused on 'Pathway to Productivity' with clear feature sections, a pricing matrix, and user testimonials.",
		impact:
			"Delivered a compelling digital storefront for the SaaS product, enhancing brand credibility and optimizing the conversion funnel from visitor to trial sign-up.",
		tags: ["SaaS", "UI/UX Design", "Vercel", "Web Development", "Productivity"],
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/website-images/saas-landing-page-anunay.vercel.app_.png?updatedAt=1761994685032",
	},
	{
		title: "LWS XStream Custom Streaming Platform",
		industry: "Media / Content Streaming",
		problem:
			"The client needed a dedicated, branded platform to aggregate, host, and showcase popular video streams and content creators, fostering a community of streamers.",
		solution:
			"Developed a dark-themed, high-engagement video streaming portal (deployed on Vercel) focused on 'Play, Compete, Follow Popular Streamers,' featuring streams of the day and categorized video content.",
		impact:
			"Successfully launched a central hub for video content and streamers, providing a superior, distraction-free viewing experience and building a focused community around gaming and tech content.",
		tags: ["Streaming", "Video Portal", "Frontend Development"],
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/website-images/x-stream-lws.vercel.app_en.png?updatedAt=1761995336115",
	},
	{
		title: "LWS MovieDB Discovery Platform",
		industry: "Entertainment / Media",
		problem:
			"The client needed to build a fully functional, dynamic front-end application to practice integrating with external APIs and displaying large sets of structured data (movies).",
		solution:
			"Developed a dark-themed Movie Database application (MovieDB) utilizing a public API (like TMDb) to fetch and display categorized lists of films, including 'Trending Now,' 'Popular,' and 'Top Rated' sections.",
		impact:
			"Created a robust, responsive web application that demonstrates competence in API integration, state management, and the creation of an intuitive media browsing experience.",
		tags: ["API Integration", "The Movie Database (TMDb)", "Web Development"],
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/website-images/lws-moviedb-three.vercel.app_.png?updatedAt=1761995336118",
	},
	{
		title: "Asterot Football Tournament",
		client: "Asterot / The Rising Generation",
		industry: "Sports / Event Management",
		problem:
			"The organizers required a centralized, robust online platform for managing the 'Rising Generation Football Tournament 2025,' including team registration, schedule updates, and rules dissemination.",
		solution:
			"Developed a dark-themed, highly detailed landing page and portal that handles team registration payments, showcases the tournament format, rules, schedule, and contact information.",
		impact:
			"Streamlined the entire registration and information process for participants, ensuring a professional, scalable, and easy-to-manage digital presence for a major sporting event.",
		tags: ["Sports", "Registration Portal", "Payment Integration"],
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/website-images/asterot-landing-page.vercel.app_.png?updatedAt=1761995972481",
	},
];
