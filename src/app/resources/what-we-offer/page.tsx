import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from "react";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Shield,
  Code,
  Building2,
  GanttChart,
  Award,
  BadgeCheck,
  Brain,
  Globe,
  Target,
  Users,
  BookMarked,
  Database,
  Cloud,
  Lock,
  Network,
  Cpu,
  BarChart,
  School,
} from "lucide-react";

const WhatWeOffer = () => {
  const mainCategories = [
    {
      title: "Defense Services Exams",
      icon: <Shield className="w-8 h-8 mb-4 text-blue-500" />,
      description:
        "Comprehensive preparation for defense and paramilitary services",
      subcategories: [
        {
          title: "Army Recruitment",
          items: [
            "Army GD Soldier Exam",
            "Army Clerk Exam",
            "Technical Entry Scheme",
            "IMA Exam (CDS/NDA)",
            "Agniveer Recruitment",
          ],
        },
        {
          title: "Air Force & Navy",
          items: [
            "IAF Group X & Y",
            "AFCAT",
            "Navy SSR Exam",
            "Navy MR Exam",
            "NDA Entry",
          ],
        },
      ],
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-800/30",
    },
    {
      title: "Professional Entrance Exams",
      icon: <GraduationCap className="w-8 h-8 mb-4 text-green-500" />,
      description: "Entrance exams for top professional courses",
      subcategories: [
        {
          title: "Engineering Exams",
          items: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE"],
        },
        {
          title: "Medical & Law Exams",
          items: ["NEET UG/PG", "AIIMS Exam", "CLAT", "LSAT India", "AILET"],
        },
      ],
      bgColor: "bg-green-900/20",
      borderColor: "border-green-800/30",
    },
    {
      title: "Government Services",
      icon: <Award className="w-8 h-8 mb-4 text-purple-500" />,
      description: "Exams for prestigious government positions",
      subcategories: [
        {
          title: "UPSC & Central Exams",
          items: [
            "Civil Services (IAS/IPS)",
            "CDS",
            "Engineering Services",
            "NDA",
            "Indian Economic Service",
          ],
        },
        {
          title: "SSC & Banking",
          items: ["CGL", "CHSL", "IBPS PO", "SBI PO", "RBI Assistant"],
        },
      ],
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-800/30",
    },
    {
      title: "IT & Technical Certifications",
      icon: <Code className="w-8 h-8 mb-4 text-red-500" />,
      description: "Professional IT and technical certification programs",
      subcategories: [
        {
          title: "Cloud & Programming",
          items: [
            "AWS Solutions Architect",
            "Azure Developer",
            "Google Cloud",
            "Kubernetes",
            "Red Hat Certification",
          ],
        },
        {
          title: "Cybersecurity & Data Science",
          items: [
            "Ethical Hacker (CEH)",
            "CISSP",
            "Data Science Professional",
            "AI Specialist",
            "Machine Learning Certification",
          ],
        },
      ],
      bgColor: "bg-red-900/20",
      borderColor: "border-red-800/30",
    },
  ];
  const itCertifications = [
    {
      category: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      certifications: [
        "AWS Solutions Architect",
        "Google Cloud Professional",
        "Azure Administrator",
        "Oracle Cloud Infrastructure",
        "IBM Cloud Certified",
        "Google Associate Cloud Engineer",
      ],
      color: "text-blue-400",
    },
    {
      category: "Cybersecurity",
      icon: <Lock className="w-6 h-6" />,
      certifications: [
        "Certified Ethical Hacker (CEH)",
        "CISSP",
        "CompTIA Security+",
        "CISM",
        "Cisco Certified CyberOps Associate",
        "OSCP (Offensive Security)",
      ],
      color: "text-red-400",
    },
    {
      category: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      certifications: [
        "Oracle Certified Java Programmer",
        "Microsoft Azure Developer Associate",
        "Certified Kubernetes Administrator",
        "Red Hat Certified Engineer",
      ],
      color: "text-green-400",
    },
    {
      category: "Data Science & AI",
      icon: <Database className="w-6 h-6" />,
      certifications: [
        "IBM Data Science Professional",
        "Google Data Analytics Professional",
        "Microsoft Certified: Data Analyst",
        "TensorFlow Developer Certificate",
      ],
      color: "text-purple-400",
    },
  ];
  const studyResources = [
    {
      title: "Previous Year Papers",
      icon: <BookMarked className="w-6 h-6" />,
      features: [
        "10+ Years of Authentic Papers",
        "Exam-Specific Question Sets",
        "Detailed Solution Explanations",
        "Trend Analysis of Exam Patterns",
        "Difficulty Level Categorization",
      ],
      color: "text-blue-400",
      description:
        "Comprehensive collection of previous year question papers across multiple competitive exams",
    },
    {
      title: "Comprehensive Study Materials",
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        "Detailed Exam Syllabus Coverage",
        "Topic-Wise Comprehensive Notes",
        "50,000+ Practice Questions",
        "MCQ and Descriptive Question Bank",
      ],
      color: "text-green-400",
      description:
        "Meticulously crafted study materials for government and competitive exams",
    },
    {
      title: "Competitive Exam Mock Tests",
      icon: <BarChart className="w-6 h-6" />,
      features: [
        "Full-Length Practice Exams",
        "Exam Pattern Simulation",
        "Performance Analytics",
        "Adaptive Testing Technology",
        "Instant Result Evaluation",
      ],
      color: "text-purple-400",
      description:
        "Advanced mock test series for comprehensive exam preparation",
    },
    {
      title: "PSU & IT Certification Prep",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Public Sector Enterprise Exam Prep",
        "IT Certification Study Materials",
        "Technical Skill Development",
        "Industry-Specific Question Sets",
        "Latest Exam Trend Analysis",
      ],
      color: "text-red-400",
      description:
        "Specialized preparation for PSU recruitment and IT professional certifications",
    },
  ];

  return (
    <MaxWidthWrapper className="mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
          <h1 className="text-4xl md:text-6xl font-heading font-bold my-8 relative">
            Comprehensive Exam Preparation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto relative">
            Your gateway to success in competitive examinations with expert
            guidance, comprehensive study materials, and structured learning
            paths
          </p>
        </div>

        {/* Main Categories Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Examination Categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainCategories.map((category, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${category.bgColor} ${category.borderColor} border hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.subcategories.map((sub, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-medium text-lg">{sub.title}</h4>
                      <ul className="space-y-1">
                        {sub.items.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue with Part 2... */}

        {/* IT Certifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional IT Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itCertifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className={`${cert.color} mb-4`}>{cert.icon}</div>
                <h3 className="text-lg font-semibold mb-4">{cert.category}</h3>
                <ul className="space-y-2">
                  {cert.certifications.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Study Resources Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Study Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyResources.map((resource, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-gray-800 mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">
                    {resource.title}
                  </h3>
                  <ul className="space-y-2">
                    {resource.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Exam Preparation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-800 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-blue-500" />
                Exam Strategy Mastery
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Target className="w-4 h-4 mr-2" />
                  Comprehensive Exam Pattern Analysis
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Brain className="w-4 h-4 mr-2" />
                  Strategic Preparation Techniques
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <BarChart className="w-4 h-4 mr-2" />
                  Performance Optimization Strategies
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Previous Year Paper Insights
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-gray-800 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-purple-500" />
                Extensive Question Bank
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Code className="w-4 h-4 mr-2" />
                  50,000+ Practice Questions
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Award className="w-4 h-4 mr-2" />
                  Categorized by Exam Type
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Difficulty Level Progression
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Cloud className="w-4 h-4 mr-2" />
                  Updated Regularly
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-gray-800 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-red-500" />
                Comprehensive Exam Coverage
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-muted-foreground">
                  <GanttChart className="w-4 h-4 mr-2" />
                  100+ Exam Categories
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <BookMarked className="w-4 h-4 mr-2" />
                  10+ Years of Previous Papers
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  Government & Professional Exams
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4 mr-2" />
                  PSU & Competitive Exam Preparation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "100+",
                label: "Exam Categories",
                description:
                  "Comprehensive coverage of government, professional, and competitive exams",
              },
              {
                number: "50,000+",
                label: "Practice Questions",
                description:
                  "Extensive question bank across multiple subjects and exam patterns",
              },
              {
                number: "10+",
                label: "Years of Previous Papers",
                description:
                  "Authentic previous year question papers for comprehensive preparation",
              },
              {
                number: "500+",
                label: "Exam Preparation Resources",
                description:
                  "Detailed study materials, mock tests, and strategic guidance",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <h3 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  {stat.number}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border border-gray-800">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of successful candidates who achieved their dreams
              with our guidance
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold">
              Get Started Today
            </button>
          </div>
        </section>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default WhatWeOffer;
