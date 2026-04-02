import Link from "next/link";

export default function Header() {
  return (
    <header className="top-0 right-0 left-0 fixed bg-white/10 backdrop-blur-md mx-8 mt-4 px-8 py-4 rounded-md">
      <nav className="flex justify-between items-center text-white/80">
        <Link href="#">
          <h1 className="font-semibold text-lg">Vincera</h1>
        </Link>

        <div className="flex gap-4 text-sm">
          <Link href="#features">Features</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/privacy-policy.html">Privacy Policy</Link>
        </div>
      </nav>
    </header>
  );
}
