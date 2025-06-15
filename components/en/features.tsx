import {
  UploadCloud,
  Lock,
  Download,
  FileText,
  Settings,
  BarChart,
  Layers,
  Hammer
} from 'lucide-react';

export default function Features() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className='text-4xl text-purple-400 font-black mb-10'>Our Tool Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <UploadCloud className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Blazing-fast uploads</h3>
            <p className="text-purple-600">Lightning quick file transfers with optimized compression</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Private file support</h3>
            <p className="text-purple-600">End-to-end encryption for sensitive documents</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Custom downloads</h3>
            <p className="text-purple-600">Configure download permissions and limits</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Metadata-rich listings</h3>
            <p className="text-purple-600">Detailed file information and searchable tags</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Easy configuration</h3>
            <p className="text-purple-600">Simple YAML-based setup and management</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Large file tracking</h3>
            <p className="text-purple-600">Monitor transfers of big files with progress indicators</p>
          </div>

          {/* Feature 7 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Flexible formats</h3>
            <p className="text-purple-600">Support for multiple output formats and conversions</p>
          </div>

          {/* Feature 8 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Force overwrite</h3>
            <p className="text-purple-600">Override existing files when necessary</p>
          </div>
        </div>
      </div>
    </section>
  );
}