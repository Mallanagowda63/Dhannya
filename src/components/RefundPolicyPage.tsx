import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

interface RefundPolicyPageProps {
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

export const RefundPolicyPage: React.FC<RefundPolicyPageProps> = ({ onNavigateHome }) => {
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
          <h1 className="h1-title text-[#2A2620]">Refund &amp; Cancellation Policy</h1>
          <p className="text-sm text-[#3E4B32] font-medium">Last updated: 16 September 2026</p>
          <p className="body-normal max-w-2xl mx-auto text-[#3E2F22]">
            At Dhaanya, every product is made and packed with care, and we want you to be completely
            satisfied with what reaches your doorstep. Since we deal in food and consumable products, our
            refund policy is designed with hygiene and freshness in mind — please read below for how
            returns, refunds, and cancellations work.
          </p>
        </div>

        <Section number={1} title="Eligibility Window">
          <p>
            If there's a problem with your order, please let us know within <span className="font-semibold">48 hours of delivery</span>.
            Requests raised after this window may not be eligible for a refund or replacement.
          </p>
        </Section>

        <Section number={2} title="What's Eligible for a Refund or Replacement">
          <p>
            Because our products are perishable/consumable food items, we do not accept returns for
            change of mind. We will happily offer a refund or replacement only if you receive:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>A damaged product (crushed packaging, leakage, spillage, etc.)</li>
            <li>An expired product</li>
            <li>The wrong/incorrect item compared to what you ordered</li>
            <li>A defective or quality-compromised product (e.g., contamination, foreign matter, spoilage)</li>
          </ul>
        </Section>

        <Section number={3} title="What's Not Eligible">
          <p>We're unable to offer refunds or replacements for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Opened or partially used perishable/consumable items (unless damaged, expired, or defective as above)</li>
            <li>Custom masala blends or made-to-order products, once prepared</li>
            <li>Items purchased under sale/clearance offers (unless damaged or defective)</li>
            <li>Change-of-mind requests, or ordering the wrong item by mistake on your end</li>
          </ul>
        </Section>

        <Section number={4} title="How to Request a Refund">
          <p>To raise a refund/replacement request:</p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              Contact us within 48 hours of delivery via:
              <ul className="list-disc pl-5 mt-1.5 space-y-1">
                <li>
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/918792889647"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#A9542B] font-semibold hover:underline"
                  >
                    +91 8792889647
                  </a>
                </li>
                <li>
                  Email:{' '}
                  <a href="mailto:dhaanyaorganic1@gmail.com" className="text-[#A9542B] font-semibold hover:underline">
                    dhaanyaorganic1@gmail.com
                  </a>
                </li>
              </ul>
            </li>
            <li>Share your Order ID, a brief description of the issue, and clear photos of the product (and packaging, if damaged).</li>
            <li>Our team will review your request and get back to you within 1–2 business days.</li>
          </ol>
        </Section>

        <Section number={5} title="Refund Method & Timeline">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Once your request is approved, refunds will be issued to your original payment method via Razorpay.</li>
            <li>Please allow 5–7 business days for the refund to reflect in your account, depending on your bank/payment provider.</li>
            <li>If a replacement is preferred and available, we'll arrange for a fresh product to be shipped to you instead.</li>
          </ul>
        </Section>

        <Section number={6} title="Return Shipping Costs">
          <p>
            For approved refund/replacement cases due to damage, expiry, incorrect items, or defects,
            Dhaanya bears the shipping cost — you will not be charged for returning the product, and we
            will guide you on the return process (if a physical return is needed) via WhatsApp or email.
          </p>
        </Section>

        <Section number={7} title="Order Cancellation Policy">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Orders can be cancelled free of charge before they are dispatched for delivery. Please
              contact us as soon as possible via WhatsApp (+91 8792889647) or email with your Order ID.
            </li>
            <li>
              Once an order has been dispatched/shipped, it cannot be cancelled — you may raise a
              refund/replacement request instead if there's an issue on delivery, as per Sections 2–4
              above.
            </li>
          </ul>
        </Section>

        <Section number={8} title="Need Help or Have a Dispute?">
          <p>
            We're a small, customer-first brand, and we genuinely want to make things right if something
            goes wrong. If you're not satisfied with how a request has been handled, please reach out and
            we'll do our best to resolve it fairly:
          </p>
          <p className="font-semibold">
            Dhaanya
            <br />
            Doddakallasandra, Bengaluru – 560062
            <br />
            WhatsApp:{' '}
            <a
              href="https://wa.me/918792889647"
              target="_blank"
              rel="noreferrer"
              className="text-[#A9542B] hover:underline"
            >
              +91 8792889647
            </a>
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
