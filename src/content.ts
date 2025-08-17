import { 
  Cpu, 
  Wifi, 
  Zap, 
  Settings, 
  Radio,
  CircuitBoard,
  Settings2, 
  Brain, 
  Code, 
  BarChart,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image?: string;
  github: string;
  status?: string;
  tech?: string[];
  live?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  url?: string;
}

export interface Interest {
  name: string;
  icon: LucideIcon;  // Changed this line
  color: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  gpa: string;
  period: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  name: string;
  logo: string;
}

export interface Images {
  profile: string;
  certificates: {
    [key: string]: string;
  };
  projects: {
    [key: string]: string;
  };
}

export const featuredProjects: Project[] = [
  {
    title: "Smart Irrigation System",
    description: "Advanced IoT irrigation system integrating soil moisture sensors, weather data, and automated control to optimize water usage in agricultural fields.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Nirmalagk20",
    status: "2024",
    tech: ["IoT", "Arduino", "Python", "C", "Sensors"]
  },
  {
    title: "Automated Traffic Light System",
    description: "Smart traffic control system leveraging image processing to adjust signal timing based on real-time vehicle density estimation.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Nirmalagk20",
    status: "2024",
    tech: ["OpenCV", "Python", "C", "Image Processing", "Embedded"]
  },
  {
    title: "The Best AI Mentor",
    description: "AI-powered wearable app offering real-time personalized guidance and nudges, acting as a trusted companion and productivity enhancer.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Nirmalagk20",
    status: "2024",
    tech: ["TypeScript", "Generative AI", "Edge functions"]
  },
  {
    title: "Hiring AI",
    description: "AI-driven recruitment platform to streamline candidate selection and screening using machine learning for automated resume screening and candidate matching.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Nirmalagk20",
    status: "2024",
    tech: ["Machine Learning", "TypeScript", "Frontend", "Backend"]
  }
];


export const certificates: Certificate[] = [
  {
    title: "Python for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "November 2024",
    image: "/certificates/python-simplilearn.jpg",
    description: "Completed comprehensive Python programming course covering fundamentals and advanced concepts.",
    url: "https://drive.google.com/file/d/1dFpOP-os672vAkCkyyuzLN1ahInrTF9c/view?usp=drivesdk"
  },
  {
    title: "Innovation in IoT Embedded System Applications",
    issuer: "Sir M. Visvesvaraya Institute of Technology",
    date: "November 2024",
    image: "/certificates/iot-embedded.jpg",
    description: "Participated in three-day Student Development Programme covering IoT architecture, sensor integration, and microcontroller programming.",
    url: "https://drive.google.com/file/d/1CXIVvbPqgeCaybMHenXMDVSwvstHsZJF/view?usp=drivesdk"
  }
];

export const education: Education = {
  school: "Sir M Visvesvaraya Institute Of Technology",
  degree: "B.E in Electronics And Telecommunication Engineering",
  location: "Bangalore, India",
  gpa: "7.9",
  period: "2022 - Present"
};

export const socialLinks = [
  { icon: Github, url: 'https://github.com/Nirmalagk20', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/nirmala-kankanwadi-9547b3330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: Mail, url: 'mailto:nirmalagk52@gmail.com', label: 'Email' }
];


export const interests: Interest[] = [
  { name: "Embedded Systems", icon: Cpu as LucideIcon, color: '#FF6B6B' },
  { name: "IoT Development", icon: Wifi as LucideIcon, color: '#4ECDC4' },
  { name: "Microcontrollers", icon: Zap as LucideIcon, color: '#45B7D1' },
  { name: "Automation", icon: Settings as LucideIcon, color: '#FECA57' },
  { name: "Telecommunication Networks", icon: Radio as LucideIcon, color: '#0077b6' },
  { name: "VLSI Design", icon: CircuitBoard as LucideIcon, color: '#FFD166' },
  { name: "Circuit Design", icon: Settings2 as LucideIcon, color: '#43aa8b' },
  { name: "Wireless Communication", icon: Wifi as LucideIcon, color: '#9D4EDD' },
  { name: "Machine Learning", icon: Brain as LucideIcon, color: '#FF9FF3' },
  { name: "Software Development", icon: Code as LucideIcon, color: '#F95D6A' },
  { name: "Data Science", icon: BarChart as LucideIcon, color: '#4ECDC4' }
];


