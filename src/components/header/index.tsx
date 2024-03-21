import React from "react";

// components
import LinkBase from "@/components/ui/link";

// constants
import { HEADER_LINKS } from "./constants";

function Header() {
  return (
    <header className="flex items-center justify-between p-10 py-8 bg-secondary text-primary">
      <h1>Hearts for Palestine</h1>
      <div className="flex gap-5 items-center">
        {HEADER_LINKS?.map(({ label, link }, index) => (
          <LinkBase
            href={link}
            className="px-3 py-2 capitalize hover:bg-danger rounded-lg transition-all duration-300"
            key={index}
          >
            {label}
          </LinkBase>
        ))}
      </div>
    </header>
  );
}

export default Header;
