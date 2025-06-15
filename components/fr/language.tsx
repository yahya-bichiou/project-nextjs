import { Languages } from "lucide-react";
import Link from "next/link";

export default function Language() {
  return (
    <>
        {/* Language switcher button */}
        <div className="absolute top-6 right-12 z-100">
          <Link href="/en" className="flex items-center gap-2 text-purple-300 hover:text-purple-500 transition-colors">
            <Languages className="w-5 h-5" />
            <span className="text-sm font-medium">FR</span>
          </Link>
        </div>
    </>
  );
}