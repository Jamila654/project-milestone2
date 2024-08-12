import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 bg-gradient-to-r from-red-950 to-slate-900 p-4">
      <div className=" flex  items-center justify-between max-w-screen-lg mx-auto">
        <div className="text-white text-[10px] md:text-xl font-semibold">My Portfolio</div>
        <div className="flex items-center gap-4">
          <Link href="#home" className="text-white text-sm md:text-base hover:text-green-500">Home</Link>
          <Link href="#about" className="text-white text-sm md:text-base hover:text-green-500">About Me</Link>
          <Link href="#contact" className="text-white text-sm md:text-base hover:text-green-500">Contact Me</Link>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Jamila654">
              <Image
                src="/git.png"
                alt="GitHub"
                width={24}
                height={24}
                className="text-white"
              />
            </Link>
            <Link href="https://linkedin.com/in/jamila-yaqoob-dhedhi">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

