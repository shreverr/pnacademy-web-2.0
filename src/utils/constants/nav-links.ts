import { HandHeart, HelpCircleIcon, InfoIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, NotepadText, QrCodeIcon, Scale } from "lucide-react";

export const NAV_LINKS = [

    {
        title: "Services",
        href: "/services",
        menu: [
            {
                title: "Assessments For Schools",
                tagline: "Modernize school assessments with intuitive tools, robust proctoring, customizable reports, and user-friendly management.",
                href: "/services/assessments-for-schools",
                icon: Link2Icon,
            },
            {
                title: "University Exam Management",
                tagline: "Optimize university exams with advanced exam creation, rigorous proctoring, insightful evaluation tools, and seamless integration.",
                href: "/services/university-exam-management",
                icon: LockIcon,
            },
            {
                title: "Educational Institutions",
                tagline: "Support educational institutions with tailored assessments, secure proctoring, detailed analytics, and efficient management.",
                href: "/services/educational-institutions",
                icon: LineChartIcon,
            },
            {
                title: "Entrance Exam Management",
                tagline: "Enhance corporate training assessments with user-friendly tools, robust proctoring, insightful analytics, and efficient management.",
                href: "/services/entrance-exam-management",
                icon: QrCodeIcon,
            },
            {
                title: "Assessment for Corporate",
                tagline: "Simplify entrance exams with customizable tests, stringent proctoring, in-depth evaluation, and effective management features.",
                href: "/services/assessment-for-corporate",
                icon: QrCodeIcon,
            },
            {
                title: "Aptitude for Recruitment",
                tagline: "Our aptitude tests streamline recruitment with advanced test creation, AI-powered proctoring, and detailed evaluation.",
                href: "/services/aptitude-for-recruitment",
                icon: QrCodeIcon,
            },
        ],
    },
    {
        title: "Features",
        href: "/features",
    },
    {
        title: "Clients",
        href: "/clients",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "What we Offer",
                tagline: "Learn more about our services and how we can help you.",
                href: "/resources/what-we-offer",
                icon: HandHeart,
            },
            {
                title: "About PNAcademy",
                tagline: "Learn more about PNAcademy and our mission.",
                href: "/resources/about",
                icon: InfoIcon,
            },
            {
                title: "Terms & Conditions",
                tagline: "Read our terms and conditions.",
                href: "/resources/terms-and-conditions",
                icon: NotepadText,
            },
            {
                title: "Privacy Policy",
                tagline: "Read our privacy policy.",
                href: "/resources/privacy-and-policy",
                icon: Scale,
            },
        ]
    },
];
