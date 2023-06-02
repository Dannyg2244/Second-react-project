import { Box, Text, Heading, VStack, HStack } from "@chakra-ui/react";
import {
  faCode,
  faSearch,
  faPalette,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <Box as="section" bg="RGBA(0, 0, 0, 0.80)">
      <Box maxW="1280px" margin="auto" textAlign="center">
        <VStack justify="center" alignItems="center" color="white" pt="8">
          <Box w="100%" maxW="600px" mb="9" px="4">
            <Text color="gold" as="h1">
              SERVICES
            </Text>
            <Heading fontSize={{ base: "xl", md: "2xl" }}>
              What I Am Great At
            </Heading>
            <Text as="p">
              I am a Software Engineer, specialized in making attractive
              websites that follow the principles of UI/UX. I am also a Graphic
              Designer and an online/offline Instructor. I am skilled in my
              field and look forward to collaborating with new Engineers to
              create great projects.
            </Text>
          </Box>
        </VStack>
        <HStack
          maxW="1280px"
          margin="auto"
          justify="space-between"
          px="4"
          mt="8"
          flexWrap="wrap"
        >
          <Box
            w={{ base: "100%", md: "170px" }}
            h="150px"
            bg="RGBA(0, 0, 0, 0.92)"
            mb="4"
          >
            <VStack m="auto" mt="12">
              <FontAwesomeIcon color="gold" size="2x" icon={faPalette} />
              <Text as="p" color="white">
                UX/UI Design
              </Text>
            </VStack>
          </Box>
          <Box
            w={{ base: "100%", md: "170px" }}
            h="150px"
            bg="RGBA(0, 0, 0, 0.92)"
            color="white"
            mb="4"
          >
            <VStack justify="center" align="center" pt="12" m="auto">
              <FontAwesomeIcon color="white" size="2x" icon={faCode} />
              <Text as="p">Web Development</Text>
            </VStack>
          </Box>
          <Box
            w={{ base: "100%", md: "170px" }}
            h="150px"
            bg="RGBA(0, 0, 0, 0.92)"
            mb="4"
          >
            <VStack justify="center" align="center" m="auto" mt="12">
              <FontAwesomeIcon color="gold" size="2x" icon={faSearch} />
              <Text as="p" color="white">
                Web Research
              </Text>
            </VStack>
          </Box>
          <Box
            color="white"
            w={{ base: "100%", md: "170px" }}
            h="150px"
            bg="RGBA(0, 0, 0, 0.92)"
          >
            <VStack justify="center" align="center" m="auto" pt="12">
              <FontAwesomeIcon size="2x" icon={faChartColumn} />
              <Text as="p">Marketing</Text>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
