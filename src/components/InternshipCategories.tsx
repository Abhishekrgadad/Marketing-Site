import {
  Code2,
  Brain,
  Database,
  Share2,
  Palette,
  Cloud,
  Shield,
  BarChart2,
  Settings,
  Smartphone,
  Edit,
  Cpu
} from 'lucide-react';

export function InternshipCategories() {
  const internships = [
    {
      title: "Full Stack Development",
      icon: Code2,
      description: "Master both frontend and backend development with modern frameworks and tools.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Artificial Intelligence & ML",
      icon: Brain,
      description: "Learn to build intelligent systems and implement machine learning algorithms.",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Data Science & Analytics",
      icon: Database,
      description: "Transform raw data into meaningful insights using statistical analysis.",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Digital Marketing & Social Media",
      icon: Share2,
      description: "Create impactful digital campaigns and master social media strategies.",
      color: "from-red-500 to-red-600"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Design beautiful, intuitive interfaces and enhance user experiences.",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      description: "Deploy and manage applications on leading cloud platforms.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Protect systems and networks from digital threats and attacks.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Business Analytics",
      icon: BarChart2,
      description: "Drive business decisions through data-driven insights and analysis.",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "DevOps & MLOps",
      icon: Settings,
      description: "Streamline development operations and machine learning workflows.",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Build native and cross-platform mobile applications.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Content Creation & Strategy",
      icon: Edit,
      description: "Create compelling content and develop effective content strategies.",
      color: "from-rose-500 to-rose-600"
    },
    {
      title: "Internet of Things (IoT)",
      icon: Cpu,
      description: "Build smart connected devices and IoT solutions.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section 
      id="internships" 
      className="py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Internships We Provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => {
            const IconComponent = internship.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${internship.color} mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {internship.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {internship.description}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white rounded-md transition duration-300 flex items-center justify-center space-x-2 w-full">
                    <span>Apply Now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 