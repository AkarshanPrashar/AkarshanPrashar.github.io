// import "./globals.css";
// import { ThemeProvider } from "./components/ThemeProvider";
// import Navbar from "./components/Navbar";
// import ClientLoader from "./components/ClientLoader";
// import PageTransition from "./components/PageTransition";

// export const metadata = {
//   title: "A. Architect — Portfolio",
//   description: "Architecture portfolio showcasing residential, commercial, and conceptual design projects.",
// };

// export default function RootLayout({ children }) {
//   return (
//     // suppressHydrationWarning: data-theme is set by client JS from localStorage,
//     // so server and client will initially differ — this silences that expected mismatch.
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap"
//           rel="stylesheet"
//         />
//         {/* Blocking script: reads theme from localStorage BEFORE React hydrates
//             so there is zero flash of the wrong theme on page load */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               try {
//                 var t = localStorage.getItem('arch-theme') || 'blueprint';
//                 document.documentElement.setAttribute('data-theme', t);
//               } catch(e) {}
//             `,
//           }}
//         />
//       </head>
//       <body suppressHydrationWarning>
//         <ThemeProvider>
//           <ClientLoader />
//           <PageTransition />
//           <Navbar />
//           <main style={{ paddingTop: '64px' }}>
//             {children}
//           </main>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
























// For Maintainence Page
import "./globals.css";

import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import ClientLoader from "./components/ClientLoader";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "Portfolio Under Construction",
  description: "Portfolio is currently being redesigned.",
};

const MAINTENANCE_MODE = true;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Cormorant+Garamond:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning>
        {MAINTENANCE_MODE ? (
          children
        ) : (
          <ThemeProvider>
            <ClientLoader />
            <PageTransition />
            <Navbar />

            <main style={{ paddingTop: "64px" }}>
              {children}
            </main>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}








