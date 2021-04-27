import React from "react";
import Link from "./Link";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Login
      </Link>
      <Link href="/signup" className="item">
        Signup
      </Link>
    </div>
  );
};

export default Header;
