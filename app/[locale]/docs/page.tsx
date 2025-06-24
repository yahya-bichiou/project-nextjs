"use client";
import { useTranslations, useLocale } from "next-intl";
import {
  Code,
  Terminal,
  Download,
  Settings,
  CheckCircle,
  File,
} from "lucide-react";
import Logo from "@/components/logo";
import Footer from "@/components/footer";

export default function Page() {
  const t = useTranslations("Docs");
  const locale = useLocale();

  return (
    <div
      className="min-h-screen text-purple-400"
      style={{ backgroundColor: "#140227" }}
    >
      {/* Header */}
      <header
        className="pb-5 mb-3 border-b border-purple-400/20 sticky top-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(20, 2, 39, 0.9)" }}
      >
        <Logo local={locale} />
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-4 flex items-center gap-3">
            <File className="w-8 h-8" />
            Documentation
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            {t("subtitle")}
          </p>
          <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">{t("icon")}</p>
                <p className="text-gray-400 text-sm">{t("desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
            <Download className="w-6 h-6" />
            Installation
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {t("title1")}
              </h3>
              <div className="bg-black/40 border border-purple-400/20 rounded-lg p-4 space-y-2">
                <div>
                  <code className="text-gray-400 font-mono">
                    git clone https://github.com/username/ut.git <br />
                    cd uploadthing-cli <br />
                    go build -o ut
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
            <Settings className="w-6 h-6" />
            Configuration
          </h2>

          <div className="space-y-4 mt-5">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {t("desc2")}
              </h3>
              <div className="bg-black/40 border border-purple-400/20 rounded-lg p-4 space-y-2">
                <div>
                  <code className="text-gray-400 font-mono">
                    # Set your secret key
                    <br />
                    ut config set-secret sk_your_secret_key_here
                    <br />
                    <br />
                    # View current configuration
                    <br />
                    ut config show
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commands */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
            <Code className="w-6 h-6" />
            {t("title3")}
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {t("desc3")}
              </h3>
              <div className="bg-black/40 border border-purple-400/20 rounded-lg p-4 space-y-2">
                <div>
                  <code className="text-gray-400 font-mono">
                    # Basic upload
                    <br />
                    ut push image.jpg
                    <br />
                    <br />
                    # Upload with progress tracking (automatic for large files)
                    <br />
                    ut push large-video.mp4
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-5">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {t("desc4")}
              </h3>
              <div className="bg-black/40 border border-purple-400/20 rounded-lg p-4 space-y-2">
                <div>
                  <code className="text-gray-400 font-mono">
                    # Download to current directory
                    <br />
                    ut fetch abc123-example.jpg
                    <br />
                    <br />
                    # Download with custom filename
                    <br />
                    ut fetch abc123-example.jpg -o myfile.jpg
                    <br />
                    <br />
                    # Download to specific directory
                    <br />
                    ut fetch abc123-example.jpg -o ./downloads/
                    <br />
                    <br />
                    # Download with progress bar
                    <br />
                    ut fetch abc123-example.jpg --progress
                    <br />
                    <br />
                    # Download private file (requires API key)
                    <br />
                    ut fetch abc123-example.jpg --private
                    <br />
                    <br />
                    # Force overwrite existing files
                    <br />
                    ut fetch abc123-example.jpg --force
                    <br />
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-5">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {t("title4")}
              </h3>
              <div className="bg-black/40 border border-purple-400/20 rounded-lg p-4 space-y-2">
                <div>
                  <code className="text-gray-400 font-mono">
                    # List all files
                    <br />
                    ut list
                    <br />
                    <br />
                    # List with file details
                    <br />
                    ut list --verbose
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Command Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
            <Terminal className="w-6 h-6" />
            {t("title5")}
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                `ut fetch` options
              </h3>
              <div className="bg-black/40 border border-purple-400/20 rounded-lg p-4 space-y-2">
                <div>
                  <code className="text-gray-400 font-mono">
                    # Custom output path or directory
                    <br />
                    -o, --output
                    <br />
                    <br />
                    # Overwrite existing files without prompt
                    <br />
                    -f, --force
                    <br />
                    <br />
                    # Show download progress
                    <br />
                    -p, --progress
                    <br />
                    <br />
                    # Download private file (requires API key)
                    <br />
                    --private
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-5">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                `ut list` options
              </h3>
              <div className="bg-black/40 border border-purple-400/20 rounded-lg p-4 space-y-2">
                <div>
                  <code className="text-gray-400 font-mono">
                    # Show detailed file information
                    <br />
                    -v, --verbose
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
