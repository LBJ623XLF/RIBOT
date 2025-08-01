import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10">
      <Head>
        <title>RIBOT 001</title>
        <meta name="description" content="Minimal magnetic robot for Apple ecosystem" />
      </Head>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">RIBOT 001</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          A desktop robot, minimal and magnetic. Designed for Apple ecosystem. Foldable. Expressive. Charged.
        </p>
      </header>

      {/* Buy Now */}
      <div className="flex justify-center mb-10">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-300 transition">
          Buy Now – $99.99
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center mb-12">
        <Image
          src="/ribot-image.jpg"
          alt="RIBOT 001"
          width={500}
          height={300}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Features */}
      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>✓ MagSafe-compatible (iPhone 14/15/16)</li>
          <li>✓ Built-in Apple Watch + AirPods charging</li>
          <li>✓ Folding design, ultra-compact</li>
          <li>✓ Customizable screen expressions</li>
          <li>✓ Designed with Apple-style minimalism</li>
        </ul>
      </section>

      {/* About */}
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About RIBOT</h2>
        <p className="text-lg mb-4">
          RIBOT is a robotics design studio founded to merge high-end industrial design with playful robotics. We aim to
          put emotionally engaging and highly functional robots on every desk.
        </p>
        <div className="text-4xl">🐐👑</div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 RIBOT. All rights reserved.
      </footer>
    </div>
  );
}
