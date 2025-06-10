

export default function Footer() {
  return (
    <section id="footer" className="flex flex-col min-h-screen w-full">
      {/* Main content centered */}
      <div className="flex-grow flex flex-col justify-center items-center gap-6 px-4">
        <h2 className="text-4xl font-bold text-center">
          Ready to simplify your file uploads?
        </h2>
        <h2 className="text-3xl font-bold text-center text-gray-400">
          Get started with UploadThing today!
        </h2>
        <button className="bg-purple-400 hover:bg-purple-500 transition-colors duration-200 rounded-lg text-white mt-5 px-6 py-3 font-medium">
              Get Started
        </button>
      </div>

      {/* Footer fixed at bottom */}
      <footer className="w-full py-6 bg-white">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} UploadThing. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
