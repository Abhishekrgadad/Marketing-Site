import { Briefcase, Users, Clock, TrendingUp } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300">
                <div className="flex-shrink-0">
                  <Briefcase className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Industry-Relevant Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Work on real projects using cutting-edge technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Expert Mentorship
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Learn directly from industry professionals with personalized guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Flexible Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose your domain and learn at your own pace.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Career Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Build your portfolio and boost your employability.
                  </p>
                </div>
              </div>
            </div>

            <a href="#internships" className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
              Explore Opportunities
            </a>
          </div>

          {/* Right side image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-lg shadow-xl transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 