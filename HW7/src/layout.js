import Link from "next/link";
import { FiltersProvider } from "@/context/filtersContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FiltersProvider>
          <header>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/categories">Categories</Link>
            </nav>
          </header>
          <main>{children}</main>
        </FiltersProvider>
      </body>
    </html>
  );
}
