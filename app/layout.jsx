import "./globals.scss";
import { Nunito_Sans } from "next/font/google";
import { Logo } from "./components/logo/Logo";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const ButtonContact = () => {
  return (
    <div className="header_btn">
      <button className={`${nunito.className} btn`}>Contact Us</button>
    </div>
  );
};

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <header className="header">
          <Logo logoTitle={`Enver`} />

          <Navbar />

          <ButtonContact />
        </header>

        <div className="">{children}</div>

        <footer className="footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
