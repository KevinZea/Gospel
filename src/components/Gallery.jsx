// src/components/Gallery.jsx
import { Box, Container, SimpleGrid, Image, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Gallery = () => {
    const images = [
        '/church1.jpg',
        '/church2.jpg',
        '/church3.jpg',
        '/church4.jpg',
        '/church5.jpg',
        '/church6.jpg'
    ];

    return (
        <Box id="gallery" py={20}>
            <Container maxW="1200px">
                <Box textAlign="center" mb={12}>
                    <Heading mb={4}>Nuestra Galería</Heading>
                    <Text color="gray.600" fontSize="lg">
                        Momentos especiales de nuestra comunidad
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {images.map((image, index) => (
                        <MotionBox
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            overflow="hidden"
                            borderRadius="lg"
                            boxShadow="lg"
                        >
                            <Image
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                w="100%"
                                h="300px"
                                objectFit="cover"
                                transition="0.3s"
                                _hover={{ transform: 'scale(1.1)' }}
                            />
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Gallery;