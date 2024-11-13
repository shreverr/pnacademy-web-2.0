import {
  BarChart3Icon,
  BellIcon,
  Book,
  CodeIcon,
  FolderOpenIcon,
  LayoutDashboardIcon,
  LockIcon,
  PaletteIcon,
  PuzzleIcon,
  ShieldIcon,
  SparklesIcon,
  WandSparklesIcon,
} from "lucide-react";

export const COMPANIES = [
  {
      name: "Asana",
      logo: "/assets/company-01.svg",
  },
  {
      name: "Tidal",
      logo: "/assets/company-02.svg",
  },
  {
      name: "Innovaccer",
      logo: "/assets/company-03.svg",
  },
  {
      name: "Linear",
      logo: "/assets/company-04.svg",
  },
  {
      name: "Raycast",
      logo: "/assets/company-05.svg",
  },
  {
      name: "Labelbox",
      logo: "/assets/company-06.svg",
  }
] as const;

export const DEFAULT_AVATAR_URL =
  "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;
export const PROCESS = [
  {
    title: "Smart Access Control",
    description:
      "Role-based permissions and user access management for secure, organized assessments and content.",
    icon: ShieldIcon,
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Intelligent test generation, automated grading, and personalized learning recommendations.",
    icon: SparklesIcon,
  },
  {
    title: "Advanced Analytics",
    description:
      "Comprehensive reports and insights for tracking student progress, performance metrics, and learning patterns.",
    icon: BarChart3Icon,
  },
  {
    title: "Real-time Notifications",
    description:
      "Stay updated with instant alerts for submissions, feedback, deadlines, and important announcements.",
    icon: BellIcon,
  },
  {
    title: "Modern Code Editor",
    description:
      "Feature-rich coding environment with syntax highlighting, auto-completion, and multiple language support.",
    icon: CodeIcon,
  },
  {
    title: "Customizable Experience",
    description:
      "Personalize your workspace with multiple themes and adjustable layouts for optimal productivity.",
    icon: PaletteIcon,
  },
  {
    title: "Intuitive Interface",
    description:
      "Seamless navigation and user-friendly design for an effortless assessment experience.",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect with popular learning management systems and third-party apps for a streamlined workflow.",
    icon: PuzzleIcon,
  },
  {
    title: "Secure Data Storage",
    description:
      "End-to-end encryption and compliant data storage to ensure the safety and privacy of user information.",
    icon: LockIcon,
  },

] as const;

export const FEATURES = [
  {
    title: "Link shortening",
    description: "Create short links that are easy to remember and share.",
  },
  {
    title: "Advanced analytics",
    description: "Track and measure the performance of your links.",
  },
  {
    title: "Password protection",
    description: "Secure your links with a password.",
  },
  {
    title: "Custom QR codes",
    description: "Generate custom QR codes for your links.",
  },
  {
    title: "Link expiration",
    description: "Set an expiration date for your links.",
  },
  {
    title: "Team collaboration",
    description: "Share links with your team and collaborate in real-time.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Rajesh Sharma",
    username: "@rajeshsharma",
    avatar: "/api/placeholder/48/48",
    rating: 5,
    review: "Excellent platform for our coaching institute! The detailed analytics help us understand each student's progress. The automated evaluation saves hours of our staff's time.",
    role: "Coaching Institute Director",
    location: "Delhi"
  },
  {
    name: "Priya Patel",
    username: "@priyapatel",
    avatar: "/api/placeholder/48/48",
    rating: 4,
    review: "We use this for our school's internal assessments and competitive exam preparation. Students particularly love the instant results and performance insights. Would recommend adding more NCERT-aligned content.",
    role: "School Principal",
    location: "Mumbai"
  },
  {
    name: "Amit Verma",
    username: "@amitverma",
    avatar: "/api/placeholder/48/48",
    rating: 5,
    review: "Our IIT-JEE coaching center has seen a 30% improvement in student performance after using this platform. The question bank quality is excellent and analytics are comprehensive.",
    role: "JEE Prep Mentor",
    location: "Kota"
  },
  {
    name: "Deepika Reddy",
    username: "@deepikareddy",
    avatar: "/api/placeholder/48/48",
    rating: 4,
    review: "Perfect for conducting monthly tests and tracking student progress. The group-wise analysis helps us identify weak areas quickly. Parents really appreciate the detailed reports.",
    role: "Academic Coordinator",
    location: "Hyderabad"
  },
  {
    name: "Sunil Kumar",
    username: "@sunilkumar",
    avatar: "/api/placeholder/48/48",
    rating: 5,
    review: "Using this for our NEET preparation batches. The subject-wise analysis and performance tracking features are outstanding. Students can now focus on their weak areas effectively.",
    role: "Medical Entrance Coach",
    location: "Chennai"
  },
  {
    name: "Meera Iyer",
    username: "@meeraiyer",
    avatar: "/api/placeholder/48/48",
    rating: 4,
    review: "Great platform for conducting unit tests and term exams. The question paper generation tool saves a lot of time. Would love to see more state board aligned content.",
    role: "Vice Principal",
    location: "Bangalore"
  },
  {
    name: "Arjun Singh",
    username: "@arjunsingh",
    avatar: "/api/placeholder/48/48",
    rating: 5,
    review: "As a tuition teacher, this platform helps me track individual student progress effectively. The performance comparisons and improvement graphs are very useful for parent meetings.",
    role: "Private Tutor",
    location: "Pune"
  },
  {
    name: "Kavita Desai",
    username: "@kavitadesai",
    avatar: "/api/placeholder/48/48",
    rating: 4,
    review: "We conduct all our scholarship tests through this platform now. The anti-cheating features and detailed reports have made assessment management much easier.",
    role: "Education Trust Manager",
    location: "Ahmedabad"
  },
  {
    name: "Mohammad Hussain",
    username: "@mohammadhussain",
    avatar: "/api/placeholder/48/48",
    rating: 5,
    review: "Our coaching classes have grown significantly after implementing this assessment system. Parents love the transparency and students benefit from the instant feedback.",
    role: "Coaching Center Owner",
    location: "Lucknow"
  }
] as const;