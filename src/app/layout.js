import { Analytics } from "@vercel/analytics/react"

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
          <main className="m-auto p-4">
            {children}
          </main>

          {/* Vercel analytics! */}
          <Analytics/>
        </body>
    </html>
  );
}
