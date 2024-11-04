
import "@/app/_styles/globals.css";
import {Josefin_Sans} from "next/font/google";
import Header from "@/app/_components/Header"; //next/font/local 로 로컬에 있는 폰트를 가져올 수도 있다

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap" //default -> josefin when it donloaded,
});


// console result 에서
// 1. className의 밸류를 jsx 의 클래스 네임 자리에 사용한다.
// 2. 또는 josefin.className으로 밸류를 할당한다.
// {
//   style: {
//     fontFamily: "'__Josefin_Sans_2ad2c0', '__Josefin_Sans_Fallback_2ad2c0'",
//       fontStyle: 'normal'
//   },
//   className: '__className_2ad2c0'
// }

export const metadata = {
  // title: 'The Wild Oasis',
  // description: 'Generated by Next.js',
  // keywords: 'NEXTJS Application',
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome - The Wild Oasis"
  },
  description: {
    template: "%s",
    default: "Luxurious cabin hotel, located in Dolomities in Italy",
  }
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*<body className={`bg-blue-900 min-h-screen text-primary-100 __className_2ad2c0`}>*/}
      <body className={`bg-primary-900 min-h-screen text-primary-100 ${josefin.className}
        min-h-screen flex flex-col antialiased`}>
        
          
          <Header />
          
          <div className={`flex-1 px-8 py-12 relative`}>
            <main className={`max-w-7xl mx-auto`}>
              {children}
            </main>
          </div>
        
      </body>
    </html>
  )
}
