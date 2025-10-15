/* eslint-disable react/no-unescaped-entities */
import { Button } from '../ui/button';
import { Book } from 'lucide-react';
import { LinkText } from '../common/LinkText';
import Link from 'next/link';
import { GrGithub } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';

export const AboutText = () => {
  return (
    <div className='flex flex-col gap-y-3 text-sm md:text-[1rem] md:leading-snug'>
      <div>
        Hi! I'm *Tanish Singla*, a passionate *Full-Stack Developer* specializing in building modern web applications with a focus on *AI-powered solutions* and seamless user interfaces. I thrive on technical challenges and am dedicated to deepening my understanding of cutting-edge technology.
      </div>
      <div>
        My flagship project, *ArchitectureAI*, is an AI-powered platform that generates backend APIs from natural language prompts, leveraging the *Google Gemini API* with React, Node.js, and PostgreSQL. I also developed **relay**, a full-stack real-time chat application using Next.js, Socket.IO, and Prisma, which includes features like chat room creation, presence tracking, and robust authentication/authorization via NextAuth. This experience highlights my versatility in developing scalable, full-stack solutions.
      </div>
      <div>
        I have a strong foundation in *Data Structures & Algorithms* (600+ problems solved on LeetCode)and was selected among the *Top 30 Students in India* for the Arweave India Cohort, an all-expenses-paid Web3 cohort. I'm currently pursuing a B.Tech in Electronics & Communication Engineering from the *Maharaja Agrasen Institute of Technology* (2022-2026).
      </div>
      <div>
        I specialize in technologies like *Java, JavaScript, TypeScript, React.js, Next.js, and Node.js* , and I work with databases including *MongoDB, PostgreSQL, and Supabase*. I am adept at integrating *LLMs/AI APIs* and utilizing tools like *Docker, Clerk, and NextAuth* for robust, full-stack development.
      </div>
      <div className='pt-3' />
      <div className='flex flex-wrap gap-3'>
        <Link
          href='https://drive.google.com/file/d/1OW2ntqqltNYT6FolIKVOOaxB1M1Ump8K/view?usp=sharing'
          target='_blank'
        >
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <Book size={16} /> Resume
          </Button>
        </Link>
        <Link href='https://github.com/tanishsingla51' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <GrGithub size={16} /> Github
          </Button>
        </Link>
        <Link href='https://x.com/tanishsingla51' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <FaXTwitter size={16} />
            Twitter
          </Button>
        </Link>
      </div>
    </div>
  );
};