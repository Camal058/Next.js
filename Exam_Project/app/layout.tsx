import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/common/Sidebar';


export const metadata: Metadata = {
  title: 'BankDash',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-[#F5F7FA]">{children}</main>
        </div>
      </body>
    </html>
  );
}