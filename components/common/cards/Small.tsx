import { Grid, GridProps } from "@chakra-ui/react";

const SmallCard = (props: GridProps) => (
  <Grid
    display="grid"
    h="full"
    bg="white"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    rounded="md"
    shadow="lg"
    {...props}
  />
);

export default SmallCard;
