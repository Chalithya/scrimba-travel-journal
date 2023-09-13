import React from "react";
import GlobSVG from "../images/globe.svg";

export default function Header() {
  return (
    <header>
      <img src={GlobSVG} />
      <h1>My Travel Blog.</h1>
    </header>
  );
}
