import React from "react"
import {Box, Link, HStack} from "@chakra-ui/react"
import {FontAwe}
//import { AnimatePresence } from "framer-motion/dist/framer-motion"

export default function Header() {
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
        >
            <Box
                color="white"
                maxWidth="1280px"
                auto
            >
                <nav>
                    <HStack spacing="4">
                    <a href="https://github.com/Dannyg2244">
                      github
                    </a>

                    <a href="https://www.linkedin.com/feed/">
                      linkedin
                    </a>
                    </HStack>
                </nav>
            </Box>
        </Box>
    )
}
