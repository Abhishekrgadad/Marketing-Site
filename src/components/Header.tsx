import { Bell, ChevronDown, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInternshipOpen, setIsInternshipOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Sluthor</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</a>
            
            <div className="relative"
              onMouseEnter={() => setIsInternshipOpen(true)}
              onMouseLeave={() => setIsInternshipOpen(false)}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center">
                Internships
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {isInternshipOpen && (
                <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Full Stack Development</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Artificial Intelligence & ML</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Data Science & Analytics</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Digital Marketing & Social Media</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">UI/UX Design</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Cloud Computing</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Cybersecurity</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Business Analytics</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">DevOps & MLOps</a>
                    <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Mobile App Development</a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center">
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="/internships" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Internships</a>
                    <a href="/projects" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Projects</a>
                    <a href="/webinars" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Webinars</a>
                    <a href="/placement-guides" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Placement Guides</a>
                  </div>
                </div>
              )}
            </div>

            <a href="#aboutus" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About Us</a>
            <a href="#contactus" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact Us</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="relative">
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Bell className="h-6 w-6" />
              </button>

              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      No notifications available
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5951/5951752.png"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <ChevronDown className="h-4 w-4" />
              </button>

              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}