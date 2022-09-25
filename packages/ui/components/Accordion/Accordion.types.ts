import { ReactNode } from 'react';

export interface Release {
  artists: string;
  title: string;
  catalogue: string;
  description: string;
  trackLink: string;
  link: string;
  img: string;
  thumbnail: string;
}
export interface Artist {
  artists: string;
  photo: string;
  bio: string;
  trackLink: string;
  soundcloud: string;
}
export interface AccordionProps {
  children?: ReactNode;
  data?: Release[] | Artist[];
  index?: number;
  active?: number;
}
