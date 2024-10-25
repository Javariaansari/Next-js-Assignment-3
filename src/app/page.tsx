import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/project/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}