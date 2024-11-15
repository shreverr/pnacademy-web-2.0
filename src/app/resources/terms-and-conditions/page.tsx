import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from "react";

const TermsAndConditions = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Terms and Conditions
        </h1>
        <p className="text-sm mb-2 italic mt-20">
          Last updated: 15th November 2024
        </p>
        <p className="mt-4">
          Welcome to <strong>PNAcademy</strong>. These Terms and Conditions
          govern your use of our secure assessment platform and services. By
          accessing or using our platform, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-medium mt-12">1. Definitions</h2>
        <p className="mt-8 text-muted-foreground">
          In these Terms and Conditions:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>
            &quot; Platform &quot; refers to PNAcademy &apos; s assessment
            platform
          </li>
          <li>
            &quot; Institution &quot; refers to educational institutions,
            schools, colleges, or organizations using our services
          </li>
          <li>
            &quot; Users &quot; includes administrators, faculty, and assessment
            participants
          </li>
          <li>
            &quot; Services &quot; refers to all features and functionalities
            provided by PNAcademy
          </li>
        </ul>

        <h2 className="text-xl font-medium mt-12">2. Account Registration</h2>
        <p className="mt-8 text-muted-foreground">Institutions must:</p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Provide accurate and complete registration information</li>
          <li>Maintain the security of account credentials</li>
          <li>Promptly update any changes to institution information</li>
          <li>Accept responsibility for all activities under their account</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">3. Platform Usage</h2>

        <h3 className="text-lg mt-8">3.1 Permitted Use</h3>
        <p className="mt-8 text-muted-foreground">
          Institutions are authorized to:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Create and conduct online assessments</li>
          <li>Manage assessment participants</li>
          <li>Access assessment data and analytics</li>
          <li>Utilize provided administrative tools</li>
        </ul>

        <h3 className="text-lg mt-8">3.2 Prohibited Activities</h3>
        <p className="mt-8 text-muted-foreground">Users must not:</p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Share access credentials</li>
          <li>Attempt to breach platform security</li>
          <li>Upload malicious content</li>
          <li>Interfere with platform functionality</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">4. Payment Terms</h2>
        <p className="mt-8 text-muted-foreground">
          Payment obligations include:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Timely payment of subscription fees</li>
          <li>Additional charges for premium features</li>
          <li>Processing fees where applicable</li>
          <li>Payment for any agreed custom development</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">5. Intellectual Property</h2>
        <p className="mt-8 text-muted-foreground">Rights and ownership:</p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Platform and software rights remain with PNAcademy</li>
          <li>Assessment content rights remain with institutions</li>
          <li>Limited license granted for platform use</li>
          <li>No unauthorized reproduction or distribution</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">6. Data Protection</h2>
        <p className="mt-8 text-muted-foreground">
          Our commitment to data protection includes:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Implementation of security measures</li>
          <li>Regular security updates and maintenance</li>
          <li>Data backup and recovery procedures</li>
          <li>Compliance with data protection regulations</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">7. Service Availability</h2>
        <p className="mt-8 text-muted-foreground">PNAcademy strives to:</p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Maintain 99.9% platform uptime</li>
          <li>Provide advance notice of maintenance</li>
          <li>Minimize service disruptions</li>
          <li>Offer technical support during service hours</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">8. Liability</h2>
        <p className="mt-8 text-muted-foreground">Limitations of liability:</p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Service provided as is</li>
          <li>No guarantee of uninterrupted service</li>
          <li>Limited liability for data loss</li>
          <li>Force majeure conditions</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">9. Termination</h2>
        <p className="mt-8 text-muted-foreground">
          Terms for service termination:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>30-day notice period required</li>
          <li>Data export options before termination</li>
          <li>Refund policies for prepaid services</li>
          <li>Post-termination data retention period</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">10. Changes to Terms</h2>
        <p className="mt-8 text-muted-foreground">
          PNAcademy reserves the right to:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Modify these terms at any time</li>
          <li>Notify users of significant changes</li>
          <li>Require acceptance of updated terms</li>
          <li>Terminate service for non-acceptance</li>
        </ul>

        <h2 className="text-xl font-medium mt-12">11. Contact Information</h2>
        <p className="mt-8 text-muted-foreground">
          For questions about these terms, contact us at:
        </p>
        <ul className="list-disc ml-8 mt-4 text-muted-foreground">
          <li>Email: info@pnacademy.in</li>
          <li>Phone: +91 7903308258</li>
          <li>Phone: +91 7004190224</li>
          <li>Address: Jamui bihar</li>
        </ul>

        <p className="mt-12 font-medium">
          By using PNAcadem &apos; s platform, you acknowledge that you have
          read, understood, and agree to be bound by these Terms and Conditions.
        </p>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default TermsAndConditions;
