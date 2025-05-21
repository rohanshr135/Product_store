import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';
import { Box, Button, Heading, VStack, Container, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const {createProduct}= useProductStore()
    const handleAddProduct = async () => {
    // Convert price to number
    const productToSend = { ...newProduct, price: Number(newProduct.price) };
    const { success, message } = await createProduct(productToSend);
    console.log("Product added:", productToSend);
    if (success) {
        setNewProduct({ name: "", price: "", image: "" }); // Clear inputs on success
    }
};
    
    return (
        <Container maxW="50%">
            <VStack spacing={8}>
                <Heading as="h1" size="2xl" textAlign="center" mb={8}>
                    Create New Product
                </Heading>

                <Box
                    w="full"
                    bg={useColorModeValue("white", "gray.800")}
                    p={6}
                    rounded="lg"
                    shadow="md"
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            size="lg"
                            variant="filled"
                        />
                        <Input
                            placeholder="Product Price"
                            value={newProduct.price}
                            type="number"
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            size="lg"
                            variant="filled"
                        />
                        <Input
                            placeholder="Product Image URL"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            size="lg"
                            variant="filled"
                        />
                        <Button colorScheme="blue" onClick={handleAddProduct} w="full">
                            Add Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default CreatePage;