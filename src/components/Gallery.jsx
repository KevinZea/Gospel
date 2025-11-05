// src/components/Gallery.jsx
import { Box, Container, SimpleGrid, Image, Heading, Text, AspectRatio, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

const Gallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        '/church1.jpg',
        '/church2.jpg',
        '/church3.jpg',
        '/church4.jpg',
        '/church5.jpg',
        '/church6.jpg'
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        onOpen();
    };

    return (
        <Box id="gallery" py={20} bg="gray.900">
            <Container maxW="1200px">
                <Box textAlign="center" mb={16}>
                    <Heading
                        mb={4}
                        color="white"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        position="relative"
                        _after={{
                            content: '""',
                            display: "block",
                            width: "80px",
                            height: "4px",
                            bg: "#e1ad01",
                            margin: "20px auto 0",
                            borderRadius: "full"
                        }}
                    >
                        Nuestra Galería
                    </Heading>
                    <Text color="gray.400" fontSize="lg" mt={6}>
                        Momentos especiales de nuestra comunidad
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {images.map((image, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <Box
                                position="relative"
                                overflow="hidden"
                                borderRadius="xl"
                                boxShadow="xl"
                                cursor="pointer"
                                onClick={() => handleImageClick(image)}
                                bg="gray.800"
                                border="2px solid"
                                borderColor="gray.700"
                                _hover={{
                                    borderColor: "#e1ad01",
                                    boxShadow: "0 20px 40px rgba(225, 173, 1, 0.3)"
                                }}
                                transition="all 0.3s ease"
                            >
                                <AspectRatio ratio={4 / 3}>
                                    <Image
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        objectFit="cover"
                                        transition="transform 0.5s ease"
                                        _hover={{ transform: 'scale(1.15)' }}
                                    />
                                </AspectRatio>

                                {/* Overlay con efecto */}
                                <Box
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    right="0"
                                    bottom="0"
                                    bg="linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)"
                                    opacity="0"
                                    transition="opacity 0.3s ease"
                                    _groupHover={{ opacity: 1 }}
                                    sx={{
                                        '.gallery-item:hover &': {
                                            opacity: 1
                                        }
                                    }}
                                />

                                {/* Número de imagen (opcional) */}
                                <Box
                                    position="absolute"
                                    top="4"
                                    right="4"
                                    bg="#e1ad01"
                                    color="gray.900"
                                    fontWeight="bold"
                                    fontSize="sm"
                                    px="3"
                                    py="1"
                                    borderRadius="full"
                                    opacity="0"
                                    transition="opacity 0.3s ease"
                                    sx={{
                                        '.gallery-item:hover &': {
                                            opacity: 1
                                        }
                                    }}
                                >
                                    {index + 1}
                                </Box>
                            </Box>
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Modal para ver imagen en grande */}
            <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
                <ModalOverlay
                    bg="blackAlpha.900"
                    backdropFilter="blur(10px)"
                />
                <ModalContent
                    bg="transparent"
                    boxShadow="none"
                    maxW="90vw"
                    maxH="90vh"
                >
                    <ModalCloseButton
                        color="white"
                        bg="#e1ad01"
                        _hover={{ bg: "#c99801" }}
                        size="lg"
                        top="-12"
                        right="-12"
                        borderRadius="full"
                        zIndex="1"
                    />
                    <ModalBody p={0}>
                        <Box
                            borderRadius="xl"
                            overflow="hidden"
                            border="4px solid"
                            borderColor="#e1ad01"
                            boxShadow="0 0 40px rgba(225, 173, 1, 0.4)"
                        >
                            <Image
                                src={selectedImage}
                                alt="Selected gallery image"
                                w="100%"
                                h="auto"
                                maxH="85vh"
                                objectFit="contain"
                            />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Gallery;