import Header from "@/components/en/header";
import Features from "@/components/en/features";
import FlyingFile from "@/components/en/flyingfile";
import Final from "@/components/en/final";
import Demo from "@/components/en/demo";

export default function Page() {
  return (
    <>
      <main id="main-scroll" className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section className="relative">
          <FlyingFile />
        </section>
        <section className="h-screen snap-start">
          <Header/>
        </section>
        <section className="h-screen snap-start flex justify-center items-center bg-white">
          <Demo/>
        </section>
        <section className="h-screen snap-start flex justify-center items-center bg-white">
          <Features/>
        </section>
        <section id="footer" className="h-screen snap-start flex justify-center items-center">
          <Final/>
        </section>
      </main>
    </>
  );
}
