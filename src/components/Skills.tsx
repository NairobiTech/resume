const skills = [
  'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'Express.js',
  'Python', 'Docker', 'Kotlin', 'PostgreSQL', 'SQL', 'CSS', 'Tailwind CSS',
  'Firebase', 'Google Cloud', 'HTML5', 'Apollo', 'GraphQL', 'Next.js',
  'Django', 'Figma', 'Jira'
];

const gradients = [
  'from-blue-500 to-purple-500',
  'from-green-500 to-teal-500',
  'from-pink-500 to-rose-500',
  'from-yellow-500 to-orange-500',
  'from-indigo-500 to-blue-500',
  'from-purple-500 to-pink-500'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                bg-gradient-to-br ${gradients[index % gradients.length]}
                p-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200
                group relative overflow-hidden
              `}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
              <span className="text-white text-sm font-medium block text-center">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}