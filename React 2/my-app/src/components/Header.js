import { Submit } from "../hooks/useSubmit";
import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      backgroundColor="RGBA(0, 0, 0, 0.92)"
    >
      <Box color="white" maxW="1280px" margin="auto" h="5rem">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={10}
          px={{ base: 4, md: 8 }}
          justify="space-between"
          align="center"
        >
          <Box>
            <Stack direction="row" spacing={0}>
              <Text
                as="h1"
                fontWeight="extrabold"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontFamily="sans-serif"
                mt={{ base: 0, md: 0 }}
              >
                DG
              </Text>
              <Text
                as="h1"
                fontWeight="extrabold"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontFamily="sans-serif"
                mt={{ base: 0, md: -5 }}
                color="gold"
              >
                .
              </Text>
            </Stack>
          </Box>
          <Stack spacing={4} direction="row" align="center">
            <Link to="/">
              <Text as="p" fontWeight="semibold">
                Home
              </Text>
            </Link>
            <Link to="/portfolio">
              <Text as="p" fontWeight="semibold">
                Portfolios
              </Text>
            </Link>
            <Link to="/blog">
              <Text as="p" fontWeight="semibold">
                Blog{" "}
                <FontAwesomeIcon size="xs" icon={faArrowDown} />
              </Text>
            </Link>
            <Link rel="noFollow" to="/contact">
              <Text as="p" fontWeight="semibold">
                Contact
              </Text>
            </Link>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={6}
              align={{ base: "center", md: "flex-start" }}
            >
              <Text color="black">i</Text>
              <a
                href="https://web.facebook.com/"
                rel="noOpener noReferral"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                rel="noOpener noReferral"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/"
                rel="noOpener noReferral"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://twitter.com/home"
                rel="noOpener noReferral"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://github.com/Dannyg2244"
                rel="noOpener noReferral"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <Box>theme <Submit /></Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
