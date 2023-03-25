import React from "react"
import {Box, HStack} from "@chakra-ui/react"
//import {fontAwesomeIcon} from "@fortawesome/fontawesome-free"
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
// import {
//   faGithub,
//   faLinkedin,
//   faMedium,
//   faStackOverflow,
// } from "@fortawesome/free-brands-svg-icons";
//import { AnimatePresence } from "framer-motion/dist/framer-motion"
//import { StarIcon, Icon, ExternalLinkIcon } from "@chakra-ui/icons"
// const socials = [
//     {
//         icon: faGithub,
//         url: "https://github.com/Dannyg2244",
// },  
// {
//     icon: faLinkedin,
//     url: ""
// }
// ]
export default function Header() {
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            height="4rem"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
        >
            <Box
                color="white"
                maxWidth="1280px"
                auto
                paddingTop="1rem"
                display="flex"
                justifyContent="space-between"
                paddingLeft="3rem"
                
            >
                <nav >
                    <HStack spacing="4">
                    <a href="https://github.com/Dannyg2244">
                      github
                    </a>

                    <a href="https://www.linkedin.com/feed/">
                      linkedin
                    </a>
                    </HStack>
                </nav>
                <nav>
                    <HStack spacing="8">
                    <a href="">contact</a>
                    <a href="">menu</a>
                    <a href="">features</a>
                    </HStack>
                </nav>
            </Box>
        </Box>
    )
}
