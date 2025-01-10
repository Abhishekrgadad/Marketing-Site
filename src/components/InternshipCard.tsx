import { MapPin, Clock } from 'lucide-react';
import type { Internship } from '../types';

interface Props {
  internship: Internship;
}

export function InternshipCard({ internship }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <img src={internship.logo} alt={internship.company} className="h-10 w-10 rounded-full" />
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">{internship.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{internship.position}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{internship.company}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{internship.description}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {internship.location}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {internship.duration}
          </div>
        </div>
      </div>
    </div>
  );
}