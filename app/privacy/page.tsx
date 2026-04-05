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
        <p className="pb-8 border-b text-muted-foreground italic">
          Effective Date: February 13, 2025
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
              Data you manually input, such as weights lifted and repetitions
              performed.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">3. How We Use Your Information</h2>
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
            4. Data Sharing and Security
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
          <h2 className="font-bold text-2xl">5. Your Choices and Control</h2>
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
              Deleting the Vincera app will remove all locally cached workout
              logs from your device.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">6. Contact Us</h2>
          <p>
            If you have any questions regarding this policy or our privacy
            practices, please contact us at:
          </p>
          <p className="font-medium text-primary">vinceratraining@gmail.com</p>
        </section>

        <section className="space-y-4 mt-12">
          <h2 className="font-bold text-2xl">7. In-App Purchases</h2>
          <p>
            Vincera offers digital products and features available for purchase
            (&quot;In-App Purchases&quot;). All transactions are processed
            securely through the Apple App Store.
          </p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>
              <span className="mr-1 font-bold text-foreground">
                Payment Processing:
              </span>
              We do not collect or store your credit card numbers or billing
              information. Payments are handled by Apple according to their
              Privacy Policy.
            </li>
            <li>
              <span className="mr-1 font-bold text-foreground">
                Restoration:
              </span>
              Non-consumable purchases (e.g., lifetime unlocks) can be restored
              at any time within the app settings if you switch devices or
              reinstall the app.
            </li>
            <li>
              <span className="mr-1 font-bold text-foreground">
                Purchase Data:
              </span>
              We only store a record of your &quot;Transaction ID&quot; locally
              on your device to verify which features should be unlocked.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
