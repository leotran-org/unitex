import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TalentXpo from "@/components/TalentXpo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import UniXpo from "@/components/UniXpo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
         <UniXpo />
        <TalentXpo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
