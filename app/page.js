import Head from 'next/head';
import Header from './components/Header/page';
import About from './components/About/page';
import Projects from './components/Projects/page';
import Testimonials from './components/Testimonials/page';
import Contact from './components/Contact/page';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>VideoAlchemist - Professional Video Editor</title>
        <meta name="description" content="Professional video editing services by Jimmy Turner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-black text-white py-4 text-center text-sm">
  <p>
    © {new Date().getFullYear()} OG Editor. All rights reserved. <br />
    Developed by <a 
      href="https://www.linkedin.com/in/mahenoor-salat" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-purple-500 hover:underline"
    >
      Mahenoor Salat
    </a>
  </p>
</footer>

    </div>
  );
}
