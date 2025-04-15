
import Link from "next/link";

export default function Navbar() {
  return (
     <div>
      <section></section>
      <nav className="bg-black ">
        <ul className="flex justify-center gap-6 p-4 text-white">
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Projects</Link></li>
          <li><Link href="/">Skill</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>
      <section></section>
     </div>
      );
    
}
