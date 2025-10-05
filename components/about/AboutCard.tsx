'use client';

import { AvatarImage } from '@radix-ui/react-avatar';
import { FadeIn } from '../common/animations/FadeIn';
import { Avatar } from '../ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { AboutText } from './AboutText';

export const AboutCard = () => {
  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <CardTitle>About me</CardTitle>
          <CardDescription>
            Full-Stack Developer specializing in AI-Powered Applications
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col-reverse items-center gap-x-10 gap-y-8 md:flex-row'>
          <AboutText />
          <Avatar className='h-full w-full rounded-lg md:w-[40%]'>
            <AvatarImage src='https://avatars.githubusercontent.com/u/131950694?v=4' />
          </Avatar>
        </CardContent>
      </Card>
    </FadeIn>
  );
};
