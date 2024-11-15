import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Privacy Policy
        </h1>
        <p className="text-sm mb-2 italic mt-20">
          Last updated: 15th November 2024
        </p>
        <p className="mt-4">
          At <strong>PNAcademy</strong>, we understand the critical importance
          of protecting sensitive assessment data. This Privacy Policy explains
          how we collect, use, protect, and manage information when educational
          institutions, schools, colleges, and corporate organizations use our
          secure assessment platform.
        </p>

        <h2 className="text-xl font-medium mt-8">Information We Collect</h2>

        <h3 className="text-lg mt-4">Institution Information</h3>
        <p className="mt-8 text-muted-foreground">
          When institutions register for our platform, we collect organizational
          information including institution name, type, address, administrator
          contact details, and billing information.
        </p>

        <h3 className="text-lg font-medium mt-12">
          Assessment Participant Data
        </h3>
        <p className="mt-8 text-muted-foreground">
          For assessment participants (students/candidates), we collect:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Basic identification details (name, ID number, email)</li>
          <li>Assessment responses and submissions</li>
          <li>Performance data and results</li>
          <li>Time logs and assessment session data</li>
        </ul>

        <h3 className="text-lg font-medium mt-8">
          Technical and Security Data
        </h3>
        <p className="mt-8">To maintain assessment integrity, we collect:</p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Device information and browser details</li>
          <li>IP addresses and location data</li>
          <li>Screen recording data during proctored assessments</li>
          <li>Browser activity logs during assessment sessions</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">
          How We Use Your Information
        </h2>

        <h3 className="text-lg mt-8">Assessment Administration</h3>
        <p className="mt-8">We use the collected information to:</p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Facilitate secure online assessments</li>
          <li>Prevent and detect academic misconduct</li>
          <li>Generate assessment reports and analytics</li>
          <li>Provide technical support during assessments</li>
        </ul>

        <h3 className="text-lg mt-8">Platform Enhancement</h3>
        <p className="mt-8">We analyze platform usage to:</p>
        <ul className="list-disc text-muted-foreground ml-8">
          <li>Improve assessment delivery and security</li>
          <li>
            Enhance the user experience for administrators and participants
          </li>
          <li>Develop new assessment features and tools</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">Data Security Measures</h2>
        <p className="mt-8 text-muted-foreground">
          We implement robust security measures including:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>End-to-end encryption of assessment data</li>
          <li>Secure data centers with regular backups</li>
          <li>Multi-factor authentication</li>
          <li>Regular security audits and penetration testing</li>
          <li>Advanced proctoring technology</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">Data Sharing and Access</h2>

        <h3 className="text-lg mt-8">Institutional Access</h3>
        <p className="mt-8 text-muted-foreground">
          Assessment data is accessible only to authorized institutional
          administrators and designated faculty members based on defined access
          roles.
        </p>

        <h3 className="text-lg mt-8">Third-Party Service Providers</h3>
        <p className="mt-8 text-muted-foreground">
          We may engage trusted third-party services for:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Remote proctoring services</li>
          <li>Cloud infrastructure and hosting</li>
          <li>Analytics and reporting tools</li>
          <li>Payment processing</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">Data Retention</h2>
        <p className="mt-8 text-muted-foreground">
          We retain assessment data and results as per institutional
          requirements and applicable educational regulations. Standard
          retention periods are:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>
            Active assessment data: Throughout the institutional contract period
          </li>
          <li>Completed assessment records: 2 years post-completion</li>
          <li>Proctoring recordings: 6 months post-assessment</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">Institutional Rights</h2>
        <p className="mt-8 text-muted-foreground">
          Institutions have the right to:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Request exports of their assessment data</li>
          <li>Modify their data retention periods</li>
          <li>Update institutional administrator access</li>
          <li>Request deletion of historical assessment data</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">Compliance</h2>
        <p className="mt-8 text-muted-foreground">
          PNAcademy complies with educational data protection regulations
          including:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>GDPR for European institutions</li>
          <li>FERPA for US educational institutions</li>
          <li>Local educational data protection laws</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">Contact Us</h2>
        <p className="mt-8 text-muted-foreground">
          For privacy-related inquiries or concerns, contact our Data Protection
          Team:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Email: info@pnacademy.in</li>
          <li>Phone: +91 7903308258</li>
          <li>Phone: +91 7004190224</li>
          <li>Address: Jamui bihar</li>
        </ul>

        <p className="mt-12 font-medium">
          By using PNAcademy &lsquo; s assessment platform, institutions
          acknowledge their agreement to this Privacy Policy and their
          responsibility to inform assessment participants about these data
          practices.
        </p>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default PrivacyAndPolicy;
