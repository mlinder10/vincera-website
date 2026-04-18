import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Vincera",
  description:
    "Learn how Vincera protects your health and workout data. Our commitment to privacy and secure HealthKit integration.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto px-8 pt-32 pb-24 max-w-3xl">
      {/* Back Button */}
      <Link
        href="/"
        className="group flex items-center gap-2 mb-12 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <div className="dark:prose-invert max-w-none prose prose-zinc lg:prose-lg">
        <h1 className="mb-2 font-black text-4xl tracking-tight">
          Privacy Policy
        </h1>
        {/* Updated Effective Date to current year for compliance audit */}
        <p className="pb-8 border-b text-muted-foreground italic">
          Effective Date: April 18, 2026
        </p>

        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">1. Introduction</h2>
          <p>
            Vincera (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard your information when you use our
            mobile application. We prioritize data minimization and user
            transparency.
          </p>
        </section>

        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">2. Information We Collect</h2>
          <p>
            Vincera only accesses data strictly necessary to provide a
            personalized workout experience. Specifically, we utilize:
          </p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>
              <span className="font-bold text-foreground">
                Apple HealthKit Data:
              </span>{" "}
              With your explicit permission, Vincera reads and writes
              workout-related metrics (such as heart rate, active energy burned,
              and workout duration) to the Apple Health app.
            </li>
            <li>
              <span className="font-bold text-foreground">
                Local Workout Logs:
              </span>{" "}
              Data you manually input, such as weights lifted, repetitions, and
              Rate of Perceived Exertion (RPE).
            </li>
          </ul>
        </section>

        {/* NEW: Section 3 - Automated Decision Making (Important for your "Generate" feature) */}
        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">3. Automated Decision Making</h2>
          <p>
            Vincera uses automated algorithms to generate custom workout splits
            based on user-provided inputs (such as goals, gender, and
            equipment).
          </p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>This processing is performed locally on your device.</li>
            <li>
              We do not use your health data to build behavioral profiles for
              third-party advertising.
            </li>
            <li>
              You may opt-out of this feature by manually creating routines
              instead of using the generator.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">4. How We Use Your Information</h2>
          <p>We use HealthKit and local data solely to:</p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Display and track your historical workout progress.</li>
            <li>Calculate training volume and performance insights.</li>
            <li>
              Contribute completed sessions back to your Apple Health rings.
            </li>
          </ul>
        </section>

        <section className="space-y-4 bg-muted/30 mt-12 p-6 border border-border/50 rounded-2xl">
          <h2 className="mt-0 font-bold text-2xl">
            5. Data Sharing and Security
          </h2>
          <ul className="space-y-2 pl-6 list-disc">
            <li>
              <span className="font-bold">No Third-Party Sharing:</span> We do
              not share, sell, or trade your HealthKit data with third-party
              advertisers, data brokers, or marketing platforms.
            </li>
            <li>
              <span className="font-bold">No External Servers:</span> Your
              workout data is stored locally on your device or within your
              private iCloud backup. We do not transmit your personal health
              data to external Vincera servers.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">
            6. Your Choices and Control (CCPA/GDPR)
          </h2>
          <p>You maintain full control over your data:</p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>
              You can modify or revoke HealthKit permissions at any time via
              <span className="italic">
                {" "}
                Settings &gt; Health &gt; Vincera
              </span>{" "}
              on your iPhone.
            </li>
            <li>
              <span className="font-bold text-foreground">
                Right to Deletion:
              </span>{" "}
              Deleting the Vincera app will remove all locally cached workout
              logs. For data synced to iCloud, you can manage this via your iOS
              System Settings.
            </li>
          </ul>
        </section>

        {/* UPDATED: Section 7 - Subscriptions & Cancellation (Compliant with 2026 FTC "Click to Cancel") */}
        <section className="space-y-4 mt-12 pl-6 border-primary border-l-4">
          <h2 className="font-bold text-2xl">7. Subscriptions and Payments</h2>
          <p>
            Vincera offers auto-renewing subscriptions. Payments are processed
            via the Apple App Store.
          </p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>
              <span className="font-bold text-foreground">Billing:</span>{" "}
              Subscriptions will be charged to your iTunes Account at
              confirmation of purchase and will automatically renew unless
              turned off at least 24 hours before the end of the current period.
            </li>
            <li>
              <span className="font-bold text-foreground">Cancellation:</span>{" "}
              You may cancel your subscription at any time through your{" "}
              <span className="italic">App Store Account Settings</span>. To
              avoid being charged, you must cancel at least 24 hours before the
              renewal date.
            </li>
            <li>
              <span className="font-bold text-foreground">Refunds:</span> Refund
              requests are handled exclusively by Apple and are subject to
              Apple&apos;s Terms and Conditions.
            </li>
          </ul>
        </section>

        {/* NEW: Section 8 - Medical Disclaimer (Crucial for liability) */}
        <section className="space-y-4 mt-12 text-muted-foreground text-sm">
          <h2 className="font-bold text-foreground text-xl">
            8. Medical Disclaimer
          </h2>
          <p>
            Vincera is a tool for tracking and planning fitness activities. It
            is not a medical device and does not provide medical advice. Always
            consult with a healthcare professional before beginning any new
            exercise program. Use of the app is at your own risk.
          </p>
        </section>

        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">9. Contact Us</h2>
          <p>
            If you have any questions regarding this policy or our privacy
            practices, please contact us at:
          </p>
          <p className="font-medium text-primary underline">
            vinceratraining@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
