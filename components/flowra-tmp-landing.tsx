import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Logo Section */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#bdb4eb] to-[#bdb4eb]/80 rounded-full flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-[#160c2c]" />
          </div>
          {/* <div className="text-left">
            <h1 className="text-4xl font-bold text-white">
              flowra <span className="text-blue-400">ai</span>
            </h1>
          </div> */}
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Flowra AI – Your Smart
            <br />
            Student Assistant
          </h2>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link href="/chat" className="inline-block">
            <Button
              size="lg"
              className="bg-[#bdb4eb]/10 hover:bg-[#bdb4eb]/20 border border-[#bdb4eb]/30 text-white px-12 py-6 text-lg font-medium rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Try Now
            </Button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#bdb4eb]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#bdb4eb]/8 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
