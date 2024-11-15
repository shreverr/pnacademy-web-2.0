import { Clipboard, LucideIcon } from "lucide-react";
import {
  BarChart,
  BookOpen,
  Briefcase,
  GraduationCap,
  HandHeart,
  Info as InfoIcon,
  Scale,
  School,
  NotepadText
} from "lucide-react";

// Define the types for menu items and links
interface MenuItem {
  title: string;
  tagline: string;
  href: string;
  icon: LucideIcon;
}

interface NavLink {
  title: string;
  href: string;
  menu?: MenuItem[];
}
export const NAV_LINKS: NavLink[] = [
    {
      title: "Services",
      href: "/services",
      menu: [
        {
          title: "Assessments For Schools",
          tagline: "Modernize school assessments with intuitive tools, robust proctoring, customizable reports, and user-friendly management.",
          href: "/services/assessments-for-schools",
          icon: BookOpen,
        },
        {
          title: "University Exam Management",
          tagline: "Optimize university exams with advanced exam creation, rigorous proctoring, insightful evaluation tools, and seamless integration.",
          href: "/services/university-exam-management",
          icon: GraduationCap,
        },
        {
          title: "Educational Institutions",
          tagline: "Support educational institutions with tailored assessments, secure proctoring, detailed analytics, and efficient management.",
          href: "/services/educational-institutions",
          icon: School,
        },
        {
          title: "Entrance Exam Management",
          tagline: "Enhance corporate training assessments with user-friendly tools, robust proctoring, insightful analytics, and efficient management.",
          href: "/services/entrance-exam-management",
          icon: Clipboard,
        },
        {
          title: "Assessment for Corporate",
          tagline: "Simplify entrance exams with customizable tests, stringent proctoring, in-depth evaluation, and effective management features.",
          href: "/services/assessment-for-corporate",
          icon: BarChart,
        },
        {
          title: "Aptitude for Recruitment",
          tagline: "Our aptitude tests streamline recruitment with advanced test creation, AI-powered proctoring, and detailed evaluation.",
          href: "/services/aptitude-for-recruitment",
          icon: Briefcase,
        },
      ],
    },
    // {
    //   title: "Features",
    //   href: "/features",
    // },
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
