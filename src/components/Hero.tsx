'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-pink-50/50 to-lavender-100/30">
      <div className="relative w-[300px] h-[400px] shadow-lg">
        <Image
          src="/me.jpg" // Correct path for an image in the public folder
          alt="Profile"
          width={300} // Specify width
          height={400} // Specify height
          className="object-cover"
          priority
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold mb-2">
          Hi, I am
          <span className="block text-pink-500 text-4xl">Nishita Shah</span>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          A UI/UX designer who turns ideas into seamless user experiences and a
          coder who brings them to life. When I'm not busy perfecting pixels or
          debugging code, you'll catch me vibing with creative chaos – crafting
          videos, scripting stories, or weaving emotions into poems. Designing,
          coding, and a touch of creativity – that's my thing!
        </p>
      </div>
    </section>
  )
}
