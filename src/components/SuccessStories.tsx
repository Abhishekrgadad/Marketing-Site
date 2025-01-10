import { useEffect, useState } from 'react';

const SUCCESS_STORIES = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    story: 'The internship opportunity completely changed my career trajectory. I gained invaluable experience that led to my dream job.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'AI Research Scientist',
    company: 'OpenAI',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    story: 'Starting as an AI intern, I discovered my passion for machine learning. The mentorship was exceptional.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    story: 'The hands-on experience helped me develop the skills needed to transition into product management.'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'UX Designer',
    company: 'Apple',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    story: 'My internship gave me real-world experience in user research. Now I lead design projects at Apple.'
  },
  {
    id: '5',
    name: 'Priya Patel',
    role: 'Data Scientist',
    company: 'Amazon',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    story: 'The practical experience in data analytics was crucial for landing my current role.'
  }
];

export function SuccessStories() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (SUCCESS_STORIES.length * 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="success"className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Hear from our alumni who transformed their careers through our internships
          </p>
        </div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 "></div>

          <div className="flex space-x-8" style={{ transform: `translateX(${position}px)` }}>
            {[...SUCCESS_STORIES, ...SUCCESS_STORIES].map((story, index) => (
              <div
                key={`${story.id}-${index}`}
                className="flex-none w-[300px] transform transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {story.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {story.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {story.company}
                  </p>
                  
                  <div className="relative">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-4 h-8 w-8 text-gray-200 dark:text-gray-700" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300 text-sm italic px-4">
                      {story.story}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 