export const skills: Skill[] = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  { name: 'Google Colab', logo: 'https://colab.research.google.com/img/colab_favicon_256px.png' },
  { name: 'IoT', logo: 'https://cdn-icons-png.flaticon.com/512/2618/2618245.png' },
  { name: 'Embedded Systems', logo: 'https://cdn-icons-png.flaticon.com/512/1087/1087815.png' },
  { name: 'Machine Learning', logo: 'https://cdn-icons-png.flaticon.com/512/8618/8618883.png' }
];

export const images: Images = {
  // Use absolute path starting with '/'
  profile: '/images/nirmala-profile.jpg',
  certificates: {
    pythonSimplilearn: '/certificates/python-simplilearn.jpg',
    iotEmbedded: '/certificates/iot-embedded.jpg'
  },
  projects: {
    smartIrrigation: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    trafficLight: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
    aiMentor: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    hiringAI: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80'
  }
};

export const contactInfo = {
  email: 'nirmalagk52@gmail.com',
  location: {
    city: 'Bagalkot',
    state: 'Karnataka',
    country: 'India'
  },
  social: {
    github: 'https://github.com/Nirmalagk20',
    linkedin: 'https://www.linkedin.com/in/nirmala-kankanwadi-9547b3330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }
};

export const siteMetadata = {
  title: 'Nirmala Kankanwadi - Portfolio',
  description: 'Electronics & Telecommunication Engineering Student | Embedded Systems & IoT Developer',
  author: 'Nirmala Kankanwadi',
  siteUrl: 'https://nirmalagk20.github.io',
  keywords: [
    'Embedded Systems Developer',
    'IoT Engineer',
    'Electronics Engineering Student',
    'Microcontroller Programming',
    'Arduino Developer',
    'Sensor Integration'
  ]
};

export const navigation = {
  main: [
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]
};

export const formConfig = {
  initialState: {
    name: '',
    email: '',
    message: ''
  },
  placeholders: {
    name: 'Enter your name',
    email: 'Enter your email',
    message: 'Enter your message'
  },
  validation: {
    name: {
      required: 'Name is required',
      minLength: 2
    },
    email: {
      required: 'Email is required',
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    },
    message: {
      required: 'Message is required',
      minLength: 10
    }
  }
};

export const personalInfo = {
  name: "Nirmala Kankanwadi",
  title: "Electronics & Telecommunication Engineering Student",
  tagline: "Building Innovative Embedded Solutions for Tomorrow",
  location: "Bagalkot, Karnataka",
  about: `Electronics and Telecommunication Engineering student with expertise in embedded systems, IoT, and microcontroller programming. 
         Seeking opportunities to develop innovative embedded solutions that enhance automation and connectivity in modern technological applications.`,
  email: "nirmalagk52@gmail.com",
  resume: "/files/nirmala-resume.pdf",
  profileImage: images.profile
};

export const themeConfig = {
  colors: {
    primary: {
      from: "blue-400",
      via: "purple-500",
      to: "pink-400"
    },
    secondary: {
      from: "gray-900",
      via: "black",
      to: "gray-800"
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  }
};

export const achievements = [
  {
    title: "Python for Beginners Certification",
    description: "Simplilearn SkillUp - Certificate Code: 7560286",
    date: "November 2024"
  },
  {
    title: "IoT Embedded System Applications Workshop",
    description: "Sir M. Visvesvaraya Institute of Technology - 3-day Programme",
    date: "November 2024"
  },
  {
    title: "Smart Irrigation System Development",
    description: "Advanced IoT project with 50% water consumption reduction",
    date: "2024"
  }
];
