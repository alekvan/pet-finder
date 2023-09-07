import { nunito, lora } from './fonts';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Pet Finder',
  description: 'Generate a poster of your missing pet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.0.1/dist/leaflet.css'
          crossOrigin='anonymous'
          as='style'
        />
      </head>
      <body className={`${nunito.className}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
