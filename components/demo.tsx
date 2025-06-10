import { TerminalMockup } from "@/components/TerminalMockup";

export default function Demo() {
  return (
    <section className="h-screen flex items-center">
      <div className="container mx-auto px-6 pr-150">
        <div className="max-w-2xl"> {/* Controls the left-aligned width */}
          <h2 className="text-3xl font-bold mb-8 text-black">Upload files to UploadThing:</h2>
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
          <h2 className="text-sm mt-8 text-gray-400">Supported file types: Images (JPG, PNG, GIF), Documents (PDF, TXT, JSON, XML, CSV), and more.</h2>
        </div>
      </div>
    </section>
  );
}