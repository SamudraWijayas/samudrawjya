"use client";

export default function Footer() {
  return (
    <footer className="bg-[#10172a]/50 border border-white/10 backdrop-blur text-white text-center py-4 mt-12 pb-30 md:pb-0">
      <p className="text-sm">
        © 2025 Samodra WIjaya Samdoria. All rights reserved.
      </p>
      <p className="text-sm mt-2 mb-4">
        <a
          href="https://wa.me/6281931724964"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Contact Me
        </a>
      </p>
    </footer>
  );
}
