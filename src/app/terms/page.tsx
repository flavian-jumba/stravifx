import type { Metadata } from "next";
import { LegalCallout, LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using StraviFX, an AI-assisted chart analysis app: no financial advice, subscriptions, account deletion and acceptable use.",
  alternates: { canonical: "/terms" },
};

const supportMail = (
  <a href={`mailto:${SITE.email.support}`}>{SITE.email.support}</a>
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="15 October 2026"
      intro={
        <>
          <p>
            These Terms govern your access to StraviFX, an AI-assisted
            financial charting and market analysis utility. Please read them
            carefully before using the service.
          </p>
          <p className="font-mono text-xs text-fg-3">
            Effective date: 21 September 2026
          </p>
        </>
      }
    >
      <LegalCallout>
        <strong>Important:</strong> StraviFX does not provide financial advice
        or execute trades. Financial markets involve substantial risk,
        including the possible loss of all invested capital.
      </LegalCallout>

      <LegalSection id="acceptance" title="1. Acceptance of Terms">
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) form a legally binding
          agreement between you and the operator of StraviFX
          (&ldquo;StraviFX,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;). By downloading, installing, creating an account
          for, accessing, purchasing through, or using the StraviFX mobile
          application, web application, website, or related services
          (collectively, the &ldquo;Service&rdquo;), you confirm that you have
          read, understood, and agree to be bound by these Terms and our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
        <p>
          If you do not agree, do not access or use the Service. You must be at
          least 18 years old and legally capable of entering a binding contract
          in your jurisdiction. If you use StraviFX for an organization, you
          represent that you have authority to bind that organization, and
          &ldquo;you&rdquo; includes that organization.
        </p>
      </LegalSection>

      <LegalSection id="no-advice" title="2. Educational Tool; No Financial Advice">
        <p>
          StraviFX is an educational, informational, and analytical charting
          utility only. Content and outputs available through StraviFX,
          including chart observations, market commentary, detected candlestick
          patterns, probability scores, price levels, execution zones, and
          suggested Entry, Stop Loss, or Take Profit levels, are provided solely
          to assist your independent research.
        </p>
        <p>
          StraviFX does not provide investment, trading, financial, tax,
          accounting, or legal advice. StraviFX is not a registered
          broker-dealer, investment adviser, financial adviser, commodity
          trading adviser, exchange, fiduciary, asset manager, or tax
          professional. We do not know your financial circumstances,
          objectives, risk tolerance, or portfolio, and no output is
          personalized advice or a recommendation, solicitation, or offer to
          buy, sell, or hold any security, currency, digital asset, derivative,
          or other financial instrument.
        </p>
        <p>
          You are solely responsible for evaluating information, obtaining
          independent professional advice where appropriate, and making every
          trading or investment decision. You acknowledge that all order
          placement, execution, profits, losses, taxes, and consequences of
          your activity are your personal responsibility.
        </p>
      </LegalSection>

      <LegalSection id="risk" title="3. High-Risk Investment Warning">
        <p>
          Trading and investing in foreign exchange (Forex), cryptocurrencies
          and other digital assets, indices, equities, commodities, contracts
          for difference, derivatives, and related instruments involves
          substantial risk of capital loss and is not suitable for every
          person. Prices may change rapidly, markets may become illiquid, and
          you may lose some or all of the funds you commit.
        </p>
        <p>
          Leverage and margin magnify both gains and losses. A leveraged
          position may be liquidated quickly, may result in the total loss of
          deposited funds, and, depending on your broker, product, and
          jurisdiction, may create losses beyond your initial deposit. Only use
          capital you can afford to lose. Consider your experience, objectives,
          financial resources, and local laws before trading.
        </p>
        <p>
          StraviFX does not execute orders, custody assets, guarantee
          liquidity, verify broker pricing, or protect against slippage, gaps,
          spreads, liquidation, counterparty failure, or market manipulation.
          You remain responsible for checking every order and risk parameter
          directly with your chosen regulated provider.
        </p>
      </LegalSection>

      <LegalSection id="ai" title="4. Nature and Limits of AI-Generated Analysis">
        <p>
          StraviFX may use algorithmic systems and AI vision models to
          interpret chart images and other inputs. Detected candlestick
          patterns, trend descriptions, execution zones (including Entry, Stop
          Loss, and Take Profit), confidence or probability scores, and similar
          outputs are machine-generated estimates, not verified facts or trade
          instructions.
        </p>
        <p>
          AI outputs may be inaccurate, incomplete, outdated, inconsistent, or
          misleading. They may contain hallucinations, omit relevant context,
          misread symbols or timeframes, or be affected by image resolution,
          cropping, chart indicators, market volatility, data-provider delays,
          network latency, model limitations, software errors, or unusual
          market conditions. Similar inputs may produce different outputs.
        </p>
        <ul>
          <li>
            Always verify the asset, timeframe, price, market status, and any
            generated level independently.
          </li>
          <li>
            Do not rely on StraviFX as your sole source of information or as an
            automated trading system.
          </li>
          <li>
            Probability scores are model estimates and do not represent
            statistically guaranteed outcomes.
          </li>
          <li>
            Past performance, historical patterns, backtests, examples, or AI
            simulations do not guarantee future results.
          </li>
        </ul>
        <p>
          You assume all risk from relying on or acting upon an AI-generated
          output.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="5. User Accounts and Security">
        <p>
          Certain features require an account. You may register through Google
          Sign-In or another method we make available. By using a third-party
          sign-in provider, you authorize us to receive the account information
          that provider shares under your settings and its terms. We may use
          secure session tokens to keep you signed in; you must not share,
          copy, intercept, or misuse those tokens.
        </p>
        <p>
          You agree to provide accurate information, maintain control of your
          device and linked sign-in account, use appropriate device
          protections, and promptly notify us at {supportMail} if you suspect
          unauthorized access. You are responsible for activity under your
          account to the extent permitted by law.
        </p>
        <p>
          We may restrict, suspend, or terminate access where we reasonably
          believe an account is compromised, violates these Terms, creates risk
          to users or infrastructure, or is used for fraud, harassment,
          automated scraping, reverse engineering, security testing without
          permission, or attacks on the Service.
        </p>
      </LegalSection>

      <LegalSection id="billing" title="6. Premium Subscriptions and Digital Billing">
        <p>
          StraviFX may offer paid Premium or Pro access, which may include
          benefits such as higher or unlimited scan allowances, advanced
          timeframes, additional analysis tools, or other features described at
          purchase. Features, usage limits, prices, billing periods, and trial
          terms are shown before you confirm a purchase and may vary by
          platform or region.
        </p>
        <p>
          Mobile subscriptions are processed by Apple through App Store In-App
          Purchase or by Google through Google Play Billing. The applicable
          store, not StraviFX, handles payment authorization, currency
          conversion, taxes collected by the store, recurring billing, and
          payment credentials. Subscriptions automatically renew for the same
          period unless canceled at least 24 hours before the current period
          ends, subject to the store terms displayed to you.
        </p>
        <p>
          You can manage or cancel a subscription in your Apple ID subscription
          settings or Google Play subscriptions. Deleting StraviFX or deleting
          your StraviFX account does not automatically cancel an active store
          subscription. Cancellation stops future renewal and ordinarily leaves
          access available through the paid period.
        </p>
        <p>
          Except where law requires otherwise, purchases are non-refundable and
          we cannot directly issue refunds for transactions processed by Apple
          or Google. Refund requests must be submitted to the store that
          processed the purchase and are governed by its refund policies. Any
          free trial converts to a paid subscription unless canceled before the
          trial ends.
        </p>
      </LegalSection>

      <LegalSection id="deletion" title="7. Account and Data Deletion Rights">
        <p>
          You may permanently terminate your StraviFX account and request
          erasure of associated personal data directly within the application
          by going to <strong>Profile → Settings → Delete account</strong> and
          following the confirmation steps. Deletion is irreversible once
          completed and may remove saved analyses, preferences, and account
          history.
        </p>
        <p>
          We may retain limited records where required for legal compliance,
          fraud prevention, security, dispute resolution, or enforcement of
          these Terms, and may preserve de-identified information that can no
          longer reasonably identify you. Account deletion does not cancel an
          App Store or Google Play subscription; cancel it separately through
          the applicable store.
        </p>
        <p>
          If you cannot access the in-app deletion tool,{" "}
          <a href="/delete-account">request deletion from the web</a> or
          contact {supportMail} from the email associated with your account. We
          may take reasonable steps to verify your identity before processing
          the request.
        </p>
      </LegalSection>

      <LegalSection id="license" title="8. Limited License and Intellectual Property">
        <p>
          Subject to these Terms, StraviFX grants you a limited, personal,
          revocable, non-exclusive, non-transferable, and non-sublicensable
          license to use the Service for lawful personal or internal business
          analysis. No ownership rights are transferred.
        </p>
        <p>
          The Service, including its software, interface, models, workflows,
          branding, text, graphics, compilations, and underlying technology, is
          owned by or licensed to StraviFX and protected by
          intellectual-property laws. You retain rights in chart images and
          other content you lawfully submit. You grant us a limited license to
          host, process, transmit, and analyze that content only as needed to
          operate, secure, and improve the Service, consistent with our Privacy
          Policy.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="9. Acceptable Use">
        <p>
          You may not use the Service to violate law, third-party rights,
          exchange rules, or provider terms. You also may not:
        </p>
        <ul>
          <li>
            reverse engineer, decompile, extract models, discover source code,
            or circumvent technical protections except where law expressly
            permits it;
          </li>
          <li>
            scrape, crawl, batch-query, or access the Service through
            unauthorized bots, scripts, APIs, or automated means;
          </li>
          <li>
            probe, overload, disrupt, or attack accounts, servers, networks,
            authentication, rate limits, or security controls;
          </li>
          <li>
            upload malware, unlawful material, or content you do not have
            permission to use;
          </li>
          <li>
            resell, sublicense, copy, frame, impersonate, or misrepresent
            StraviFX or its outputs; or
          </li>
          <li>
            use outputs to make deceptive performance claims or present them as
            regulated professional advice.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="market-data" title="10. Market Data and Third-Party Services">
        <p>
          The Service may depend on app stores, identity providers, market-data
          sources, cloud providers, analytics providers, and links to
          third-party services. Their data may be delayed, interrupted,
          adjusted, incomplete, or different from executable prices. We do not
          control or endorse third-party services, and their separate terms and
          privacy practices apply.
        </p>
        <p>
          Quotes, charts, and timestamps displayed in StraviFX are not
          guaranteed to be real-time, accurate, or suitable for order
          execution. Where information conflicts, verify it with your broker,
          exchange, or primary data provider before acting.
        </p>
      </LegalSection>

      <LegalSection id="privacy" title="11. Privacy">
        <p>
          Our <a href="/privacy">Privacy Policy</a> explains how we collect,
          use, disclose, retain, and protect personal information and chart
          content. By using the Service, you acknowledge those practices. Do not
          submit sensitive personal information, brokerage credentials, private
          keys, seed phrases, or payment-card data in chart images or analysis
          prompts.
        </p>
      </LegalSection>

      <LegalSection id="warranties" title="12. Disclaimer of Warranties">
        <p className="uppercase">
          To the maximum extent permitted by law, the Service and all outputs,
          content, data, and features are provided &ldquo;as is&rdquo; and
          &ldquo;as available,&rdquo; without warranties of any kind, whether
          express, implied, statutory, or otherwise. StraviFX disclaims
          warranties of merchantability, fitness for a particular purpose,
          title, non-infringement, accuracy, availability, security, and
          uninterrupted or error-free operation.
        </p>
        <p>
          We do not warrant that analyses will be profitable or correct; that
          defects, hallucinations, or delays will be corrected; that the
          Service will always be available; or that content will meet your
          requirements. Some jurisdictions do not allow certain warranty
          exclusions, so some exclusions may not apply to you.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="13. Limitation of Liability">
        <p className="uppercase">
          To the maximum extent permitted by law, StraviFX and its owners,
          affiliates, licensors, providers, officers, employees, and agents
          will not be liable for indirect, incidental, special, exemplary,
          punitive, or consequential damages; loss of profits, capital,
          revenue, data, goodwill, or opportunity; trading losses; or the cost
          of substitute services, arising from or related to the Service, even
          if advised that such damages were possible.
        </p>
        <p>
          This limitation includes losses associated with reliance on AI
          outputs, market movement, leveraged positions, server downtime, cyber
          incidents, software bugs, corrupted uploads, inaccurate charts,
          data-provider delays, notification failures, or inability to access
          the Service.
        </p>
        <p>
          To the maximum extent permitted by law, StraviFX&rsquo;s total
          aggregate liability for all claims arising from the Service will not
          exceed the greater of (a) the amount you paid to StraviFX for the
          Service during the 12 months before the event giving rise to the
          claim or (b) US$100. Nothing in these Terms excludes liability that
          cannot lawfully be excluded or limited.
        </p>
      </LegalSection>

      <LegalSection id="indemnification" title="14. Indemnification">
        <p>
          To the extent permitted by law, you agree to defend, indemnify, and
          hold harmless StraviFX and its affiliates, personnel, licensors, and
          providers from claims, liabilities, damages, judgments, losses, and
          reasonable costs arising from your unlawful use of the Service, your
          content, your breach of these Terms, or your violation of another
          person&rsquo;s rights. This obligation does not apply to the extent a
          claim results from StraviFX&rsquo;s own unlawful conduct.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="15. Suspension and Termination">
        <p>
          You may stop using StraviFX at any time. We may suspend, limit, or
          terminate the Service or your account if you materially breach these
          Terms, create legal or security risk, fail to pay applicable fees, or
          use the Service abusively. Where reasonably practicable, we will
          provide notice and an opportunity to address the issue unless
          immediate action is needed to protect users, third parties, or the
          Service.
        </p>
        <p>
          Upon termination, your license ends. Provisions that by their nature
          should survive, including ownership, disclaimers, liability limits,
          indemnity, and dispute terms, remain effective.
        </p>
      </LegalSection>

      <LegalSection
        id="governing-law"
        title="16. Governing Law, Arbitration, and Class-Action Waiver"
      >
        <p>
          These Terms are governed by the laws of the State of Delaware, United
          States, without regard to conflict-of-laws rules, except where
          mandatory consumer law in your place of residence applies.
        </p>
        <p>
          Before filing a claim, you and StraviFX agree to attempt informal
          resolution for 30 days after written notice is sent to {supportMail}.
          The notice must describe the claimant, relevant facts, and requested
          relief.
        </p>
        <p>
          Except for claims eligible for small-claims court, requests for
          urgent injunctive relief, or matters that cannot legally be
          arbitrated, any dispute will be resolved by confidential, binding,
          individual arbitration administered by the American Arbitration
          Association under its applicable Consumer Arbitration Rules. The
          Federal Arbitration Act governs this agreement to arbitrate. Hearings
          may occur remotely unless the arbitrator determines otherwise.
        </p>
        <p>
          You and StraviFX waive the right to a jury trial and agree to bring
          claims only in an individual capacity, not as a plaintiff or class
          member in any class, collective, consolidated, or representative
          action. If this class-action waiver is found unenforceable for a
          particular claim, that claim will proceed in a court of competent
          jurisdiction in Delaware and the remaining claims will remain subject
          to arbitration. You may opt out of arbitration by emailing{" "}
          {supportMail} within 30 days after first accepting these Terms,
          stating your name, account email, and clear intent to opt out.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="17. Changes to These Terms or the Service">
        <p>
          We may update these Terms to reflect changes to the Service, law,
          risk, or business practices. We will post the revised Terms and
          update the &ldquo;Last updated&rdquo; date. If a change materially
          affects your rights, we will provide reasonable notice through the
          Service, email, or another appropriate channel. Your continued use
          after the effective date of revised Terms constitutes acceptance,
          where permitted by law.
        </p>
        <p>
          We may modify, suspend, or discontinue features, limits, or
          integrations. We do not guarantee that any particular feature, model,
          market, asset, or subscription benefit will remain available
          indefinitely.
        </p>
      </LegalSection>

      <LegalSection id="general" title="18. General Terms">
        <p>
          These Terms and any policies expressly incorporated by reference are
          the entire agreement concerning the Service and supersede prior
          discussions about it. If a provision is unenforceable, it will be
          modified to the minimum extent needed and the remaining provisions
          will continue. Our failure to enforce a provision is not a waiver.
          You may not assign these Terms without our consent; we may assign
          them in connection with a merger, reorganization, sale, or transfer
          of the Service. Headings are for convenience only. Electronic
          communications and records satisfy legal writing requirements.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="19. Contact Us">
        <p>
          For support, account deletion assistance, product questions, legal
          notices, arbitration opt-outs, or questions about these Terms,
          contact {supportMail}.
        </p>
        <p>
          Please include enough detail for us to identify your account and
          respond. Do not include passwords, session tokens, payment
          credentials, private keys, or seed phrases.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
