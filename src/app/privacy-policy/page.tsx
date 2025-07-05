'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/images/logo/logo.png';

export default function PrivacyPolicy() {
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
            PRIVACY POLICY
          </h1>
          
          <p className="text-sm text-gray-600 mb-8">
            <em>Last updated <strong>02 July 2025</strong></em>
          </p>

          <div className="prose prose-lg max-w-none text-[#4A2B5C]">
            <p className="mb-6">
              This Privacy Policy describes how <strong>Cliqit Digital Media LLP</strong> (&ldquo;<strong>Cliqit</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or &ldquo;<strong>our</strong>&rdquo;) collects, uses, discloses, and safeguards your information when you visit <strong>cliqit.co</strong> (the &ldquo;<em>Site</em>&rdquo;) or use the <strong>Cliqit</strong> mobile application and related dashboard (the &ldquo;<em>Services</em>&rdquo;).
            </p>
            
            <p className="mb-6">
              We follow the <strong>Information Technology Act 2000</strong> & <strong>SPDI Rules 2011</strong>, the <strong>Digital Personal Data Protection Act 2023 (DPDPA)</strong>, and—where relevant—the EU <strong>GDPR</strong>.
            </p>

            <p className="mb-8">
              You agree to the practices described below by accessing the Services. If you do not agree, please discontinue use.
            </p>

            <p className="text-sm italic mb-8">
              <em>When we say &ldquo;personal data,&rdquo; we mean information that identifies, relates to, or could reasonably be linked to you.</em>
            </p>

            <hr className="my-8 border-gray-300" />

            <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">WHEN DOES THIS NOTICE APPLY?</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Download or use our mobile application (&ldquo;Cliqit&rdquo;).</li>
              <li>Access the web dashboard to manage bookings.</li>
              <li>Interact with us by email, social media, or events.</li>
            </ul>

            <p className="mb-8">
              Questions or concerns? Email <a href="mailto:privacy@cliqit.co" className="text-blue-600 hover:underline">privacy@cliqit.co</a> or see §11.
            </p>

            <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">SUMMARY OF KEY POINTS</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="font-semibold mb-2">Note on payments:</p>
              <p>Cliqit currently <strong>does not process any in‑app or web payments, nor do we handle credit‑card or bank details.</strong> As a result, payment processors and related data categories are <strong>not</strong> part of our data flows.</p>
            </div>

            <p className="mb-4">
              This summary highlights the material points from our Privacy Policy, but you should read the full document for complete details.
            </p>

            <ul className="list-disc pl-6 mb-8">
              <li><strong>Data we collect</strong> — identity, contact, profile, booking, location (with permission), device & log data, push tokens. We do <strong>not</strong> collect sensitive or children&apos;s data.</li>
              <li><strong>Why</strong> — to create accounts, match influencers with gigs, run maps & notifications, secure the service, and meet legal duties.</li>
              <li><strong>Sharing</strong> — only with service providers (Nhost, Firebase, OpenStreetMap, Razorpay/Stripe, Sentry), venues you apply to, and authorities when required.</li>
              <li><strong>Retention</strong> — account data = active + 30 days; booking data = 36 months; logs = 14–90 days; finance = 8 years.</li>
              <li><strong>Rights</strong> — access, correct, delete, withdraw consent, and complain to the DPDPB or your EU DPA.</li>
              <li><strong>Security</strong> — TLS 1.2+, AES‑256 at rest, RBAC, Argon2 passwords, penetration tests.</li>
              <li><strong>International transfers</strong> — safeguarded by SCCs, Data Privacy Framework, or DPDPA §16 permitted transfers.</li>
            </ul>

            <p className="mb-8">For details, click a heading in the <strong>Table of Contents</strong> below.</p>

            <h2 className="text-2xl font-bold text-[#4A2B5C] mb-4">TABLE OF CONTENTS</h2>
            <ol className="list-decimal pl-6 mb-8 space-y-2">
              <li><a href="#section1" className="text-blue-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a></li>
              <li><a href="#section2" className="text-blue-600 hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
              <li><a href="#section3" className="text-blue-600 hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL DATA?</a></li>
              <li><a href="#section4" className="text-blue-600 hover:underline">INTERNATIONAL TRANSFERS OF DATA</a></li>
              <li><a href="#section5" className="text-blue-600 hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
              <li><a href="#section6" className="text-blue-600 hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
              <li><a href="#section7" className="text-blue-600 hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
              <li><a href="#section8" className="text-blue-600 hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
              <li><a href="#section9" className="text-blue-600 hover:underline">COOKIES & SIMILAR TECHNOLOGIES</a></li>
              <li><a href="#section10" className="text-blue-600 hover:underline">CONTROLS FOR DO‑NOT‑TRACK & PUSH NOTIFICATIONS</a></li>
              <li><a href="#section11" className="text-blue-600 hover:underline">HOW CAN YOU CONTACT US OR EXERCISE YOUR RIGHTS?</a></li>
              <li><a href="#section12" className="text-blue-600 hover:underline">CHANGES TO THIS POLICY</a></li>
            </ol>

            <hr className="my-8 border-gray-300" />

            <section id="section1" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">1. WHAT INFORMATION DO WE COLLECT?</h3>
              <p className="mb-4"><strong>In Short:</strong> We collect the information you give us, data generated by your use of the Services, and limited device data.</p>
              
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Identity & Contact</td>
                      <td className="border border-gray-300 px-4 py-2">name, username, email, phone</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Profile</td>
                      <td className="border border-gray-300 px-4 py-2">photo, bio, social‑media handles, niche tags</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Booking</td>
                      <td className="border border-gray-300 px-4 py-2">applications, QR check‑ins, deliverable links</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Location</td>
                      <td className="border border-gray-300 px-4 py-2">precise/coarse GPS (with permission), venue coords viewed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Device & Log</td>
                      <td className="border border-gray-300 px-4 py-2">IP, OS, device ID, crash logs, referrer URL</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Push Token</td>
                      <td className="border border-gray-300 px-4 py-2">APNs / FCM token</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p>We do <strong>not</strong> intentionally collect special‑category data (e.g., health, religion) or data from children under 18.</p>
            </section>

            <section id="section2" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
              <p className="mb-4"><strong>In Short:</strong> We process data to run the platform, secure it, and comply with the law.</p>
              
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Legal Basis (DPDPA / GDPR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Create & authenticate accounts</td>
                      <td className="border border-gray-300 px-4 py-2">Contract / Sec 5(a)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Match influencers to gigs & manage bookings</td>
                      <td className="border border-gray-300 px-4 py-2">Contract</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Show a map of nearby offers</td>
                      <td className="border border-gray-300 px-4 py-2">Consent (location)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Send push notifications</td>
                      <td className="border border-gray-300 px-4 py-2">Consent</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Prevent fraud & secure services</td>
                      <td className="border border-gray-300 px-4 py-2">Legitimate interest</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Analytics & improvements (aggregated)</td>
                      <td className="border border-gray-300 px-4 py-2">Legitimate interest</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Tax, accounting & regulatory duties</td>
                      <td className="border border-gray-300 px-4 py-2">Legal obligation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="section3" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL DATA?</h3>
              <p className="mb-4"><strong>In Short:</strong> Only with trusted processors, venues you engage, and authorities when required.</p>
              
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Recipient</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Reason</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Nhost AB</td>
                      <td className="border border-gray-300 px-4 py-2">cloud DB, auth, storage</td>
                      <td className="border border-gray-300 px-4 py-2">Mumbai</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Google Firebase</td>
                      <td className="border border-gray-300 px-4 py-2">push & Crashlytics</td>
                      <td className="border border-gray-300 px-4 py-2">USA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OpenStreetMap Fnd.</td>
                      <td className="border border-gray-300 px-4 py-2">map tiles (IP only)</td>
                      <td className="border border-gray-300 px-4 py-2">UK/NL</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Sentry & email provider</td>
                      <td className="border border-gray-300 px-4 py-2">error monitoring, transactional mail</td>
                      <td className="border border-gray-300 px-4 py-2">Various</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Venue owners</td>
                      <td className="border border-gray-300 px-4 py-2">view your public profile & booking data</td>
                      <td className="border border-gray-300 px-4 py-2">—</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Influencers</td>
                      <td className="border border-gray-300 px-4 py-2">see business offer details: venue name, address, cover image, basic public profile & offer metrics</td>
                      <td className="border border-gray-300 px-4 py-2">—</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Law enforcement / M&A</td>
                      <td className="border border-gray-300 px-4 py-2">legal compliance or corporate events</td>
                      <td className="border border-gray-300 px-4 py-2">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p>All processors sign DPAs and use SCCs or Data Privacy Framework where needed.</p>
            </section>

            <section id="section4" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">4. INTERNATIONAL TRANSFERS OF DATA</h3>
              <p><strong>In Short:</strong> Your data may be processed abroad, protected by SCCs, DPF certification, or DPDPA‑permitted transfers.</p>
            </section>

            <section id="section5" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
              <p className="mb-4"><strong>In Short:</strong> Only as long as necessary for the purposes outlined.</p>
              
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Data</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Account & profile</td>
                      <td className="border border-gray-300 px-4 py-2">active + 30 days after deletion</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Booking & QR logs</td>
                      <td className="border border-gray-300 px-4 py-2">36 months post‑event</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">GPS history</td>
                      <td className="border border-gray-300 px-4 py-2">30 days then anonymised</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Device/crash logs</td>
                      <td className="border border-gray-300 px-4 py-2">90 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Server logs</td>
                      <td className="border border-gray-300 px-4 py-2">14 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="section6" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
              <p className="mb-4"><strong>In Short:</strong> TLS 1.2+, AES‑256 at rest, Argon2 passwords, RBAC, ISO‑27001‑aligned controls, regular penetration testing.</p>
              <p>However, no digital service can guarantee 100 % security; use is at your own risk.</p>
            </section>

            <section id="section7" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">7. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Access, download, or port your data.</li>
                <li>Correct inaccurate data.</li>
                <li>Delete your account (<strong>Settings → Delete Account</strong>).</li>
                <li>Withdraw consent for location or notifications.</li>
                <li>Lodge a complaint with the DPDP Board or your EU/UK authority.</li>
              </ul>
              <p>We respond within <strong>30 days</strong>.</p>
            </section>

            <section id="section8" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">8. DO WE COLLECT INFORMATION FROM MINORS?</h3>
              <p>No. The Services are for users <strong>18 years and older</strong>. We delete any data collected from minors once discovered.</p>
            </section>

            <section id="section9" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">9. COOKIES & SIMILAR TECHNOLOGIES</h3>
              <p>The Site sets <strong>session cookies</strong> for login & CSRF only. No advertising cookies unless you opt‑in via our banner.</p>
            </section>

            <section id="section10" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">10. CONTROLS FOR DO‑NOT‑TRACK & PUSH NOTIFICATIONS</h3>
              <p className="mb-4">Browsers&apos; Do‑Not‑Track signals are not yet standardised, so we do not respond to them.</p>
              <p>Push tokens are stored by Apple/Google and may be disclosed under their lawful‑request policies.</p>
            </section>

            <section id="section11" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">11. HOW CAN YOU CONTACT US OR EXERCISE YOUR RIGHTS?</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Email:</strong> <a href="mailto:privacy@cliqit.co" className="text-blue-600 hover:underline">privacy@cliqit.co</a></li>
                <li><strong>Online form:</strong> <a href="https://cliqit.co/privacy-request" className="text-blue-600 hover:underline">https://cliqit.co/privacy-request</a></li>
                <li><strong>Post:</strong> Compliance Desk, Cliqit Digital Media LLP, S. No 1A/1/2, Brahma I‑stet, Kondhwa Kh, Pune 411048, India.</li>
              </ul>
            </section>

            <section id="section12" className="mb-8">
              <h3 className="text-xl font-bold text-[#4A2B5C] mb-4">12. CHANGES TO THIS POLICY</h3>
              <p>We may update this Policy from time to time. We&apos;ll post the new version here and, for material changes, alert you by email or in‑app at least <strong>7 days</strong> in advance.</p>
            </section>

            <hr className="my-8 border-gray-300" />
            
            <p className="text-center text-sm text-gray-600">
              © 2025 Cliqit Digital Media LLP—All rights reserved.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 max-w-7xl mx-auto w-full">
        <div className="text-xs sm:text-sm text-[#4A2B5C] text-center sm:text-left">
          <div>business@cliqit.co</div>
          <div>Pune, India</div>
        </div>
        <Image
          src={logo}
          alt="Cliqit Media"
          width={120}
          height={45}
          className="h-32 sm:h-32 md:h-52 w-auto"
        />
      </footer>
    </div>
  );
} 