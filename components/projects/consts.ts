import { IconType } from 'react-icons';
import { BiLogoFlask } from 'react-icons/bi';
import { FaPython, FaReact } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiNextdotjs, SiTypescript, SiExpress, SiMysql } from 'react-icons/si';
import { ProjectCardProps } from './ProjectCard';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiFastapi } from 'react-icons/si';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiArduino } from 'react-icons/si';
import { SiGooglecolab } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { SiSelenium } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaGolang } from 'react-icons/fa6';
import { GrGraphQl } from 'react-icons/gr';
import { DiRedis } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPhp } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { SiSolidity, SiTailwindcss, SiPostgresql, SiCloudflare, SiNodedotjs, SiLua, SiEthereum } from 'react-icons/si';

export const techIconMap: Record<string, IconType> = {
  'Next.js': SiNextdotjs,
  Flask: BiLogoFlask,
  TypeScript: SiTypescript,
  'Vercel KV': IoLogoVercel,
  Python: FaPython,
  React: FaReact,
  'React.js': FaReact,
  Supabase: RiSupabaseFill,
  FastAPI: SiFastapi,
  'Google Cloud': DiGoogleCloudPlatform,
  'Express.js': SiExpress,
  AWS: FaAws,
  SQL: TbSql,
  MySQL: SiMysql,
  'C++': CgCPlusPlus,
  Arduino: SiArduino,
  'Google Colab': SiGooglecolab,
  Prisma: SiPrisma,
  MongoDB: DiMongodb,
  Selenium: SiSelenium,
  'React Native': TbBrandReactNative,
  Go: FaGolang,
  GraphQL: GrGraphQl,
  Redis: DiRedis,
  JavaScript: IoLogoJavascript,
  PHP: FaPhp,
  Java: FaJava,
  Solidity: SiSolidity,
  TailwindCSS: SiTailwindcss,
  PostgreSQL: SiPostgresql,
  Cloudflare: SiCloudflare,
  'Node.js': SiNodedotjs,
  Lua: SiLua,
  AOS: SiEthereum,
  'Ethers.js': SiEthereum,
};

export const projects: ProjectCardProps[] = [
  {
    title: 'relay',
    subTitle:
      'Full-stack real-time chat application with chat rooms, presence tracking, and robust NextAuth authentication.',
    description:
      'Developed a high-performance, real-time chat application using Next.js, Socket.IO, and Prisma. The application features user authentication via NextAuth, secure authorization, and efficient event handling for real-time messaging, chat room creation, and user presence tracking.',
    technologies: [
      'Next.js',
      'React.js', // Using the mapping 'React.js'
      'Prisma',
      'Node.js', // Socket.IO is based on Node.js
    ],
    details:
      'This project focuses on robust real-time communication. It implements a full-stack architecture with Next.js for the frontend, Socket.IO for live updates, and Prisma for database management. Key features include user authentication and authorization using NextAuth/JWT/session-based methods, message persistence, and efficient event handling to ensure a seamless chat experience.',
    graphic: '/projects/relay.png',
    github: 'https://github.com/tanishsingla51/relay',
    liveLink: 'https://relay-lovat.vercel.app/'
  },
  {
    title: 'euno',
    subTitle:
      'AI-powered voice companion app that enables natural, empathetic conversations with users in real time.',
    description:
      'Designed to help people relieve stress, loneliness, and freely share their thoughts through interactive voice dialogues..',
    technologies: [
      'Next.js', // Using the mapping 'React.js'
      'Supabase',
      'Websocket', // From Node.js/Express.js
      'next-auth', // From Node.js/Express.js
      'Razorpay',
    ],
    details:
      'Built with cutting-edge speech recognition, emotion detection, and AI-driven conversation intelligence for a human-like experience.',
    graphic: '/projects/euno.png',
    github: 'https://github.com/ikunal-04/talking',
    liveLink: 'https://www.euno.live/'
  },
  {
    title: 'ArchitectureAI',
    subTitle:
      'AI-powered tool that generates complete, structured backend applications from natural language prompts using Google Gemini AI.',
    description:
      'A powerful AI-powered tool that generates complete, structured backend applications based on natural language descriptions. Built with a React frontend and Node.js backend, leveraging Google\'s Gemini AI for intelligent code generation.',
    technologies: [
      'React.js', // Using the mapping 'React.js'
      'Node.js',
      'JavaScript', // Mapping 'Javascript' to 'JavaScript'
      'TailwindCSS',
      'PostgreSQL',
      'Prisma',
    ],
    details:
      'ArchitectureAI is designed for rapid backend development. It uses the Gemini API for AI-Powered Generation, creating well-formatted, structured code with syntax highlighting (Markdown Output). The platform supports Multiple Technologies and frameworks, featuring a Modern UI built with React and Tailwind CSS, and offering a Copy to Clipboard feature for generated code.',
    graphic: '/projects/architectureai.png',
    github: 'https://github.com/tanishsingla51/ArchitectureAI',
    liveLink: 'https://architecture-ai-eta.vercel.app/'
  },
  
];