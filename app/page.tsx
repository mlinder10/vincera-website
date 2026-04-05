"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, ArrowRight, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type SendStatus = "Send" | "Sending" | "Sent" | "Error";

// ... imports remain the same

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sendStatus, setSendStatus] = useState<SendStatus>("Send");

  async function handleSendEmail(e: React.FormEvent) {
    e.preventDefault(); // Prevents page reload
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setSendStatus("Sending");
    const templateVals = { name, email, message };

    try {
      await emailjs.send(
        "service_7kk8pfn",
        "template_soeiwjl",
        templateVals,
        "0GjINiaEuMIa7iOfQ",
      );
      setSendStatus("Sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSendStatus("Error");
    }
  }

  return (
    <main className="scroll-smooth">
      {/* Hero */}
      <section className="relative flex justify-center items-center h-screen overflow-hidden">
        <Image
          src="/hero-background.webp"
          alt="Gym background"
          fill
          className="z-0 brightness-50 object-cover"
          loading="eager"
        />
        <div className="z-10 relative flex flex-col items-center px-4 text-center">
          <p className="font-semibold text-white text-xl md:text-2xl uppercase tracking-wide">
            Conquer the Gym
          </p>
          <h1 className="font-black text-white/90 text-7xl md:text-9xl italic tracking-tighter">
            VINCERA
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" className="px-8 rounded-full" asChild>
              <a
                href="https://apps.apple.com/us/app/vincera/id6737439279"
                target="_blank"
              >
                <ArrowDown className="mr-2 w-4 h-4" />
                Download
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 border-white/20 rounded-full text-white"
              asChild
            >
              <Link href="#features">
                <List className="mr-2 w-4 h-4" />
                Features
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-background py-24 overflow-hidden">
        <div className="space-y-32 mx-auto px-8 max-w-6xl">
          {/* Feature 1: Track Progress */}
          <div className="items-center gap-12 lg:gap-24 grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full font-bold text-primary text-sm uppercase tracking-wider">
                Performance
              </div>
              <h3 className="font-bold text-4xl lg:text-5xl tracking-tight">
                Track Your Progress
              </h3>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Stay on top of your fitness journey with detailed workout logs,
                performance insights, and progress tracking over time. See your
                gains visualized in real-time.
              </p>
            </div>

            <div className="relative flex justify-center order-1 md:order-2 h-125">
              {/* Left Phone */}
              <div className="relative bg-zinc-900 shadow-2xl border-[6px] border-black rounded-[2.5rem] w-56 aspect-9/19 overflow-hidden -rotate-6 translate-x-12">
                <Image
                  src="/iphone17-active.jpeg"
                  alt="Active Workout Screen"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right Phone */}
              <div className="z-10 relative bg-zinc-900 shadow-2xl border-[6px] border-black rounded-[2.5rem] w-56 aspect-9/19 overflow-hidden rotate-3 -translate-x-8 translate-y-12">
                <Image
                  src="/iphone17-history.jpeg"
                  alt="Workout History Screen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Learn Exercises */}
          <div className="items-center gap-12 lg:gap-24 grid md:grid-cols-2">
            {/* Phone Mockups on the Left for this section */}
            <div className="relative flex justify-center order-1 h-125">
              <div className="z-10 relative bg-zinc-900 shadow-2xl border-[6px] border-black rounded-[2.5rem] w-56 aspect-9/19 overflow-hidden -rotate-3 translate-x-8 translate-y-8">
                <Image
                  src="/iphone17-exercise.jpeg"
                  alt="Exercise Detail Screen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative bg-zinc-900 shadow-2xl border-[6px] border-black rounded-[2.5rem] w-56 aspect-9/19 overflow-hidden rotate-12 -translate-x-12">
                <Image
                  src="/iphone17-list.jpeg"
                  alt="Exercise List Screen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-2">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full font-bold text-primary text-sm uppercase tracking-wider">
                Library
              </div>
              <h3 className="font-bold text-4xl lg:text-5xl tracking-tight">
                Learn New Exercises
              </h3>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Expand your training with expert-guided exercises, complete with
                instructions, demonstrations, and tips to perfect your form.
                Never feel lost in the weight room again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Center it */}
      <section id="contact" className="bg-muted/30 py-24">
        <div className="mx-auto px-8 max-w-xl">
          <Card className="shadow-xl border-none">
            <CardContent className="space-y-6 p-8">
              <div className="space-y-2">
                <h3 className="font-bold text-3xl">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Have questions? We&apos;d love to hear from you.
                </p>
              </div>
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    className="min-h-30 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={sendStatus !== "Send"}
                >
                  {sendStatus === "Sending"
                    ? "Sending..."
                    : sendStatus === "Sent"
                      ? "Message Sent!"
                      : "Send Message"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
