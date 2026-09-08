import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers'; // 👈 ADD THIS IMPORT

export const metadata: Metadata = {
  title: 'PAY.3WORDPIN — Simple Payments Mapped to a 3 Word Pin address.',
  description: 'PAY.3WORDPIN makes payments simple.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers> {/* 👈 WRAP CHILDREN HERE */}
      </body>
    </html>
  );
}
