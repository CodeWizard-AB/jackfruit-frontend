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
} from "lucide-react";

export const navItems = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Blog", link: "/blog" },
	{ name: "Services", link: "/services" },
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

export const services = [
	{
		title: "Custom Web App Development",
		description:
			"We build high-performance, scalable web applications tailored to your business — using Next.js, React, and modern backend frameworks.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/web-application.svg?updatedAt=1760944770442",
	},
	{
		title: "AI Automation & Workflow Systems",
		description:
			"Automate your repetitive tasks with AI-powered bots, n8n workflows, and custom automation systems designed to boost productivity.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/ai-automation.svg?updatedAt=1760944770148",
	},
	{
		title: "UI/UX Design & Branding",
		description:
			"Elegant and user-centric interfaces designed in Figma — focusing on usability, flow, and high-end aesthetics for your brand.",
		image:
			"https://ik.imagekit.io/xp2qigjdg/website-images/ui-ux-design.svg?updatedAt=1760945453761",
	},
	{
		title: "SaaS Product Development",
		description:
			"From idea to launch — we architect, design, and deploy complete SaaS solutions that scale and deliver real business value.",
		image: "/images/services/saas.jpg",
	},
	{
		title: "Mobile App Development",
		description:
			"Cross-platform mobile apps with React Native or Flutter — delivering smooth, native experiences across iOS and Android.",
		image: "/images/services/mobile-app.jpg",
	},
	{
		title: "E-Commerce Development",
		description:
			"We build sleek, conversion-focused e-commerce platforms with integrated payment gateways, admin panels, and analytics dashboards.",
		image: "/images/services/ecommerce.jpg",
	},
	{
		title: "Website Design & Development",
		description:
			"Premium, responsive websites built for performance and aesthetics — combining Tailwind CSS, modern UX, and seamless animations.",
		image: "/images/services/web-design.jpg",
	},
	{
		title: "API Development & Integration",
		description:
			"We design and build secure, scalable REST and GraphQL APIs — and integrate third-party services like Stripe, Google, and OpenAI.",
		image: "/images/services/api.jpg",
	},
	{
		title: "CRM & Dashboard Systems",
		description:
			"Custom dashboards, analytics tools, and CRM solutions built to visualize data and manage business operations efficiently.",
		image: "/images/services/crm.jpg",
	},
	{
		title: "AI Chatbots & Virtual Assistants",
		description:
			"Intelligent chatbots powered by GPT and custom AI models — improving customer engagement and support automation.",
		image: "/images/services/chatbot.jpg",
	},
	{
		title: "Digital Transformation Consulting",
		description:
			"We guide businesses to modernize operations using automation, AI, and cloud technology for smarter decision-making.",
		image: "/images/services/consulting.jpg",
	},
	{
		title: "Branding & Visual Identity",
		description:
			"From logo to color system — we craft bold, premium brand identities that reflect innovation and trust.",
		image: "/images/services/branding.jpg",
	},
	{
		title: "Cloud Infrastructure & DevOps",
		description:
			"Deploy, scale, and monitor your applications using AWS, Vercel, or Railway — with continuous integration and backups.",
		image: "/images/services/devops.jpg",
	},
	{
		title: "Automation with n8n / Zapier",
		description:
			"Streamline workflows by integrating your tools using no-code automations — saving time and reducing manual work.",
		image: "/images/services/n8n.jpg",
	},
	{
		title: "AI-Powered Analytics & Insights",
		description:
			"Turn your business data into actionable insights using AI-driven dashboards and data visualization systems.",
		image: "/images/services/ai-analytics.jpg",
	},
	{
		title: "Maintenance & Technical Support",
		description:
			"We provide long-term support, performance optimization, and security updates for your live projects.",
		image: "/images/services/support.jpg",
	},
	{
		title: "Startup MVP Development",
		description:
			"Got an idea? We’ll design, prototype, and build your MVP fast — helping you validate and scale your product efficiently.",
		image: "/images/services/mvp.jpg",
	},
	{
		title: "Enterprise Solutions",
		description:
			"Custom software built for performance, security, and scalability — optimized for enterprise workflows and data integrity.",
		image: "/images/services/enterprise.jpg",
	},
	{
		title: "AI Integration in Existing Systems",
		description:
			"We integrate GPT, image recognition, and automation tools into your current workflow — enhancing efficiency and intelligence.",
		image: "/images/services/ai-integration.jpg",
	},
	{
		title: "Consultation & Project Strategy",
		description:
			"We partner with you to plan, architect, and execute your digital roadmap — aligning technology with business goals.",
		image: "/images/services/strategy.jpg",
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
