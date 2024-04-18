import NavBar from "@/components/common/navbar";

import "/public/assets/css/global.css";
import "/public/fonts/Line_Seed_Sans_TH/fonts.css"

export const metadata = {
  title: "bluesonic.",
  description: "#OrientationCamp67",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <title>bluesonic.</title>
        </head>
        <body>
          <NavBar />
          <main className="max-w-5xl m-auto p-4">
            {children}
          </main>
        </body>
    </html>
  );
}
