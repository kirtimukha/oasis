import Navigation from "@/app/components/Navigation";
import {Logo} from "@/app/components/Logo";

export const metadata = {
  title: 'The Wild Oasis',
  description: 'Generated by Next.js',
  keywords: 'NEXTJS Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="wrapper">
          <header>
            <Logo />
            <Navigation />
          </header>
          <main>
            {children}
          </main>
          <footer>Copyrights by The Wild Oasis</footer>
        </div>
      </body>
    </html>
  )
}
