import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-secondary-dark flex justify-between px-[20%] py-4">
      <div className="">
        <Link href="/">
          <a
            className="font-semibold text-2xl"
            onClick={() => {
              window.location.reload();
            }}
          >
            Home
          </a>
        </Link>
      </div>
      <div className=""></div>
    </nav>
  );
};

export default NavBar;
