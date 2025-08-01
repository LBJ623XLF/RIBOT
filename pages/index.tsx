import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="text-xl font-bold">RIBOT</div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#introduction" className="hover:text-gray-400">Introduction</a>
          <a href="#product" className="hover:text-gray-400">Product</a>
          <a href="#solution" className="hover:text-gray-400">Solution</a>
          <a href="#contact" className="hover:text-gray-400">Contact / Support</a>
        </div>
        <div className="w-8 h-8">
          <Image src="/ribot-logo.svg" alt="Logo" width={32} height={32} />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="introduction" className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold mb-4">RIBOT 001</h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          A desktop robot, minimal and magnetic. Designed for Apple ecosystem. Foldable. Expressive. Charged.
        </p>
        <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Buy Now — $99.99
        </button>
      </section>

      {/* Product Image Section */}
      <section id="product" className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Image
            src="/ribot001.png"
            alt="RIBOT 001"
            width={800}
            height={600}
            className="rounded-xl shadow-xl mx-auto"
          />
        </div>

        <div className="mt-12 text-left max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>✓ MagSafe-compatible (iPhone 14/15/16)</li>
            <li>✓ Built-in Apple Watch + AirPods charging</li>
            <li>✓ Folding design, ultra-compact</li>
            <li>✓ Customizable screen expressions</li>
            <li>✓ Designed with Apple-style minimalism</li>
          </ul>
        </div>
      </section>

      {/* Placeholder for Solution */}
      <section id="solution" className="py-20 text-center border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-2">Our Solution</h2>
        <p className="text-gray-400">Coming soon...</p>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="text-center py-8 border-t border-gray-800 text-sm text-gray-500">
        <p>🐐👑</p>
        <p className="mt-2">© 2025 RIBOT. All rights reserved.</p>
      </footer>
    </div>
  );
}
