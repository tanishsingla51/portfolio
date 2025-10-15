'use client';

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '../ui/accordion';
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from '../ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { FC, ReactNode, Ref, useState } from 'react';
import { techIconMap } from './consts';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaAppStore, FaGithub } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { Skeleton } from '../ui/skeleton';
import { TbFileReport } from 'react-icons/tb';
import { PiSlideshowDuotone } from 'react-icons/pi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';
import { TbWorldWww } from 'react-icons/tb';

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
} from '../ui/alert-dialog';
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  title: ReactNode;
  subTitle: ReactNode;
  description: ReactNode;
  technologies: string[];
  details: ReactNode;
  graphic: string;
  github?: string;
  videoDemo?: string;
  website?: string;
  report?: string;
  slides?: string;
  instructorGuide?: string;
  studentGuide?: string;
  liveLink?: string;
  app?: string;
  ref?: Ref<HTMLDivElement>;
}

export const getProjectCardId = (title: ReactNode) => {
  if (typeof title !== 'string') {
    return '';
  }

  return title
    .trim() 
    .replaceAll(' ', '-')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase();
};

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subTitle,
  description,
  technologies,
  details,
  graphic,
  github,
  videoDemo,
  website,
  report,
  slides,
  instructorGuide,
  studentGuide,
  liveLink,
  app,
  ref,
  ...rest
}) => {
  const [isGraphicHovered, setIsGraphicHovered] = useState<boolean>(false);

  const onMouseEnterGraphic = () => setIsGraphicHovered(true);

  const onMouseLeaveGraphic = () => setIsGraphicHovered(false);

  return (
    <Card {...rest} id={getProjectCardId(title)}>
      <CardHeader className='px-3 md:px-6'>
        <CardTitle className='text-xl md:text-2xl'>{title}</CardTitle>
        <CardDescription className='text-xs md:text-sm'>
          {subTitle}
        </CardDescription>
      </CardHeader>
      <CardContent className='md:text-md flex flex-col-reverse items-center gap-4 px-3 text-sm md:flex-row md:gap-8 md:px-6'>
        <div className='flex w-full flex-col' ref={ref}>
          <div className='md:text-md text-sm'>{description}</div>
          <div className='py-2' />
          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech) => {
              const TechIcon = techIconMap[tech];

              return (
                <Badge
                  key={tech}
                  className='gap-x-1 px-1.5 py-0 text-[0.6rem] md:px-2.5 md:py-0.5 md:text-[0.75rem]'
                  variant='outline'
                >
                  {TechIcon && <TechIcon />}
                  {tech}
                </Badge>
              );
            })}
          </div>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='md:text-md text-sm'>
                ⚙️ More details
              </AccordionTrigger>
              <AccordionContent className='md:text-md text-sm'>
                {details}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className='py-2' />
          <div className='flex flex-wrap gap-2'>
            {website && (
              <Link href={website} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <CgWebsite /> Website
                </Button>
              </Link>
            )}
            {github && (
              <Link href={github} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <FaGithub /> Github
                </Button>
              </Link>
            )}
            {liveLink && (
              <Link href={liveLink} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <TbWorldWww /> Live Demo
                </Button>
              </Link>
            )}
          </div>
        </div>
       
      </CardContent>
    </Card>
  );
};
