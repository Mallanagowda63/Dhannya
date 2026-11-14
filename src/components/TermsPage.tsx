import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

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

export const TermsPage: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
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
          <h1 className="h1-title text-[#2A2620]">Terms &amp; Conditions</h1>
          <p className="text-sm text-[#3E4B32] font-medium">Last updated: 2 November 2026</p>
          <p className="body-normal max-w-2xl mx-auto text-[#3E2F22]">
            These terms apply when you browse dhaanyafoods.com or place an order with Dhaanya. By placing an
            order, you agree to them.
          </p>
        </div>

        <Section number={1} title="Orders">
          <p>
            An order is confirmed once you receive an order confirmation. We may cancel an order if a product
            becomes unavailable or a listing contains an error. If you have already paid, we will refund you in full.
          </p>
        </Section>

        <Section number={2} title="Prices and Taxes">
          <p>
            All prices are in Indian Rupees (INR). GST and a ₹10 handling fee are shown at checkout before you
            pay. Delivery is free within 3 km of our store. Beyond 3 km we deliver through Porter or Swiggy, and
            their delivery fee is paid directly to the rider on delivery. Prices may change, but the price shown
            when you place your order is the price you pay.
          </p>
        </Section>

        <Section number={3} title="Payment">
          <p>
            You can pay online through Cashfree Payments (UPI, cards, netbanking and other methods shown at
            checkout) or choose Cash on Delivery where available. Online payments are processed by Cashfree; we
            do not store your card, UPI or bank details.
          </p>
        </Section>

        <Section number={4} title="Delivery">
          <p>
            We aim to deliver within the estimate shown on your order. Delays can occur for reasons outside our
            control. Please provide a complete address and a reachable mobile number.
          </p>
        </Section>

        <Section number={5} title="Returns, Refunds and Cancellations">
          <p>
            Returns, refunds and cancellations are governed by our Refund &amp; Cancellation Policy, available in
            the website footer.
          </p>
        </Section>

        <Section number={6} title="Products">
          <p>
            We take care to describe our products accurately. Natural food products can vary slightly in colour,
            texture and aroma. Please check ingredients and allergen information before use. Health-related
            information on this site is general and is not medical advice.
          </p>
        </Section>

        <Section number={7} title="Acceptable Use">
          <p>
            Please do not misuse this website, attempt to interfere with it, or place fraudulent orders. Website
            content, including text, images and branding, belongs to Dhaanya and may not be reused without permission.
          </p>
        </Section>

        <Section number={8} title="Liability">
          <p>
            To the extent permitted by law, our liability for any order is limited to the amount you paid for
            that order. Nothing in these terms limits rights you have under Indian consumer protection law.
          </p>
        </Section>

        <Section number={9} title="Governing Law">
          <p>These terms are governed by the laws of India.</p>
        </Section>

        <Section number={10} title="Contact">
          <p>
            Questions about these terms? Email{' '}
            <a href="mailto:sales@dhaanyafoods.com" className="text-[#A9542B] font-semibold hover:underline">
              sales@dhaanyafoods.com
            </a>{' '}
            or call or WhatsApp +91 9008625716.
          </p>
        </Section>
      </div>
    </div>
  );
};
