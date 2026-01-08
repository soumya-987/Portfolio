import './globals.css'
import Navbar from './components/Navbar';
export const metadata={
  title: 'Soumya Jain - Portfolio',
  description: 'Full Stack Developer portfolio built with Next.js'
};
export default function RootLayout({
  children,
}:{
  children:React.ReactNode;

}) {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
          <main>{children}</main>
      </body>
    </html>
  );
}