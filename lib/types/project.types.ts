export interface Project {
  id: string;
  title: string;
  category: string;
  brandColor: string;
  description: string;
  features: string[];
  technologies: string[];
  platforms: ('web' | 'android' | 'ios')[];
  images: {
    web?: string[];
    mobile?: string[];
  };
}

