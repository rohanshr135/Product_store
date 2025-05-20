import { Box, Button, Heading, HStack, IconButton, Image, Input, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useProductStore } from "@/store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
    const bg = useColorModeValue("white", "gray.800");

    const { deleteProduct, updateProduct } = useProductStore();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (!success) {
            setError(message);
            setTimeout(() => setError(""), 3000);
        } else {
            setSuccess(message);
            setTimeout(() => setSuccess(""), 3000);
        }
    };

    const handleUpdateProduct = async () => {
        const { success, message } = await updateProduct(product._id, updatedProduct);
        setIsEditing(false);
        if (!success) {
            setError(message);
            setTimeout(() => setError(""), 3000);
        } else {
            setSuccess("Product updated successfully");
            setTimeout(() => setSuccess(""), 3000);
        }
    };

    // Inline edit form
    if (isEditing) {
        return (
            <Box
                shadow='lg'
                rounded='lg'
                overflow='hidden'
                transition='all 0.3s'
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                bg={bg}
                maxW="xs"
                w="100%"
                mx="auto"
            >
                <Box p={4}>
                    <Heading as='h3' size='md' mb={2} textAlign="center">
                        Edit Product
                    </Heading>
                    <Input
                        placeholder='Product Name'
                        name='name'
                        value={updatedProduct.name}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                        mb={2}
                    />
                    <Input
                        placeholder='Price'
                        name='price'
                        type='number'
                        value={updatedProduct.price}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                        mb={2}
                    />
                    <Input
                        placeholder='Image URL'
                        name='image'
                        value={updatedProduct.image}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                        mb={2}
                    />
                    <HStack spacing={2} justify="center" mt={2}>
                        <Button colorScheme='blue' size="sm" onClick={handleUpdateProduct}>
                            Update
                        </Button>
                        <Button variant='ghost' size="sm" onClick={() => { setIsEditing(false); setUpdatedProduct(product); }}>
                            Cancel
                        </Button>
                    </HStack>
                    {error && (
                        <Text color="red.500" fontSize="sm" mt={2} textAlign="center">
                            {error}
                        </Text>
                    )}
                    {success && (
                        <Text color="green.500" fontSize="sm" mt={2} textAlign="center">
                            {success}
                        </Text>
                    )}
                </Box>
            </Box>
        );
    }

    // Normal card view
    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
            maxW="xs"
            w="100%"
            mx="auto"
        >
            <Image src={product.image} alt={product.name} h={32} w='full' objectFit='cover' />
            <Box p={2} textAlign="center">
                <Heading as='h3' size='sm' mb={1}>
                    {product.name}
                </Heading>
                <Text fontWeight='bold' fontSize='md' color={textColor} mb={1}>
                    ${product.price}
                </Text>
                {error && (
                    <Text color="red.500" fontSize="sm" mb={1} textAlign="center">
                        {error}
                    </Text>
                )}
                {success && (
                    <Text color="green.500" fontSize="sm" mb={1} textAlign="center">
                        {success}
                    </Text>
                )}
                <HStack spacing={0.5} justify="center">
                    <IconButton
                        aria-label="Edit product"
                        backgroundColor="blue.300"
                        color="black"
                        _hover={{ backgroundColor: "blue.600" }}
                        _active={{ backgroundColor: "blue.700" }}
                        borderRadius="md"
                        padding={1}
                        boxSize={6}
                        variant="solid"
                        onClick={() => setIsEditing(true)}
                        
                    >{<FaEdit />}</IconButton>
                    <IconButton
                        aria-label="Delete product"
                        backgroundColor="red.500"
                        color="black"
                        _hover={{ backgroundColor: "red.100" }}
                        _active={{ backgroundColor: "red.100" }}
                        borderRadius="md"
                        padding={1}
                        boxSize={6}
                        variant="solid"
                        onClick={() => handleDeleteProduct(product._id)}
                    
                    >{<FaTrash />}</IconButton>
                </HStack>
            </Box>
        </Box>
    );
};

export default ProductCard;