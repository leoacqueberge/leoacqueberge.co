import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photos | Léo Acqueberge',
  description: 'Photography portfolio of Léo Acqueberge',
};

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 