import ProductCard from '@/components/productcard'
import { useProductStore } from '@/store/product'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  const {fetchProducts, products} = useProductStore()
  React.useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);
  console.log(products)
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8} align='stretch'>
        <h1
  style={{
    fontSize: '30px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to right, cyan, blue)', // blue gradient as in Product Store
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block',
    marginBottom: '1.5rem'
  }}
>
  Current Product
</h1>
        <SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
        </VStack>
    </Container>
  )
}

export default HomePage