"use client";

import { ChakraProvider } from "@chakra-ui/react";
import system from "@theme/index";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
