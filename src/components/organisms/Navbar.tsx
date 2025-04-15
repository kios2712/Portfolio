import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-1 mt-10 bg-white">
      <section className="w-20 p-2 text-sm text-white rounded-sm bg-black/80">
        Kiosma <br /> Rincones
      </section>
      <nav className="w-full rounded-sm shadow-lg bg-black/80">
        <ul className="flex justify-center gap-10 p-4 text-sm text-white ">
          <li className="border-b-2 border-black">
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <section className="w-20 p-2 text-sm rounded-sm bg-black/80">
      </section>
    </div>
  );
}