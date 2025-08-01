import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="text-center py-24 px-6">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl font-bold mb-6">
          RIBOT 001
        </motion.h1>
        <p className="text-xl text-gray-400 mb-10">
          A desktop robot, minimal and magnetic. Designed for Apple ecosystem. Foldable. Expressive. Charged.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-xl bg-white text-black hover:bg-gray-200" onClick={() => alert('🛠 Purchase coming soon!')}>
          Buy Now – $99.99
        </Button>
      </section>
      <section className="px-6 py-16 grid gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Image src="/ribot001.png" alt="RIBOT 001" width={800} height={600} className="rounded-2xl shadow-xl w-full" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>✓ MagSafe-compatible (iPhone 14/15/16)</li>
            <li>✓ Built-in Apple Watch + AirPods charging</li>
            <li>✓ Folding design, ultra-compact</li>
            <li>✓ Customizable screen expressions</li>
            <li>✓ Designed with Apple-style minimalism</li>
          </ul>
        </motion.div>
      </section>
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">About RIBOT</h3>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          RIBOT is a robotics design studio founded to merge high-end industrial design with playful robotics. We aim to put emotionally engaging and highly functional robots on every desk.
        </p>
      </section>
      <footer className="bg-black text-center text-gray-600 py-10 text-sm">
        <Image src="/ribot-logo.svg" alt="RIBOT Logo" width={48} height={48} className="mx-auto mb-4" />
        <p>© 2025 RIBOT. All rights reserved.</p>
      </footer>
    </main>
  );
}