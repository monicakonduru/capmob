"use client";

import Link from "next/link";
import { useEffect } from "react";

const TOC_ITEMS = [
  { id: "intro", label: "Introduction" },
  { id: "collect", label: "Data We Collect" },
  { id: "use", label: "How We Use It" },
  { id: "sharing", label: "Data Sharing" },
  { id: "lenders", label: "Lender Disclosure" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "security", label: "Security" },
  { id: "cookies", label: "Cookies" },
  { id: "contact", label: "Contact Us" },
] as const;

export default function PrivacyPolicy() {
  useEffect(() => {
    const sections = document.querySelectorAll(".legal-prose h2[id]");
    const links = document.querySelectorAll(".toc-list a");
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => link.classList.remove("active"));
          const active = document.querySelector(
            `.toc-list a[href="#${entry.target.id}"]`
          );
          active?.classList.add("active");
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="hero-bg-grid" aria-hidden />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> › Privacy Policy
          </div>
          <h1 className="page-title">
            Privacy <em>Policy.</em>
          </h1>
          <div className="page-meta">
            Last updated: January 2026 · Effective: January 1, 2026
          </div>
        </div>
      </div>

      <div className="content-wrap">
        <aside className="toc">
          <div className="toc-title">Contents</div>
          <ul className="toc-list">
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="legal-prose">
          <h2 id="intro">Introduction</h2>
          <div className="highlight-box">
            <p>
              Capmob is your data&apos;s defense. We built this platform on a single
              principle:{" "}
              <strong>
                your information is never shared with any lender until you explicitly
                choose to proceed.
              </strong>{" "}
              This policy explains exactly how we handle your data.
            </p>
          </div>
          <p>
            Capmob Financial Intelligence Systems LLC (&quot;Capmob&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal and
            business information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard information when you use our platform at capmob.ae,
            our PACMOB WhatsApp service, our CapScore™ and CapReport™ products, and any
            related services.
          </p>
          <p>
            By accessing or using our services, you agree to the terms of this Privacy
            Policy. If you do not agree, please discontinue use of our services.
          </p>
          <div className="divider" />

          <h2 id="collect">Data We Collect</h2>
          <h3>Business Information</h3>
          <p>
            To assess your funding eligibility, we collect information about your
            business including: business type and industry sector, years in operation
            (business vintage), approximate annual revenue and revenue consistency, trade
            license details and registration information, and banking behaviour indicators
            you voluntarily share.
          </p>
          <h3>Financial Information</h3>
          <p>
            We may collect financial data including: cash flow indicators and debt service
            capacity, existing credit facilities and outstanding obligations, receivables
            and asset information relevant to financing structures, and AECB credit score
            context (we do not pull your credit score without consent).
          </p>
          <h3>Contact Information</h3>
          <p>
            Name, email address, phone number or WhatsApp number, and company name —
            collected only when you choose to receive a CapScore, CapReport, or lender
            match results.
          </p>
          <h3>Usage Data</h3>
          <p>
            We automatically collect certain technical data: IP address, browser type,
            pages visited, time spent on pages, and referral source. This data is used
            solely for service improvement and security purposes.
          </p>
          <div className="divider" />

          <h2 id="use">How We Use Your Information</h2>
          <p>We use collected information strictly for the following purposes:</p>
          <ul>
            <li>
              <strong>Eligibility Assessment:</strong> Scoring your profile against the 5
              lender criteria to determine your CapScore and funding readiness.
            </li>
            <li>
              <strong>Lender Matching:</strong> Identifying which institutions in our 40+
              network are most likely to approve your structure — before any contact is
              made.
            </li>
            <li>
              <strong>CapReport Generation:</strong> Creating a lender-ready financial
              profile formatted for credit committee review.
            </li>
            <li>
              <strong>PACMOB Service:</strong> Powering our WhatsApp AI assistant to answer
              your funding questions in context.
            </li>
            <li>
              <strong>Communication:</strong> Sending your results, offer summaries, and
              service updates via email or WhatsApp.
            </li>
            <li>
              <strong>Service Improvement:</strong> Analysing aggregate, anonymised usage
              patterns to improve our platform.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> use your information for advertising, profiling
            for third-party marketing, or any purpose beyond delivering the Capmob service.
          </p>
          <div className="divider" />

          <h2 id="sharing">Data Sharing</h2>
          <p>
            Capmob does not sell, rent, or trade your personal or business information to
            any third party. Period.
          </p>
          <p>
            We may share limited information with the following categories of parties, only
            as necessary to deliver our service:
          </p>
          <ul>
            <li>
              <strong>Technology Service Providers:</strong> Cloud infrastructure, data
              processing, and communication tools used to operate our platform. All are
              bound by strict data processing agreements.
            </li>
            <li>
              <strong>Legal Compliance:</strong> Where required by UAE law, regulation, or
              valid legal process from a competent authority.
            </li>
            <li>
              <strong>Lenders:</strong> Only after you have reviewed your structured offers
              and <em>explicitly chosen</em> to proceed with a specific institution. See
              section below.
            </li>
          </ul>
          <div className="divider" />

          <h2 id="lenders">Lender Disclosure Policy</h2>
          <div className="highlight-box">
            <p>
              <strong>Zero lender contact without your explicit consent.</strong> Your name
              and company details are never shared with any lender during the pre-check,
              assessment, or offer presentation stages. You remain completely anonymous
              until you choose to proceed.
            </p>
          </div>
          <p>
            When you select an offer and choose to proceed, we share only the information
            necessary to advance your application with the chosen lender. We will notify
            you of exactly what information will be shared before any disclosure occurs. You
            may withdraw consent at any point before funds are disbursed.
          </p>
          <p>
            Our 0-contact policy is a core product commitment, not just a legal position.
            Lenders in our network are contractually prohibited from contacting you based
            on information received through Capmob unless you have actively chosen their
            offer.
          </p>
          <div className="divider" />

          <h2 id="retention">Data Retention</h2>
          <p>
            We retain your data for as long as necessary to deliver our services and comply
            with applicable UAE legal obligations. Specifically:
          </p>
          <ul>
            <li>
              <strong>Pre-check data (no deal proceeded):</strong> Anonymised after 12
              months, deleted after 24 months.
            </li>
            <li>
              <strong>Active deal data:</strong> Retained for the duration of your facility
              plus 7 years, as required by UAE financial regulations.
            </li>
            <li>
              <strong>PACMOB conversation history:</strong> Retained for 90 days to maintain
              context, then purged.
            </li>
            <li>
              <strong>Marketing communications:</strong> Until you unsubscribe or request
              deletion.
            </li>
          </ul>
          <p>
            You may request early deletion of your data at any time (see Your Rights below),
            subject to our legal retention obligations.
          </p>
          <div className="divider" />

          <h2 id="rights">Your Rights</h2>
          <p>
            Under applicable UAE data protection regulations and international standards we
            adhere to, you have the following rights:
          </p>
          <ul>
            <li>
              <strong>Right to Access:</strong> Request a copy of all personal and business
              data we hold about you.
            </li>
            <li>
              <strong>Right to Correction:</strong> Request correction of any inaccurate
              information.
            </li>
            <li>
              <strong>Right to Deletion:</strong> Request deletion of your data, subject to
              legal retention requirements.
            </li>
            <li>
              <strong>Right to Portability:</strong> Request your data in a structured,
              machine-readable format.
            </li>
            <li>
              <strong>Right to Object:</strong> Object to specific uses of your data,
              including any analytics processing.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> Withdraw consent at any point,
              including stopping lender disclosure before funds are disbursed.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@capmob.ae">privacy@capmob.ae</a>. We will respond within
            30 days.
          </p>
          <div className="divider" />

          <h2 id="security">Security</h2>
          <p>
            We implement industry-standard security measures to protect your information
            including: end-to-end encryption for all data transmission, AES-256 encryption
            for data at rest, multi-factor authentication for all internal systems, regular
            third-party security audits, and strict role-based access controls — only Capmob
            advisors directly working on your case can access your information.
          </p>
          <p>
            While we take every reasonable precaution, no digital system is 100% secure. If
            you become aware of any security concern, please contact us immediately at{" "}
            <a href="mailto:security@capmob.ae">security@capmob.ae</a>.
          </p>
          <div className="divider" />

          <h2 id="cookies">Cookies &amp; Tracking</h2>
          <p>
            Our website uses minimal, privacy-respecting cookies. We use{" "}
            <strong>essential cookies</strong> (required for the site to function),{" "}
            <strong>analytics cookies</strong> (anonymised usage data to improve the
            service), and <strong>no advertising or cross-site tracking cookies</strong>.
          </p>
          <p>
            You can manage cookie preferences through your browser settings. Disabling
            essential cookies may affect service functionality.
          </p>
          <div className="divider" />

          <h2 id="contact">Contact Us</h2>
          <p>For any privacy-related questions, requests, or concerns, please contact:</p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@capmob.ae">privacy@capmob.ae</a>
            </li>
            <li>
              <strong>WhatsApp:</strong> <a href="#">Message PACMOB</a>
            </li>
            <li>
              <strong>Address:</strong> Capmob Financial Intelligence Systems LLC, Dubai, UAE
            </li>
          </ul>
          <p>
            We take privacy concerns seriously and commit to responding within 5 business
            days for urgent matters and 30 days for all other requests.
          </p>
        </div>
      </div>
    </>
  );
}
