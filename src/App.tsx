import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">CA</span>
            <div className="flex items-center space-x-4">
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-0">
        <Hero />
        <Experience />
        <Skills />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
            <div className="flex flex-wrap gap-6">
              <a href="mailto:cetricka@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Mail className="w-5 h-5" />
                cetricka@gmail.com
              </a>
              <a href="tel:+254115685790" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Phone className="w-5 h-5" />
                +254 115 685 790
              </a>
              <a href="https://www.linkedin.com/in/cetrick-afundi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/nairobitech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Cetrick Afundi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;