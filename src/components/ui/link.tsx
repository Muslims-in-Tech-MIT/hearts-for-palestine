import Link from "next/link";
import React from "react";

// utils
import { mergeClasses } from "@/utils";

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
};

function LinkBase({ className, href, children, ...restProps }: LinkProps) {
  return (
    <Link
      href={href}
      className={mergeClasses("text-lg no-underline", className)}
      {...restProps}
    >
      {children}
    </Link>
  );
}

export default LinkBase;
