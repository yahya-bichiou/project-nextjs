'use client';
import { useTranslations } from 'next-intl';
import {UploadCloud,Lock,Download,FileText,Settings,BarChart,Layers,Hammer} from 'lucide-react';

export default function Features() {
    const t = useTranslations('Features');
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className='text-4xl text-purple-400 font-black mb-10'>{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <UploadCloud className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t("f1")}</h3>
            <p className="text-purple-600">{t("t1")}</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t("f2")}</h3>
            <p className="text-purple-600">{t("t2")}</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t("f3")}</h3>
            <p className="text-purple-600">{t("t3")}</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t("f4")}</h3>
            <p className="text-purple-600">{t("t4")}</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t("f5")}</h3>
            <p className="text-purple-600">{t("t5")}</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t("f6")}</h3>
            <p className="text-purple-600">{t("t6")}</p>
          </div>

          {/* Feature 7 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t("f7")}</h3>
            <p className="text-purple-600">{t("t7")}</p>
          </div>

          {/* Feature 8 */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t("f8")}</h3>
            <p className="text-purple-600">{t("t8")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}