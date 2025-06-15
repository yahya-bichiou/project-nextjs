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
        <h2 className='text-4xl text-purple-400 font-black mb-10'>Nos Fonctionnalités</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fonctionnalité 1 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <UploadCloud className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Téléchargements ultra-rapides</h3>
            <p className="text-purple-600">Transferts de fichiers éclairs avec compression optimisée</p>
          </div>

          {/* Fonctionnalité 2 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Fichiers privés</h3>
            <p className="text-purple-600">Chiffrement de bout en bout pour documents sensibles</p>
          </div>

          {/* Fonctionnalité 3 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Téléchargements personnalisés</h3>
            <p className="text-purple-600">Configurer les permissions et limites de téléchargement</p>
          </div>

          {/* Fonctionnalité 4 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Métadonnées détaillées</h3>
            <p className="text-purple-600">Informations complètes et tags recherchables</p>
          </div>

          {/* Fonctionnalité 5 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Configuration facile</h3>
            <p className="text-purple-600">Installation et gestion simplifiée via YAML</p>
          </div>

          {/* Fonctionnalité 6 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Suivi des gros fichiers</h3>
            <p className="text-purple-600">Surveillance des transferts avec indicateurs de progression</p>
          </div>

          {/* Fonctionnalité 7 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Formats flexibles</h3>
            <p className="text-purple-600">Prise en charge de multiples formats et conversions</p>
          </div>

          {/* Fonctionnalité 8 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Écrasement forcé</h3>
            <p className="text-purple-600">Remplacer les fichiers existants si nécessaire</p>
          </div>
        </div>
      </div>
    </section>
  );
}