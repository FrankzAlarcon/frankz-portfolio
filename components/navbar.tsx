import Link from "next/link";

export default function NavBar() {
  return (
    <header id="home" className="absolute left-0 top-0 z-50 w-full">
      <nav className="p-4 shadow-sm bg-opacity-20 bg-blue-100">
        <ul className=" flex justify-center gap-10 text-sm">
          <li className="font-bold uppercase underline-animated md:text-base"><Link href="#home">Home</Link></li>
          <li className="font-bold uppercase underline-animated md:text-base"><Link href="#education">Education</Link></li>
          <li className="font-bold uppercase underline-animated md:text-base"><Link href="#projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}
