'use client';

import { inViewThreshold } from '@/consts/ui';
import { useInView } from 'framer-motion';
import { Book } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { GrGithub } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { resumeSection } from '../common/navbar/consts';
import { useNavbar } from '../context/NavbarProvider';
import { Button } from '../ui/button';

const resumeId = resumeSection.href?.replace('#', '');

export const ResumeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: inViewThreshold });
  const { setCurrentSectionName } = useNavbar();

  useEffect(() => {
    if (isInView) {
      setCurrentSectionName(resumeSection.title.toLowerCase());
    }
  }, [isInView]);

  return (
    <div className='flex flex-col items-center gap-y-8' ref={ref} id={resumeId}>
      <div className='text-2xl md:text-[40px]'>Download resume</div>
      <Link
        href='https://drive.google.com/file/d/11rjkxKEYvRjuDcGRuMUOEGolcvfeqGgh/view?usp=drive_link'
        target='_blank'
      >
        <Button variant='outline' className='flex w-fit gap-x-1'>
          <Book size={16} /> Resume
        </Button>
      </Link>
      <div className='py-1' />
      <div className='text-2xl md:text-[40px]'>Or contact me through</div>
      <div className='flex flex-wrap justify-center gap-3'>
        <Link href='mailto:Tanishsingla51@gmail.com' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <MdEmail /> tanishsingla51@gmail.com
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
