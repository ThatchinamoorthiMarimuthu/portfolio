import React from "react";

export const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        bg-[#0B0B0B]/95
        backdrop-blur-md
        flex
        justify-end
        items-center
        p-3
        px-8
        z-50
        shadow-lg
        [clip-path:polygon(25%_0%,100%_0%,100%_100%,30%_100%)]
      "
    >
      <div
        className="
          flex
          justify-evenly
          items-center
          gap-8
          lg:gap-16
          font-roboto
        "
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="
              relative
              text-white
              text-[16px]
              font-medium
              transition-all
              duration-300
              hover:text-[#82b7ef]
              group
            "
          >
            {link.name}

            <span
              className="
                absolute
                left-0
                -bottom-1
                h-[2px]
                w-0
                bg-[#82b7ef]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </a>
        ))}
      </div>
    </nav>
  );
};