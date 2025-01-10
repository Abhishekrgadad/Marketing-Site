import { ArrowRight } from 'lucide-react';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { InternshipCategories } from '../components/InternshipCategories';
import { InternshipCard } from '../components/InternshipCard';
import { SuccessStories } from '../components/SuccessStories';
import { FAQSection } from '../components/FAQSection';
import { ContactUs } from '../components/ContactUs';

const FEATURED_INTERNSHIPS = [
  {
    id: '1',
    position: 'Full Stack Developer Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    duration: '6 months',
    category: 'Full Stack Development',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    description: 'Join our team to build scalable web applications using modern technologies like React, Node.js, and AWS.'
  },
  {
    id: '2',
    position: 'AI Research Intern',
    company: 'AI Labs',
    location: 'Boston, MA',
    duration: '4 months',
    category: 'Artificial Intelligence & Machine Learning',
    logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=100&h=100&fit=crop',
    description: 'Work on cutting-edge AI projects involving natural language processing and computer vision.'
  },
  {
    id: '3',
    position: 'UX Design Intern',
    company: 'DesignHub',
    location: 'Remote',
    duration: '3 months',
    category: 'UI/UX Design',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop',
    description: 'Create beautiful and intuitive user interfaces for web and mobile applications.'
  }
];



export function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Launch Your Career with Amazing Internships
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Connect with top companies and kickstart your professional journey
            </p>
            <a href="#internships" className="bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
              Browse Internships
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutus"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Sleuthor is dedicated to connecting talented students with exceptional internship opportunities. 
              We believe in the power of hands-on experience and mentorship to shape the next generation of industry leaders.
            </p>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="p-4">
                <div className="text-blue-500 text-4xl font-bold mb-2">20+</div>
                <div className="text-gray-900 dark:text-white font-semibold">Partner Companies</div>
              </div>
              <div className="p-4">
                <div className="text-blue-500 text-4xl font-bold mb-2">100+</div>
                <div className="text-gray-900 dark:text-white font-semibold">Successful Placements</div>
              </div>
              <div className="p-4">
                <div className="text-blue-500 text-4xl font-bold mb-2">95%</div>
                <div className="text-gray-900 dark:text-white font-semibold">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-lg shadow-xl transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Internships</h2>
          <a href="/internships" className="flex items-center text-blue-500 hover:text-blue-600 font-medium">
            View all
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_INTERNSHIPS.map(internship => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </section>

          <WhyChooseUs/>  

          <InternshipCategories/>

          <FAQSection/>

          <SuccessStories/>

          <ContactUs/>

    </div>
  );
}