import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PAY.3WORDPIN — Simple Payments Mapped to a 3 Word Pin address.',
  description:
    'PAY.3WORDPIN makes payments simple.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
