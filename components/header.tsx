import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export default function Header() {
  return (
    <header className="top-0 right-0 left-0 z-50 fixed bg-white/10 shadow-lg backdrop-blur-xl mx-4 md:mx-8 mt-4 px-6 py-3 border border-white/20 rounded-2xl transition-all">
      <nav className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex justify-center items-center bg-primary rounded-lg w-8 h-8 font-black text-primary-foreground text-sm group-hover:scale-110 transition-transform">
            V
          </div>
          <h1 className="font-bold text-white group-hover:text-primary text-xl tracking-tight transition-colors">
            Vincera
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-white/70 text-sm">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>

          {/* Small CTA inside header */}
          <Button size="sm" className="px-4 rounded-full h-8 text-xs" asChild>
            <a
              href="https://apps.apple.com/us/app/vincera/id6737439279"
              target="_blank"
            >
              Download
            </a>
          </Button>
        </div>

        {/* Mobile "Download" Icon only (Optional) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white" asChild>
            <a
              href="https://apps.apple.com/us/app/vincera/id6737439279"
              target="_blank"
            >
              <ArrowDown className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
