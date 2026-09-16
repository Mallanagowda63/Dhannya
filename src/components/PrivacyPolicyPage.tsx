import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
}

const Section: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({
  number,
  title,
  children,
}) => (
  <div className="kraft-card p-6 sm:p-8 rounded-2xl space-y-3">
    <h2 className="h3-title flex items-baseline gap-2 text-[#2A2620]">
      <span className="text-[#A9542B]">{number}.</span> {title}
    </h2>
    <div className="body-normal text-[#3E2F22] space-y-3">{children}</div>
  </div>
);

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-[#F4ECD8] text-[#2A2620] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#2A2620] hover:text-[#A9542B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="text-center space-y-3">
          <DhaanyaLogo variant="default" size="lg" className="mx-auto" />
          <h1 className="h1-title text-[#2A2620]">Privacy Policy</h1>
          <p className="text-sm text-[#3E4B32] font-medium">Last updated: 16 September 2026</p>
          <p className="body-normal max-w-2xl mx-auto text-[#3E2F22]">
            Dhaanya ("we," "us," "our") is committed to protecting the privacy of everyone who shops with
            us — whether through our website or via WhatsApp. This policy explains what personal
            information we collect, how we use it, and the choices you have. By using our website or
            placing an order with us, you agree to the practices described here.
          </p>
        </div>

        <Section number={1} title="Who We Are">
          <p>
            Dhaanya is an organic and natural grocery brand based in Doddakallasandra, Bengaluru –
            560062, offering traditional spices, millets, dry fruits, cold-pressed oils, flours, and
            health foods, made and packed with care.
          </p>
        </Section>

        <Section number={2} title="Information We Collect">
          <p>When you shop with us — on our website or over WhatsApp — we may collect:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="font-semibold">Contact details:</span> your name, phone number, and email address.</li>
            <li><span className="font-semibold">Delivery information:</span> your shipping/delivery address.</li>
            <li><span className="font-semibold">Order details:</span> items purchased, order history, preferences, and any custom masala blend requests.</li>
            <li><span className="font-semibold">Payment information:</span> payments are processed securely through Razorpay. We do not collect or store your card, UPI, or bank details ourselves.</li>
            <li><span className="font-semibold">WhatsApp chat data:</span> if you order or communicate with us via WhatsApp, we keep a record of that conversation (order details, address, queries) to process your order and assist you.</li>
            <li><span className="font-semibold">Website usage data:</span> basic technical information such as your browser type, device, and pages visited, mainly through cookies (see Section 4).</li>
          </ul>
        </Section>

        <Section number={3} title="How We Use Your Information">
          <p>We use your personal data to:</p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>Process and confirm your orders.</li>
            <li>Arrange delivery through our courier partners.</li>
            <li>Communicate with you about your order status, and respond to questions or support requests.</li>
            <li>Send you marketing emails, newsletters, or offers — only if you've opted in to receive them. You can unsubscribe anytime.</li>
            <li>Improve our website, products, and customer experience.</li>
            <li>Meet legal, tax, and accounting obligations.</li>
          </ol>
        </Section>

        <Section number={4} title="Cookies on Our Website">
          <p>Our website uses cookies to make your shopping experience smoother. These include:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="font-semibold">Session and cart cookies</span> — to remember what's in your cart as you browse.</li>
            <li><span className="font-semibold">Analytics cookies</span> — to help us understand how visitors use our site, so we can improve it.</li>
          </ul>
          <p>You can disable cookies through your browser settings, though this may affect features like your cart or login staying active.</p>
        </Section>

        <Section number={5} title="Sharing Your Information">
          <p>
            We do not sell, rent, or trade your personal data to advertisers or third parties for
            marketing purposes. We only share your information with:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="font-semibold">Razorpay</span>, our payment gateway partner, to securely process payments.</li>
            <li><span className="font-semibold">Delivery and courier partners</span>, to fulfil and ship your order to you.</li>
            <li>Government or legal authorities, only where required by law.</li>
          </ul>
          <p>Each of these partners is only given the information necessary to perform their specific service for you.</p>
        </Section>

        <Section number={6} title="Data Retention & Security">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>We retain your personal data for as long as needed to fulfil orders, handle returns/refunds, meet legal/tax requirements, and improve our service — typically for the duration of your relationship with us plus a reasonable period afterward for record-keeping.</li>
            <li><span className="font-semibold">Payment details are never stored on our systems.</span> All payment processing is handled directly by Razorpay through their PCI-DSS compliant, secure infrastructure.</li>
            <li>We take reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, or misuse.</li>
          </ul>
        </Section>

        <Section number={7} title="Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Request a copy of the personal data we hold about you.</li>
            <li>Ask us to correct inaccurate or outdated information.</li>
            <li>Request deletion of your personal data (subject to any legal record-keeping requirements).</li>
            <li>Opt out of marketing emails/newsletters at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, simply write to us at{' '}
            <a href="mailto:dhaanyaorganic1@gmail.com" className="text-[#A9542B] font-semibold hover:underline">
              dhaanyaorganic1@gmail.com
            </a>
            , and we'll respond within a reasonable timeframe.
          </p>
        </Section>

        <Section number={8} title="Children's Privacy">
          <p>
            Our website and services are not intended for use by children or minors. We do not knowingly
            collect personal information from anyone under 18 without the consent of a parent or
            guardian. If you believe a minor has provided us personal data without such consent, please
            contact us and we will remove it.
          </p>
        </Section>

        <Section number={9} title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or
            for legal reasons. Any updates will be posted on this page with a revised "Last updated"
            date. We encourage you to review this page periodically.
          </p>
        </Section>

        <Section number={10} title="Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your
            personal data, please reach out to us:
          </p>
          <p className="font-semibold">
            Dhaanya
            <br />
            Doddakallasandra, Bengaluru – 560062
            <br />
            Email:{' '}
            <a href="mailto:dhaanyaorganic1@gmail.com" className="text-[#A9542B] hover:underline">
              dhaanyaorganic1@gmail.com
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
};
