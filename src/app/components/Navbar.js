"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) => 
    pathname === path
      ? "bg-gray-200 px-4 py-1 rounded-full"
      : "text-gray-600";

  return (
    <header className="flex justify-between items-center py-4 container mx-auto">
      <h1 className="text-2xl font-bold">
        <img src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-e048-622f-b3ab-a3a425f607dd/raw?se=2025-04-08T15%3A31%3A23Z&sp=r&sv=2024-08-04&sr=b&scid=346ab805-bee8-55e8-8fce-9a6333ceaad9&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-08T13%3A19%3A49Z&ske=2025-04-09T13%3A19%3A49Z&sks=b&skv=2024-08-04&sig=B1fewWsbyDbw8gF8%2B%2B6u4rvMy1x2XvUtL6InjD7EW0c%3D" alt="Logo" className="h-10 inline-block" />
      </h1>
      <nav className="space-x-4">
        <Link href="/" className={linkStyle("/")}>Home</Link>
        <Link href="/about" className={linkStyle("/about")}>About</Link>
        <Link href="/menu" className={linkStyle("/menu")}>Menu</Link>
        <Link href="/favorit" className={linkStyle("/favorit")}>Favorit</Link>
      </nav>
    </header>
  );
}
