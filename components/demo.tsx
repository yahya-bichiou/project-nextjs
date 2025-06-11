import { TerminalMockup } from "@/components/TerminalMockup";

export default function Demo() {
  return (
    <section className="h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto gap-12">
          {/* Left side */}
          <div className="w-1/2">
            <h2 className="text-6xl font-bold mb-8 text-purple-400">Demo</h2>
            <h2 className="text-3xl font-bold mb-4 text-black">How to Use UT CLI</h2>
            <p className="text-lg font-medium text-gray-500 leading-relaxed">
              Upload files effortlessly from your terminal with just one command. Simply install the <code>ut</code> tool, run commands, and your file will be securely uploaded in seconds — no hassle, no GUI needed.
            </p>
          </div>

          {/* Right side */}
          <div className="w-1/2">
            <TerminalMockup>
              {`$ ut upload large-video.mp4 --progress
Found 1 file (4.2 GB)
⚠ Large file detected (compression recommended)
✔ Creating upload session...
Uploading: ..... 42% (1.2GB/4.2GB)
    Estimated time remaining: 12 minutes
    Network: 15.4 Mbps (stable)

$ ut status
Active Uploads:
  - large-video.mp4 (42% complete)
  - backup.zip (queued)

Completed Uploads:
  - image.jpg (2.4 MB, 3 minutes ago)`}
            </TerminalMockup>
            <p className="text-sm mt-6 text-gray-400">
              Supported file types: Images (JPG, PNG, GIF), Documents (PDF, TXT, JSON, XML, CSV), and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
