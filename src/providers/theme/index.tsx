import { ThemeProvider } from "next-themes";

import React, { PropsWithChildren } from "react";

function Provider({ children }: PropsWithChildren) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default Provider;
