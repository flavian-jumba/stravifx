import type { Metadata } from "next";
import { LegalCallout, LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What StraviFX collects, how chart images are processed, who we share data with, and how to delete your account.",
  alternates: { canonical: "/privacy" },
};

const privacyMail = `mailto:${SITE.email.privacy}`;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="15 October 2026"
      intro={
        <p>
          This policy covers the StraviFX app on Android, iOS and the web, and
          this website.
        </p>
      }
    >
      <LegalSection id="introduction" title="1. Introduction">
        <p>
          Welcome to StraviFX (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;the App&rdquo;). StraviFX is an AI-powered financial charting
          application that provides AI-assisted technical analysis of trading
          charts for educational purposes only. This Privacy Policy explains
          what information we collect, how we use it, who we share it with, and
          the rights you have over your data when you use StraviFX on iOS,
          Android, or the web.
        </p>
        <p>
          By creating an account or using the App, you agree to the collection
          and use of information in accordance with this policy. If you do not
          agree, please discontinue use of the App and delete your account as
          described in <a href="#delete">Section 7</a>.
        </p>
      </LegalSection>

      <LegalSection id="collect" title="2. Information We Collect">
        <h3>2.1 Account Data</h3>
        <p>
          When you register, we collect your name and email address. If you
          sign in with Google Sign-In, we receive authentication tokens and
          basic profile information from your Google account solely to
          establish and secure your StraviFX session.
        </p>
        <h3>2.2 Trading Preferences</h3>
        <p>
          We store preferences you configure in the App, such as your default
          account equity and risk-per-trade percentages, in our database so
          that position-sizing calculations and analysis output are
          personalized to your settings across devices.
        </p>
        <h3>2.3 Device Data</h3>
        <p>
          We collect Firebase Cloud Messaging (FCM) device tokens to deliver
          push notifications you have opted into (for example, alerts when an
          analysis completes), along with basic platform metadata such as your
          operating system (iOS, Android, or web) and app version.
        </p>
        <h3>2.4 User-Generated Content</h3>
        <p>
          StraviFX&rsquo;s core feature is chart analysis. When you upload a
          trading chart screenshot, that image is stored and processed as
          described in <a href="#processing">Section 3</a>. You retain
          ownership of the content you upload.
        </p>
        <h3>2.5 StraviFX Learn Waitlist (this website)</h3>
        <p>
          If you join the StraviFX Learn waitlist on this website, we collect
          your name and email address to reserve your seat and contact you
          about the cohort. Payment is handled by Paystack on its own secure
          checkout page; we never see or store your card or mobile-money
          details. Paystack tells us whether the payment succeeded, along with
          a payment reference. Waitlist records are stored with our database
          provider, Supabase.
        </p>
      </LegalSection>

      <LegalSection id="processing" title="3. How We Process Your Data">
        <p>
          When you submit a chart for analysis, the image is securely
          transmitted over an encrypted connection to Google&rsquo;s Gemini AI
          API for the sole purpose of generating technical analysis and
          candidate trade setups (such as trend structure, support and
          resistance zones, and risk parameters).
        </p>
        <p>
          StraviFX does not use your uploaded chart images to train, fine-tune,
          or improve any internal machine-learning models. Processing by the
          Gemini API is governed by Google&rsquo;s own API terms and privacy
          policies, including its data retention practices; we encourage you
          to review{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&rsquo;s Privacy Policy
          </a>{" "}
          for details on how Google handles API data.
        </p>
        <p>
          Beyond AI processing, we use your data to: operate and secure your
          account, personalize calculations to your stated risk preferences,
          deliver notifications you request, and diagnose technical issues. We
          do not sell your personal data to anyone.
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="4. Third-Party Service Providers">
        <p>
          StraviFX relies on the following categories of infrastructure
          partners to operate:
        </p>
        <ul>
          <li>
            <strong>Google Firebase:</strong> Authentication, Cloud Firestore,
            Cloud Storage, and Cloud Functions provide our backend
            infrastructure, secure sign-in, and data storage.
          </li>
          <li>
            <strong>Google Gemini:</strong> provides AI vision processing of
            chart screenshots, as described in Section 3.
          </li>
          <li>
            <strong>Market data providers:</strong> third-party services such
            as Twelve Data, Finnhub, or Yahoo Finance supply candlestick and
            price data displayed in the App. These providers receive only the
            instrument symbols you request, not your personal information.
          </li>
          <li>
            <strong>Paystack and Supabase:</strong> process and store StraviFX
            Learn waitlist payments and sign-ups made on this website, as
            described in Section 2.5.
          </li>
        </ul>
        <p>
          Each provider processes data under its own privacy policy and
          contractual safeguards. We share only the minimum data required for
          the service to function.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="5. Cookies & Analytics">
        <p>
          The web version of StraviFX uses strictly necessary storage (such as
          your authentication session) to keep you signed in. We do not use
          third-party advertising trackers. Any usage analytics we collect are
          aggregated and used solely to improve reliability and product
          quality.
        </p>
      </LegalSection>

      <LegalSection id="security" title="6. Data Security">
        <p>
          We protect your data using encryption in transit (TLS) and at rest,
          scoped access controls, and Firebase security rules that isolate each
          user&rsquo;s data. No method of transmission or storage is 100%
          secure, but we continually review our safeguards to protect your
          information against unauthorized access, alteration, or loss.
        </p>
      </LegalSection>

      <LegalSection id="delete" title="7. Your Right to Delete Your Data">
        <p>
          You are in control of your data. You can permanently delete your
          StraviFX account, including your profile data, saved chart scans and
          analyses, stored preferences, uploaded images, and your Firebase
          authentication record, directly within the app by navigating to{" "}
          <strong>Profile → Settings → Delete account</strong>.
        </p>
        <p>
          Deletion is immediate and irreversible: once confirmed, your data is
          removed from our active systems, and residual backups expire on a
          rolling schedule. If you cannot access the App, you can{" "}
          <a href="/delete-account">request deletion from the web</a> or email
          us at the address in <a href="#contact">Section 12</a> from the email
          associated with your account.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="8. Data Retention">
        <p>
          We retain your account data, preferences, and saved analyses for as
          long as your account remains active. If you delete your account,
          associated personal data is purged from active systems promptly and
          from backups within a limited retention window. We may retain minimal
          records where required by law or to resolve disputes.
        </p>
      </LegalSection>

      <LegalSection id="no-advice" title="9. No Financial Advice">
        <LegalCallout>
          All AI-generated analysis produced by StraviFX, including identified
          support and resistance levels, trend assessments, trade setups, and
          position-sizing calculations, is provided for informational and
          educational purposes only and does not constitute financial,
          investment, legal, or tax advice.
        </LegalCallout>
        <p>
          StraviFX is not a broker-dealer, investment adviser, or financial
          planner. Trading involves substantial risk of loss; you are solely
          responsible for your own trading decisions, and you should consult a
          licensed financial professional before acting on any information
          provided by the App. See our <a href="/disclaimer">risk disclaimer</a>
          .
        </p>
      </LegalSection>

      <LegalSection id="children" title="10. Children's Privacy">
        <p>
          StraviFX is not directed at individuals under the age of 18, and we
          do not knowingly collect personal information from minors. If you
          believe a minor has provided us data, contact us and we will delete
          it promptly.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &ldquo;Last updated&rdquo; date above and, for
          material changes, notify you in the App or by email. Continued use of
          StraviFX after an update constitutes acceptance of the revised
          policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact Us">
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or your personal data, contact our privacy team at{" "}
          <a href={privacyMail}>{SITE.email.privacy}</a>.
        </p>
        <p>
          StraviFX is operated by {SITE.publisher.name},{" "}
          {SITE.publisher.city}, Kenya.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
