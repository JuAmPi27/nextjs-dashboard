import '@/app/ui/global.css';
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Esto es parte del layout!</h1>
        {children}
        <footer className='py-10 flex justify-center item-center'>Hecho por Vercel</footer>
      </body>
    </html>
  );
}
