import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo a sinistra */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/logo.png"
            alt="Magistri App Logo"
            width={32}
            height={32}
          />
          <span className="text-lg">Magistri App</span>
        </Link>

        {/* Navigazione desktop */}
        <nav className="hidden gap-4 sm:flex">
          {/* Inserisci qui i link alle pagine interne */}
          {/* ESEMPIO: */}
          {/* <Link href="/mensa" className="text-sm font-medium text-gray-700 hover:text-black">Mensa</Link> */}

          {/* Inserisci qui i link esterni come GitHub, Instagram, ecc. */}
          {/* ESEMPIO: */}
          {/* <Link href="https://github.com/..." target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-black">GitHub</Link> */}
          {/* <Link href="https://instagram.com/..." target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-black">Instagram</Link> */}
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="mt-4 grid gap-4">
              {/* Inserisci qui i link per mobile alle pagine interne */}
              {/* ESEMPIO: */}
              {/* <Link href="/mensa" className="text-sm font-medium text-gray-700 hover:text-black">Mensa</Link> */}

              {/* Inserisci qui i link per mobile a GitHub, Instagram, ecc. */}
              {/* ESEMPIO: */}
              {/* <Link href="https://github.com/..." target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-black">GitHub</Link> */}
              {/* <Link href="https://instagram.com/..." target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-black">Instagram</Link> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
