import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, ArrowRight, List } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative place-items-center grid h-screen">
        <Image
          src="/hero-background.webp"
          alt="background image"
          fill
          className="-z-1"
          loading="eager"
        />
        <div className="flex flex-col items-center">
          <p className="text-shadow-md font-semibold text-white text-2xl">
            Conquer the Gym
          </p>
          <p className="text-shadow-md font-black text-white/40 text-9xl">
            VINCERA
          </p>
          <div className="flex gap-4 mt-8">
            <Button>
              <ArrowDown />
              <span>Download</span>
            </Button>
            <Button variant="outline">
              <List />
              <span>Features</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="flex flex-col min-h-screen">
        <div className="flex-1 place-items-center gap-16 grid grid-cols-2 px-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-2xl">Track Your Progress</h3>
            <p className="w-2/3 text-muted-foreground text-center">
              Stay on top of your fitness journey with detailed workout logs,
              performance insights, and progress tracking over time.
            </p>
          </div>
          <div className="flex">
            <div className="-z-1 relative flex w-[20vw] aspect-1/2 -rotate-3">
              <Image
                src="/iphone16-active.jpeg"
                alt="background image"
                sizes="20vw"
                fill
              />
            </div>
            <div className="-z-1 relative flex w-[20vw] rotate-5 translate-y-10">
              <Image
                src="/iphone16-history.jpeg"
                alt="background image"
                sizes="20vw"
                fill
              />
            </div>
          </div>

          <div className="flex">
            <div className="-z-1 relative flex w-[20vw] aspect-1/2 -rotate-3">
              <Image
                src="/iphone16-exercise.jpeg"
                alt="background image"
                sizes="20vw"
                fill
              />
            </div>
            <div className="-z-1 relative flex w-[20vw] rotate-5 translate-y-10">
              <Image
                src="/iphone16-list.jpeg"
                alt="background image"
                sizes="20vw"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-2xl">Learn New Exercises</h3>
            <p className="w-2/3 text-muted-foreground text-center">
              Expand your training with expert-guided exercises, complete with
              instructions, demonstrations, and tips to perfect your form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="flex flex-col min-h-screen">
        <div className="flex-1 items-center gap-16 grid grid-cols-2 px-8">
          <Card>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-2xl">Send us a message</h3>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="resize-none"
                />
              </div>
              <Button>
                <span>Send</span>
                <ArrowRight />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
