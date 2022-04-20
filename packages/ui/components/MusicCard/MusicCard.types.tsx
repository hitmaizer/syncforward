export interface MusicCardProps {
  children?: React.ReactNode;
  imgSrc?: string;
  showPlay?: boolean;
  soundcloudLink?: string;
  title?: string;
  iconSrc?: string;
  onClick?: (a: string) => void;
}
