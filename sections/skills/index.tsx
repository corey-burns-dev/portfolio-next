import { Box, Center, chakra, HStack, List, SimpleGrid, Tag, VStack } from "@chakra-ui/react";
import { SectionContainer, SectionHeading } from "@common/index";
import { developerInfo, mySkills } from "@configs/skills";
import { nunito } from "fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import skillsBgImage from "../../public/bg/laptop.webp";

interface Skill {
  title: string;
  iconName: string;
  skills: {
    title: string;
  }[];
}

function MySkills() {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 350,
  });
  const MotionDiv = motion.div;
  return (
    <div ref={ref}>
      {inView ? (
        <Box>
          {mySkills.map((item: Skill, index) => (
            <MotionDiv
              key={`my-skills-${item.title}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ marginBottom: "1.5rem" }}
            >
              <List.Root listStyleType="none" gap={4}>
                <List.Item>
                  <HStack fontWeight="700" color="newBlack" px="1" maxW="150px">
                    <chakra.h3
                      className={nunito.className}
                      fontSize="22px"
                      color="mainBlack"
                      opacity={0.8}
                      background="linear-gradient(120deg,  rgba(243,147, 55,1), rgb(250, 112, 154) 100%)"
                      backgroundRepeat="no-repeat"
                      backgroundSize="100% 0.2em"
                      backgroundPosition="0 89%"
                      letterSpacing="tighter"
                      fontWeight="800"
                      fontFamily="Nunito, sans-serif"
                      lineHeight="1.2"
                    >
                      {item.title}
                    </chakra.h3>
                  </HStack>
                </List.Item>
                <List.Item display="flex" flexWrap="wrap" gap={2}>
                  {item.skills.map((skill) => (
                    <Tag.Root
                      m={1}
                      size="sm"
                      colorPalette="blackAlpha"
                      variant="subtle"
                      key={`MySkills-badge-${skill.title}`}
                    >
                      <Tag.Label color="blackAlpha.700">{skill.title}</Tag.Label>
                    </Tag.Root>
                  ))}
                </List.Item>
              </List.Root>
            </MotionDiv>
          ))}
        </Box>
      ) : null}
    </div>
  );
}

function DeveloperInfo() {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 350,
  });
  const MotionDiv = motion.div;
  return (
    <div ref={ref}>
      {inView ? (
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <List.Root p="4" gap={3} listStyleType="none">
            {developerInfo.excerpt.map((p) => (
              <List.Item
                fontWeight="400"
                color="#606060"
                opacity="1"
                transform="matrix(1,0,0,1,0,0)"
                fontSize={{ base: "xs", md: "sm" }}
                key={`devInfo-${p.text}`}
              >
                {p.text}
              </List.Item>
            ))}
          </List.Root>
        </MotionDiv>
      ) : null}
    </div>
  );
}

export default function SkillsContainer() {
  return (
    <SectionContainer id="skills">
      <VStack>
        <Box pos="relative" overflow="hidden" w="full">
          <Center>
            <SectionHeading title="Skills" />
          </Center>
          <Image
            alt=""
            src={skillsBgImage}
            placeholder="blur"
            quality={80}
            fill
            sizes="100vw"
            style={{
              opacity: 0.2,
              objectFit: "cover",
            }}
          />
        </Box>
        <SimpleGrid p={{ base: "2em", md: "3em" }} columns={{ base: 1, lg: 2 }} gap={4}>
          <DeveloperInfo />
          <MySkills />
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  );
}
