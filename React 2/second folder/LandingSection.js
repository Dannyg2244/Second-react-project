import React from "react"
import { Avatar, Heading, VStack } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"

const greetings = "Hello, i am Ikuyajolu Gbenga Daniel"
const bio1 = "A frontend Developer"
const bio2 = "Specialised in React"


const LandingSection = () => {
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground 
    backgroundColor="green"
    >
        <VStack>
            <VStack>
                <Avatar
                name="Ikuyajolu Gbenga Daniel"
                size="2xl"
                src="https://i.pravatar.cc/150?img=7"
                />
                <Heading as="p" size="xs">
                    {greetings}
                </Heading>
            </VStack>
            <VStack>
                <Heading as="h1">
                    {bio1}
                </Heading>
            </VStack>
            <VStack>
                <Heading as="h1"> 
                {bio2}
                </Heading>
            </VStack>
        </VStack>

    </FullScreenSection>
}

export default LandingSection