import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Studio from "@/components/Studio";
import Skillset from "@/components/Skillset";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Studio />
        <Skillset />
        <ContactMe />
      </main>
    </>
  );
}
