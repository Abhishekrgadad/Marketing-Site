

export function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Sleuthor Logo" className="h-40 w-40 object-contain" />
            </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Connecting talented students with amazing internship opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">About</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#aboutus" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Internships</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">For Students</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#internships" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Browse Internships</a></li>
                <li><a href="#success" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Success Stories</a></li>
                <li><a href="#internships" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Resources</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Contact</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#contactus" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Support</a></li>
                <li><a href="#contactus" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Contact Us</a></li>
                <li><a href="#faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Sleuthor. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                  Terms & Conditions
                </a>
                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}