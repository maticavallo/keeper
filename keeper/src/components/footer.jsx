import React from "react";

const Footer = () => {
  const author = "@maticavallo";
  const year = new Date().getFullYear();

  return (
    <footer>
      Copyright © {author} {year}
    </footer>
  );
};

export default Footer;
