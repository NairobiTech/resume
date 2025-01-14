import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm Cetrick Afundi</span>
                <span className="block text-indigo-600 dark:text-indigo-400">Software Engineer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Passionate about building scalable applications and solving complex problems. 
                With expertise in full-stack development and a track record of delivering 
                high-impact solutions.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                    Get in touch
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 md:py-4 md:text-lg md:px-10">
                    View Projects
                  </a>
                </div>
              </div>
              <div className="mt-6 flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Remote, Anywhere</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}