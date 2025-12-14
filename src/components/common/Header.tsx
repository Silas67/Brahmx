import React from "react";

export const navbar = [
  { label: "Services", href: "/" },
  { label: "Portfolio", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];
const Header = () => {
  return (
    <div className="w-full absolute top-0 left-0 h-[10vh] font-bold  flex items-center justify-between px-[30px] py-[20px] text-sm z-50 ">
      <div className="uppercase heading">
        <h1 className=" ">Abram.</h1>
      </div>

      <div>
        <nav className="lg:flex gap-8 uppercase hidden">
          {navbar.map((el, id) => (
            <div key={id} className="">
              {el.label}
            </div>
          ))}
        </nav>
        <div className="lg:hidden">Menu</div>
      </div>
    </div>
  );
};

export default Header;
