import Logo from "./logo";
export default function Header() {
  return (
    <header className="h-screen">
      <div className={" h-full flex flex-col"}>
        <Logo/>
        {/* Slogan vertically centered in remaining space */}
        <div className="flex-1 flex flex-col justify-end pb-60 pl-40">
          <h2 className="text-6xl font-bold text-purple-400">
            The fastest way
          </h2>
          <h2 className="text-4xl font-bold mt-2">
            To handle file uploads
          </h2>
          <h2 className="text-2xl mt-8 text-gray-300">
            Uploading should be simple. That’s why we built UploadThing
          </h2>
          <h2 className="text-2xl mt-2 text-gray-300">
            A seamless way to handle files from button to backend.
          </h2>
          <h2 className="text-2xl mt-2 text-gray-300">
            Fast, secure, and built for developers
          </h2>
          <div className="flex items-center gap-4">
            <button className="bg-purple-400 hover:bg-purple-500 transition-colors duration-200 rounded-lg text-white mt-5 px-6 py-3 font-medium">
              Get Started
            </button>
            <a href="/docs" className="flex items-center gap-1 text-purple-400 hover:text-purple-500 transition-colors mt-5 group">
              Documentation <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
