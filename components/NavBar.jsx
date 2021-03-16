import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="row justify-content-between">
      <div className="col-xs-2">
        <Link href="/">
          <a>
            <div className="logo" />
          </a>
        </Link>
      </div>
      <div className="col-xs-10">
        <div className="row">
          <div className="links col">Home</div>
          <div className="links col">About</div>
          <div className="links col">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
