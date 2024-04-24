import NavBar from "@/components/common/navigationbar";

import "/public/assets/css/global.css";
import "/public/assets/css/fonts.css"

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
          <main className="max-w-5xl m-auto p-4 pt-0">
            {children}
          </main>
        </body>
    </html>
  );
}
