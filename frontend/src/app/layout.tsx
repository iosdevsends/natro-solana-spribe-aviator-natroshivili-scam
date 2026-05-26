import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteUrl } from '@/lib/seo';

const gscToken = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...(gscToken
    ? { verification: { google: gscToken } }
    : {}),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
