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
          The Future of Desktop Robotics — Minimal. Magnetic. Modular.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-xl bg-white text-black hover:bg-gray-200" onClick={() => alert('🛠 Purchase functionality coming soon!')}>
          Buy Now
        </Button>
      </section>
      <section className="px-6 py-16 grid gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Image src="/ribot001.png" alt="RIBOT 001" width={800} height={600} className="rounded-2xl shadow-xl w-full" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl font-semibold mb-6">Meet RIBOT 001</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>✓ MagSafe-compatible: works with iPhone 14/15/16 series</li>
            <li>✓ Built-in Apple Watch and AirPods charging</li>
            <li>✓ Foldable design inspired by Anker aesthetics</li>
            <li>✓ Animated screen for customizable expressions</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-2xl mb-2 font-bold">Price</h3>
            <p className="text-xl text-red-400 line-through">$149.99 USD</p>
            <p className="text-xl text-green-400">Now $99.99 USD (33% OFF)</p>
            <Button className="mt-4 text-lg px-6 py-3 rounded-2xl shadow-xl bg-white text-black hover:bg-gray-200" onClick={() => alert('🛠 Add to cart coming soon!')}>
              Add to Cart
            </Button>
          </div>
        </motion.div>
      </section>
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
          <p className="text-gray-400 text-lg">
            RIBOT is a robotics brand born from the fusion of art, engineering, and Apple-grade industrial design. Our mission is to bring expressive, modular robots to every desk and every day.
          </p>
        </div>
      </section>
      <footer className="bg-black text-center text-gray-600 py-10 text-sm">
        <Image src="/ribot-logo.svg" alt="RIBOT Logo" width={48} height={48} className="mx-auto mb-4" />
        <p>© 2025 RIBOT. All rights reserved.</p>
      </footer>
    </main>
  );
}