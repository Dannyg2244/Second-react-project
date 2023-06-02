import { Box, HStack, Text, Flex, Button, Image, Heading } from "@chakra-ui/react";
import img1 from "./images/danny1.jpg"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box as="section" bg="RGBA(0, 0, 0, 0.92)">
      <Box maxW="1280px" margin="auto">
        <HStack
          px={{ base: 4, md: 6 }}
          py={4}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          color="white"
        >
          <Flex direction="column">
            <Text
              as="h1"
              fontWeight="extrabold"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontFamily="sans-serif"
            >
              Daniel
            </Text>
            <Flex>
              <Text
                as="h1"
                fontWeight="extrabold"
                fontSize={{ base: "4xl", md: "5xl" }}
                fontFamily="sans-serif"
                mt={{ base: "-7", md: "-9" }}
              >
                Gbenga
              </Text>
              <Text
                as="h1"
                fontWeight="extrabold"
                fontSize={{ base: "4xl", md: "5xl" }}
                fontFamily="sans-serif"
                mt={{ base: "-7", md: "-9" }}
                color="gold"
              >
                .
              </Text>
            </Flex>
            <Box borderBottom="1px solid gold" w="100px" mt="2" mb="4" />
            <Flex direction={{ base: "column", md: "row" }}>
              <Text as="p" mr="4">
                <a href="https://www.instagram.com/">Instagram</a>
              </Text>
              <Text as="p" mr="4">
                <a href="https://www.linkedin.com/feed/">Linkedin</a>
              </Text>
              <Text as="p" mr="4">
                <a href="https://twitter.com/home">Twitter</a>
              </Text>
              <Text as="p" mr="4">
                <a href="https://web.facebook.com/">Facebook</a>
              </Text>
              <Text as="p">
                <a href="https://github.com/Dannyg2244">Github</a>
              </Text>
            </Flex>
            
              <Link isExternal color="gold" rel="noFollow" to="/contact">
              <Button
              mt="5"
              variant="outline"
              bg="gold"
              borderColor="gold"
              border="gold"
              _hover=""
            >
                CONTACT ME
            </Button>
              </Link>
          </Flex>
          <Box>
            <Image
              src={img1}
              alt="Dannygenius image"
              w={{ base: "200px", md: "300px" }}
              h={{ base: "250px", md: "350px" }}
            />
          </Box>
          <Box w={{ base: "100%", md: "300px" }}>
            <Text color="gold" as="h1">
              INTRODUCTION
            </Text>
            <Heading fontSize={{ base: "xl", md: "2xl" }}>
              UI/UX DESIGNER, FULL STACK WEB DEVELOPER
            </Heading>
            <Text as="p">
              Daniel Gbenga is a very dedicated person and has a good team
              spirit. He is willing to work with any organization and gain more
              experience in the process.
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
