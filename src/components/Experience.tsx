const experiences = [
  {
    title: 'Software Engineer',
    company: 'Invisible Technologies Inc',
    period: 'October 2021 – January 2025',
    achievements: [
      'Developed and maintained products generating over 75% of the company\'s $100M ARR.',
      'Led breakdown of development work into actionable stories and epics.',
      'Conducted detailed code reviews and authored technical documentation to enhance team quality.',
      'Migrated legacy codebases to modern tech stacks within a 6-month timeline.'
    ]
  },
  {
    title: 'Chief Technical Advisor',
    company: 'Konectify Technologies',
    period: 'April 2021 – May 2022',
    achievements: [
      'Advised a small engineering team on technical strategy and architecture.',
      'Ensured implementation of best practices, driving technical success.'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Konectify Technologies',
    period: 'August 2018 – April 2021',
    achievements: [
      'Contributed to 90% of company revenue through development of high-impact web apps.',
      'Led full project lifecycle, ensuring timely and budget-compliant delivery.',
      'Spearheaded the adoption of best coding practices, testing, and security measures.',
      'Optimized app performance for scalability and responsiveness.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-indigo-600 pl-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="text-lg text-indigo-600 dark:text-indigo-400">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}