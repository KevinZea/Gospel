// src/components/Location.jsx
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Button } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Location = () => {
    return (
        <Box id="location" py={20} bg="gray.50">
            <Container maxW="1200px">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <VStack align="start" spacing={6}>
                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Heading>Nuestra Ubicación</Heading>
                            <Text color="gray.600" fontSize="lg" mt={4}>
                                Te esperamos en nuestras instalaciones para ser parte de esta maravillosa comunidad
                            </Text>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <VStack align="start" spacing={6} width="100%">
                                <HStack spacing={4}>
                                    <Icon as={FaMapMarkerAlt} color="brand.500" w={6} h={6} />
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="bold">Dirección</Text>
                                        <Text>123 Calle Principal, Ciudad</Text>
                                    </VStack>
                                </HStack>

                                <HStack spacing={4}>
                                    <Icon as={FaPhone} color="brand.500" w={6} h={6} />
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="bold">Teléfono</Text>
                                        <Text>+1 234 567 8900</Text>
                                    </VStack>
                                </HStack>

                                <HStack spacing={4}>
                                    <Icon as={FaEnvelope} color="brand.500" w={6} h={6} />
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="bold">Email</Text>
                                        <Text>contacto@gospel.com</Text>
                                    </VStack>
                                </HStack>

                                <HStack spacing={4}>
                                    <Icon as={FaClock} color="brand.500" w={6} h={6} />
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="bold">Horarios de Servicio</Text>
                                        <Text>Domingo: 10:00 AM - 8:00 PM</Text>
                                        <Text>Miércoles: 7:00 PM - 9:00 PM</Text>
                                    </VStack>
                                </HStack>
                            </VStack>
                        </MotionBox>

                        <Button
                            size="lg"
                            bg="brand.500"
                            color="white"
                            _hover={{ bg: 'brand.600' }}
                            leftIcon={<FaMapMarkerAlt />}
                            onClick={() => window.open('https://maps.google.com', '_blank')}
                        >
                            Cómo Llegar
                        </Button>
                    </VStack>

                    <MotionBox
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        width="100%"
                        height="500px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="xl"
                    >
                        <Box
                            as="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25987701513547!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1652813115003!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </MotionBox>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Location;