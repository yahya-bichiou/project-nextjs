import Header from "../components/header";
import Features from "../components/features";
import FlyingFile from "../components/flyingfile";
import Footer from "../components/footer";
import Demo from "../components/demo";

export default function Page() {
  return (
    <>
      <main id="main-scroll" className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <FlyingFile />
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
          <Footer/>
        </section>
      </main>
    </>
  );
}
