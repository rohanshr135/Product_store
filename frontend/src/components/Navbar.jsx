import React ,{ useState, useEffect }from 'react';
import { IconButton, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useColorMode } from './ui/color-mode';
import { useProductStore } from '@/store/product';




const Navbar = () => {
    const {colorMode, toggleColorMode}=useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row"
        }}
      >
        <h1 style={{
            fontSize: '22px', // base size
            '@media (min-width: 640px)': { // sm breakpoint in px
                fontSize: '28px', // sm size
            },
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(to right, cyan, blue)', // Corrected gradient
            backgroundClip: 'text',
            color: 'transparent', // Make text transparent to show gradient
            display: 'inline-block' // needed for bg-clip-text
    }}>
      Product Store 🛒
    </h1>
        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <IconButton
                aria-label="Create Product"
                colorPalette="gray"
                backgroundColor="rgba(0, 0, 0, 0.6)" // Faded black background
                color="blue.400" // Blue icon color (you can also try blue.500, blue.600, etc.)
                _hover={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} // Darker fade on hover
                _active={{ backgroundColor: "rgba(0, 0, 0, 1)" }} // Full black on click
                borderRadius="md"
                padding={3} >
                    {<FaPlusSquare />}
                </IconButton>
            </Link>
                        <IconButton
                            onClick={toggleColorMode}
                            aria-label="Toggle Color Mode"
                            backgroundColor="rgba(0, 0, 0, 0.6)"
                            color="blue.400"
                            _hover={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                            _active={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
                            borderRadius="md"
                            padding={3}
    >{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}</IconButton>
          
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar