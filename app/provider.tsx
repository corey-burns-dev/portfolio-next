"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import system from "@theme/index";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
