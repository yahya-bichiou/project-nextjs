import Header from '@/components/header';
import Features from '@/components/features';
import FlyingFile from '@/components/flyingfile';
import Final from '@/components/final';
import Demo from '@/components/demo';

export default function Page() {
  return (
    <>
      <main
        id="main-scroll"
        className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        <section className="relative">
          <FlyingFile />
        </section>
        <section className="h-screen snap-start">
          <Header />
        </section>
        <section className="h-screen snap-start flex justify-center items-center bg-white">
          <Demo />
        </section>
        <section className="h-screen snap-start flex justify-center items-center bg-white">
          <Features />
        </section>
        <section id="footer" className="h-screen snap-start flex justify-center items-center">
          <Final />
        </section>
      </main>
    </>
  );
}
