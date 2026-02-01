import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Service',
  description:
    'Read our privacy policy and terms & conditions. Learn how Leaf Solutions protects your data and outlines our service agreements.',
  openGraph: {
    title: 'Privacy Policy & Terms of Service | Leaf Solutions',
    description:
      'Read our privacy policy and terms & conditions. Learn how Leaf Solutions protects your data and outlines our service agreements.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

