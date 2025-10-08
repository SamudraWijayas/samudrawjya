"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/samudrawijaya"); // ganti dengan halaman tujuan kamu
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen  text-center">
      {/* Loader */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-12 h-12 border-4 border-dashed border-gray-500 rounded-full flex items-center justify-center mb-6"
      >
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </motion.div>

      {/* Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-300 text-xl font-semibold tracking-wide"
      >
        Loading...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-gray-500 text-sm mt-2"
      >
        Redirecting to My Page...
      </motion.p>
    </div>
  );
}
