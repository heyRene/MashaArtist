import { Header } from "@/components/Header/Header";
import { Footer} from "@/components/Footer/Footer";
import "./styles/fonts.css";
import "./globals.css";
import "normalize.css";

// export const metadata: Metadata = {
//   title: "Мария Волкова — живопись",
//   description: "Сайт-портфолио художницы Марии Волковой",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className="container">
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
