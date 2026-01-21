'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link href="/" style={{ marginRight: 10, color: pathname === "/" ? "red" : "white" }}>Home</Link>
      <Link href="/about" style={{ marginRight: 10, color: pathname === "/about" ? "red" : "white" }}>About</Link>
      <Link href="/products" style={{ marginRight: 10, color: pathname === "/products" ? "red" : "white" }}>Products</Link>
      <Link href="/contact" style={{ marginRight: 10, color: pathname === "/contact" ? "red" : "white" }}>Contact</Link>
    </nav>
  )
}

export default Navbar;
