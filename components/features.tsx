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
    <>
    <section className="py-20 mr-120">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 text-lg">
          <div className="group flex items-center gap-3 mb-2 transition-colors">
            <i><UploadCloud className="w-10 h-10 text-purple-400 group-hover:text-purple-300" /></i>
            <span className='leading-loose text-2xl text-purple-400 group-hover:text-purple-300'>
              <strong>Blazing-fast uploads</strong>
            </span>
          </div>
          <div className="group flex items-center gap-3 mb-2 transition-colors">
            <i><Lock className="w-10 h-10 text-purple-400 group-hover:text-purple-300" /></i>
            <span className='leading-loose text-2xl text-purple-400 group-hover:text-purple-300'><strong>Private file support</strong></span>
          </div>
          <div className="group flex items-center gap-3 mb-2 transition-colors">
            <i><Download className="w-10 h-10 text-purple-400 group-hover:text-purple-300" /></i>
            <span className='leading-loose text-2xl text-purple-400 group-hover:text-purple-300'><strong>Custom downloads</strong></span>
          </div>
          <div className="group flex items-center gap-3 mb-2 transition-colors">
            <i><FileText className="w-10 h-10 text-purple-400 group-hover:text-purple-300" /></i>
            <span className='leading-loose text-2xl text-purple-400 group-hover:text-purple-300'><strong>Metadata-rich file listings</strong></span>
          </div>
          <div className="group flex items-center gap-3 mb-2 transition-colors">
            <i><Settings className="w-10 h-10 text-purple-400 group-hover:text-purple-300" /></i>
            <span className='leading-loose text-2xl text-purple-400 group-hover:text-purple-300'><strong>Easy config management</strong></span>
          </div>
          <div className="group flex items-center gap-3 mb-2 transition-colors">
            <i><BarChart className="w-10 h-10 text-purple-400 group-hover:text-purple-300" /></i>
            <span className='leading-loose text-2xl text-purple-400 group-hover:text-purple-300'><strong>Large file tracking</strong></span>
          </div>
          <div className="group flex items-center gap-3 mb-2 transition-colors">
            <i><Layers className="w-10 h-10 text-purple-400 group-hover:text-purple-300" /></i>
            <span className='leading-loose text-2xl text-purple-400 group-hover:text-purple-300'><strong>Flexible output formats</strong></span>
          </div>
          <div className="group flex items-center gap-3 mb-2 transition-colors">
            <i><Hammer className="w-10 h-10 text-purple-400 group-hover:text-purple-300" /></i>
            <span className='leading-loose text-2xl text-purple-400 group-hover:text-purple-300'><strong>Force overwrite when needed</strong></span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
