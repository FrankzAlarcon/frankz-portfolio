"use client"

import Image from 'next/image';
import { ReactTyped as Typed } from 'react-typed';

export default function Presentation() {
  return (
    <div className="flex flex-col items-center mt-16 mb-16 p-2">
      <div className="rounded-full w-40 h-40 mb-4 md:w-60 md:h-60">
        <Image
          src="/img/me.jpg"
          width="400"
          height="400"
          className="rounded-full"
          alt="Me"
        />
      </div>
      <h2 className="text-4xl text-center font-bold text-gray-800">
        Hi, My name is
        {' '}
        <span className="text-blue-600 font-black text-4xl">Frankz Alarcón</span>
      </h2>

      <p className="font-bold text-3xl text-center text-gray-800">
        I&apos;m
        {' '}
        <span className="text-4xl text-center text-blue-600 font-black">
          <Typed
            strings={['Backend Developer', 'Frontend Developer', 'Software Engineer']}
            typeSpeed={100}
            backSpeed={70}
            loop
          />
        </span>
      </p>
      <p className="text-gray-800 text-xl font-bold">
        from Orellana, Ecuador 🇪🇨
      </p>
    </div>
  );
}
