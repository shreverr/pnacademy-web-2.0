import React from "react";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Image from "next/image";
import { Globe, Users, Lightbulb, Shield } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  // Core Values
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Integrity",
      description:
        "Maintaining the highest standards of ethical conduct and transparency in all our operations.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Innovation",
      description:
        "Continuously pushing boundaries and developing cutting-edge assessment technologies.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Client-Centric",
      description:
        "Prioritizing our clients' success and providing personalized, responsive support.",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Global Standards",
      description:
        "Adhering to international best practices in assessment and educational technology.",
    },
  ];

  // Team Achievements
  const achievements = [
    {
      number: "50K+",
      label: "Assessments Conducted",
    },
    {
      number: "200+",
      label: "Institutional Clients",
    },
    {
      number: "99.9%",
      label: "Platform Reliability",
    },
    {
      number: "24/7",
      label: "Technical Support",
    },
  ];

  // Gallery Images (replace with actual images)
  const galleryImages = [
    "/images/team1.png",
    "/images/team2.png",
    "/images/team3.png",
    "/images/team4.png",
    "/images/team5.png",
    "/images/team6.png",
  ];

  return (
    <MaxWidthWrapper className="mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20 mt-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Education with Innovative Assessment Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              At PNAcademy, we are dedicated to revolutionizing the assessment
              process with cutting-edge technology and innovative solutions. Our
              mission is to provide educational institutions and corporations
              with the tools they need to create, distribute, and evaluate
              assessments efficiently and securely. With a focus on
              user-friendly design and advanced AI capabilities, we ensure a
              seamless and effective assessment experience for all our clients.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Learn More
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex-col-reverse items-center justify-center md:flex md:flex-row md:justify-end w-full">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/founder.png"
                alt="PNAcademy Team"
                width={300}
                height={500}
                className="rounded-xl shadow-2xl"
              />
              <p>Neeraj Kumar</p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="max-w-4xl mx-auto text-lg text-muted-foreground">
            At PNAcademy, we revolutionize the assessment process with
            cutting-edge technology and innovative solutions. Our mission is to
            provide educational institutions and corporations with efficient,
            secure, and user-friendly assessment tools. By leveraging advanced
            AI capabilities, we ensure a seamless and effective experience for
            all our clients.
          </p>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:scale-105 transition-all"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20 bg-gray-900/50 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-blue-500 mb-2">
                  {achievement.number}
                </h3>
                <p className="text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl hover:scale-105 transition-all"
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border border-gray-800 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Assessment Process?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Join hundreds of institutions leveraging our innovative assessment
            solutions to create more effective, secure, and insightful
            evaluations.
          </p>
          <Link
            href="/get-quote"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </section>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default AboutPage;
