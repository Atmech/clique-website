'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/images/logo/logo.png';

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F2FF]">
      {/* Header */}
      <header className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-between w-full">
        <Link href="/">
          <Image
            src={logo}
            alt="CLIQIT"
            width={250}
            height={100}
            priority
            className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#4A2B5C] mb-6">
            TERMS & CONDITIONS
          </h1>
          
          <p className="text-sm text-gray-600 mb-8">
            <em>Version 1.0 — 02 July 2025</em>
          </p>

          <div className="prose prose-lg max-w-none text-[#4A2B5C]">
            <p className="mb-6">
              These Terms & Conditions ("<strong>Terms</strong>") govern your access to and use of the <strong>Cliqit</strong> mobile application, cliqit.co website, and related dashboards (collectively, the "<strong>Services</strong>"), operated by <strong>Cliqit Digital Media LLP</strong> ("<strong>Cliqit</strong>", "<strong>we</strong>", "<strong>our</strong>").
            </p>
            
            <p className="mb-8 font-semibold">
              <strong>By downloading, installing, registering for, or using the Services, you agree to be bound by these Terms.</strong> If you do not accept all of the Terms, you must not access the Services.
            </p>

            <hr className="my-8 border-gray-300" />

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">1. DEFINITIONS</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>"Influencer"</strong> – a user who applies for or accepts offers published via the Services.</li>
                <li><strong>"Business"</strong> – a user (venue, brand, or agency) that creates offers or events on the Services.</li>
                <li><strong>"Offer"</strong> – a barter opportunity posted by a Business (e.g., free meal in exchange for social‑media content).</li>
                <li><strong>"Booking"</strong> – the confirmed agreement between an Influencer and a Business for an Offer or Event.</li>
                <li><strong>"Content"</strong> – text, photos, videos, reviews or any material submitted, published, or displayed in the Services.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">2. ELIGIBILITY & ACCOUNT REGISTRATION</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li><strong>Age.</strong> You must be at least 16 years old to create an account.</li>
                <li><strong>Accuracy of Information.</strong> You agree to provide accurate, current and complete information during registration and to keep it updated.</li>
                <li><strong>Role‑Based Accounts.</strong> When you sign up, you must choose either <em>Influencer</em> or <em>Business</em> role. Each role grants access to different features.</li>
                <li><strong>Account Security.</strong> You are responsible for maintaining the confidentiality of login credentials and are liable for all activity under your account.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">3. SERVICES OVERVIEW</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Influencers</strong> may browse Offers and Events, submit applications, receive Booking confirmations, and present in‑app QR codes at check‑in.</li>
                <li><strong>Businesses</strong> may post Offers, review Influencer applications, approve or decline applicants, and scan QR codes to verify attendance.</li>
              </ul>
              <p className="mb-6">
                Cliqit merely provides a marketplace; <strong>we are not a party to any Booking contract between Influencers and Businesses</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">4. USER CONTENT & LICENSE</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li><strong>Your Content.</strong> You retain ownership of Content you submit but grant Cliqit a worldwide, transferable, sublicensable, royalty‑free licence to host, display, reproduce, adapt and distribute such Content solely to operate and promote the Services.</li>
                <li><strong>Business Details Shown to Influencers.</strong> By creating an Offer, Businesses authorise Cliqit to share venue name, address, cover images, basic public profile, and Offer metrics with Influencers.</li>
                <li><strong>Acceptable Content.</strong> You must not upload Content that is defamatory, obscene, infringing, or violates any law or third‑party right.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">5. RULES OF CONDUCT</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li><strong>No Illegal Use.</strong> You may not use the Services for any unlawful purpose or to facilitate unfair trade practices as defined under the Consumer Protection Act 2019.</li>
                <li><strong>No Circumvention.</strong> Influencers and Businesses shall not complete transactions for Offers outside the platform with the intent to avoid any feature of the Services.</li>
                <li><strong>No Automated Scraping.</strong> Data mining, scraping, or framing of the Services is prohibited.</li>
                <li><strong>Compliance With Venue Policies.</strong> Influencers must follow on‑site rules of Businesses during Offer fulfilment.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">6. BOOKINGS, CANCELLATIONS & DISPUTES</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li><strong>Non‑Payment Model.</strong> Offers are barter‑only; Cliqit does not process payments.</li>
                <li><strong>Business Right to Cancel.</strong> Businesses may cancel a Booking up to 24 hours before the scheduled time via dashboard.</li>
                <li><strong>Influencer No‑Show.</strong> If an Influencer fails to appear at the venue within the allotted window, the Booking is automatically cancelled <strong>and one (1) "Strike" is recorded against the Influencer's account. An account that accumulates three (3) Strikes within any rolling 12‑month period will be permanently banned from the Services.</strong></li>
                <li><strong>Dispute Resolution Between Users.</strong> Parties should first attempt to resolve disagreements directly; Cliqit may, at its discretion, mediate but is not obliged to do so.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">7. INTELLECTUAL PROPERTY</h2>
              <p className="mb-6">
                All trademarks, logos and software of Cliqit are the property of Cliqit or its licensors. Except for the licence granted in Section 4, no right, title, or interest is transferred to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">8. THIRD‑PARTY CONTENT & MAP DATA</h2>
              <p className="mb-6">
                Maps displayed in the Services are provided by <strong>OpenStreetMap</strong> and its contributors under ODbL; data may be inaccurate or incomplete. Cliqit disclaims all warranties regarding map accuracy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">9. DISCLAIMER OF WARRANTIES</h2>
              <p className="mb-6">
                The Services are provided <strong>"AS IS" and "AS AVAILABLE"</strong> without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non‑infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">10. LIMITATION OF LIABILITY</h2>
              <p className="mb-6">
                To the maximum extent permitted by the Indian Contract Act and applicable law, <strong>Cliqit's total liability</strong> arising out of or in connection with these Terms or the Services shall not exceed <strong>INR 10,000</strong>. In no event shall Cliqit be liable for indirect, punitive, incidental, special or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">11. INDEMNIFICATION</h2>
              <p className="mb-6">
                You agree to indemnify and hold harmless Cliqit and its officers, directors, employees, and agents from any claims, damages, or expenses arising out of your (i) use of the Services, (ii) Content, or (iii) breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">12. TERMINATION</h2>
              <p className="mb-6">
                Cliqit may suspend or terminate your account at any time for breach of these Terms or applicable law. Upon termination, licences granted by you to Cliqit survive only as necessary to complete transactions prior to termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">13. GOVERNING LAW & DISPUTE RESOLUTION</h2>
              <p className="mb-6">
                These Terms are governed by the laws of India. Any dispute shall be resolved by <strong>arbitration under the Arbitration and Conciliation Act 1996</strong>, with the seat of arbitration in <strong>Pune, Maharashtra</strong>. The arbitral tribunal shall consist of a sole arbitrator appointed by mutual consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">14. FORCE MAJEURE</h2>
              <p className="mb-6">
                Neither party is liable for delays or failure to perform due to causes beyond reasonable control, including natural disasters, war, terrorism, labour disputes, government action, or Internet outages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">15. CHANGES TO TERMS</h2>
              <p className="mb-6">
                We may revise these Terms from time to time. Material changes will be notified via email or in‑app at least 7 days before they take effect. Continued use after the effective date constitutes acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">16. CONTACT</h2>
              <p className="mb-4">Questions about these Terms?</p>
              <p className="mb-2">Email: <a href="mailto:legal@cliqit.co" className="text-blue-600 hover:underline">support@cliqit.co</a></p>
              <p className="mb-6">
                Address: Cliqit Digital Media LLP, S. No 1A/1/2, Brahma I‑stet, Kondhwa Kh, Pune 411048, Maharashtra, India.
              </p>
            </section>

            <hr className="my-8 border-gray-300" />

            <p className="text-center text-sm text-gray-600">
              © 2025 Cliqit Digital Media LLP. All rights reserved.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 