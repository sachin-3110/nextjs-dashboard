import '@/app/ui/global.css';

import { Dasc, inter } from '@/app/ui/font'; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
