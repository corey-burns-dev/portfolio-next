import { Flex } from "@chakra-ui/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    minWidth="100%"
    minHeight="100vh"
    wordBreak="break-word"
  >
    {children}
  </Flex>
);

export default Layout;
