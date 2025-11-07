import { Box, chakra, List, SimpleGrid, VStack } from "@chakra-ui/react";
import { SectionContainer, SectionHeading } from "@common/index";
import { aboutMe, randomFacts } from "@configs/about";
import Image from "next/image";
import aboutBGImage from "../../public/bg/leaves.webp";

export default function AboutContainer() {
  return (
    <SectionContainer id="about">
      <VStack px={{ base: "2em", md: "3em" }}>
        <Box pos="relative" overflow="hidden" w="full">
          <SectionHeading title="about" />
          <Image
            alt=""
            src={aboutBGImage}
            quality={80}
            fill
            sizes="100vw"
            style={{
              opacity: 0.2,
              objectFit: "cover",
            }}
          />
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={7} p={["1em", "2em"]}>
          <List.Root gap={3} listStyleType="none">
            <List.Item textStyle="list-heading" display="flex" alignItems="center" gap={2}>
              <List.Indicator color="red.500">
                <chakra.svg boxSize={5} viewBox="0 0 24 24" fill="currentColor">
                  <title>Email icon</title>
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </chakra.svg>
              </List.Indicator>
              {randomFacts.title}
            </List.Item>
            {randomFacts.facts.map((fact) => (
              <List.Item
                fontWeight="400"
                color="#606060"
                opacity="1"
                transform="matrix(1,0,0,1,0,0)"
                fontSize={{ base: "xs", md: "sm" }}
                key={`random-fact-${fact.title}`}
              >
                {fact.title}
              </List.Item>
            ))}
          </List.Root>
          <List.Root gap={3} listStyleType="none">
            <List.Item textStyle="list-heading" display="flex" alignItems="center" gap={2}>
              <List.Indicator color="red.500">
                <chakra.svg boxSize={5} viewBox="0 0 24 24" fill="currentColor">
                  <title>Email icon</title>
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </chakra.svg>
              </List.Indicator>
              {aboutMe.title}
            </List.Item>
            {aboutMe.excerpt.map((paragraph) => (
              <List.Item
                fontWeight="400"
                color="#606060"
                opacity="1"
                transform="matrix(1,0,0,1,0,0)"
                fontSize={{ base: "xs", md: "sm" }}
                key={`p-${paragraph.text}`}
              >
                {paragraph.text}
              </List.Item>
            ))}
          </List.Root>
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  );
}
