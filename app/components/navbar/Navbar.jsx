'use client'
import MediaQuery from "react-responsive";
import { Mobile } from "./screens/adaptive/Mobile";
import { Normal } from "./screens/normal/Normal";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className={nunito.className}>
      <MediaQuery minWidth={576}>
        <Normal />
      </MediaQuery>

      <MediaQuery maxWidth={576}>
        <Mobile />
      </MediaQuery>
    </div>
  );
};

export { Navbar };
