import { Box, Heading, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { FaEdit, FaTrash } from "react-icons/fa"; // <-- import react-icons

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
    const bg = useColorModeValue("white", "gray.800");
    return (
        <Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
				</Text>

                <HStack spacing={2}>
                    
<IconButton
    aria-label="Edit product"
    backgroundColor="blue.300" // blue background for edit
    color="black"
    _hover={{ backgroundColor: "blue.600" }}
    _active={{ backgroundColor: "blue.700" }}
    borderRadius="md"
    padding={2}
    boxSize={8}
    variant="solid"
>{<FaEdit />}</IconButton>
<IconButton
    aria-label="Delete product"
    backgroundColor="red.500" // red background for delete
    color="black"
    _hover={{ backgroundColor: "red.100" }}
    _active={{ backgroundColor: "red.100" }}
    borderRadius="md"
    padding={2}
    boxSize={8}
    variant="solid"
>{<FaTrash />}</IconButton>
                </HStack>
            </Box>
        </Box>
    );
};

export default ProductCard;