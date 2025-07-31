import Image from "next/image";
import { Poppins, Roboto } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "800",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white md:min-h-[50vh] flex flex-col md:flex-row w-full">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-10 max-w-md mx-auto">
          <p
            className={`font-bold tracking-wide text-2xl md:text-4xl mb-4 flex items-center gap-2 ${poppins.className}`}
          >
            🔗 Shrink URLs, Stretch Possibilities
          </p>
          <p
            className={`text-base md:text-xl leading-relaxed text-gray-800 ${roboto.className}`}
          >
            No more long, messy URLs. With TinyLinks, you get short, memorable
            links that are perfect for branding, analytics, and seamless sharing
            without login.
          </p>
          <Link href="shorten"><button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Start Shortening
          </button></Link>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-64 md:h-auto md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/vector.png"
            alt="link shortener vector"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </>
  );
}
