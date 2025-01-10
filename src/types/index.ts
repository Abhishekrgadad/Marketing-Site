export interface Internship {
  id: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  category: string;
  logo: string;
  description: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  story: string;
}