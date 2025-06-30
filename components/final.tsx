import { useTranslations } from 'next-intl';
import Footer from '@/components/footer';
import Button from './ui/button';
import Bgeffect from './ui/bg-effect';

export default function Final() {
  const t = useTranslations('Final');

  return (
    <section className="flex flex-col min-h-screen w-full relative bg-gray-900 overflow-hidden">
      <Bgeffect />

      <div className="flex-grow flex flex-col justify-center items-center gap-8 px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white">{t('title')}</h2>
        <h2 className="text-2xl text-center text-purple-200">{t('subtitle')}</h2>
        <Button text={t('button')} />
      </div>
      <Footer />
    </section>
  );
}
