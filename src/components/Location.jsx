// src/components/Location.jsx
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Button } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const InfoItem = ({ icon, title, children }) => {
    return (
        <MotionBox
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
        >
            <HStack
                spacing={4}
                align="start"
                p={5}
                bg="gray.800"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.700"
                _hover={{
                    borderColor: "#e1ad01",
                    boxShadow: "0 4px 20px rgba(225, 173, 1, 0.2)"
                }}
                transition="all 0.3s ease"
            >
                <Box
                    bg="rgba(225, 173, 1, 0.1)"
                    p={3}
                    borderRadius="lg"
                    flexShrink={0}
                >
                    <Icon as={icon} color="#e1ad01" w={6} h={6} />
                </Box>
                <VStack align="start" spacing={2}>
                    <Text fontWeight="bold" color="white" fontSize="lg">
                        {title}
                    </Text>
                    <Box color="gray.300">
                        {children}
                    </Box>
                </VStack>
            </HStack>
        </MotionBox>
    );
};

const Location = () => {
    return (
        <Box id="location" py={20} bg="gray.900">
            <Container maxW="1200px">
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
                    <VStack align="start" spacing={8}>
                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            width="100%"
                        >
                            <Heading
                                color="white"
                                fontSize={{ base: "3xl", md: "4xl" }}
                                mb={4}
                            >
                                Nuestra Ubicación
                            </Heading>
                            <Box
                                width="80px"
                                height="4px"
                                bg="#e1ad01"
                                borderRadius="full"
                                mb={6}
                            />
                            <Text color="gray.400" fontSize="lg" lineHeight="tall">
                                Te esperamos en nuestras instalaciones para ser parte de esta maravillosa comunidad
                            </Text>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            width="100%"
                        >
                            <VStack align="stretch" spacing={4} width="100%">
                                <InfoItem icon={FaMapMarkerAlt} title="Dirección">
                                    <Text>123 Calle Principal, Ciudad</Text>
                                </InfoItem>

                                <InfoItem icon={FaPhone} title="Teléfono">
                                    <Text>+1 234 567 8900</Text>
                                </InfoItem>

                                <InfoItem icon={FaEnvelope} title="Email">
                                    <Text>contacto@gospel.com</Text>
                                </InfoItem>

                                <InfoItem icon={FaClock} title="Horarios de Servicio">
                                    <VStack align="start" spacing={1}>
                                        <HStack>
                                            <Text fontWeight="semibold" color="#e1ad01">Domingo:</Text>
                                            <Text>10:00 AM - 8:00 PM</Text>
                                        </HStack>
                                        <HStack>
                                            <Text fontWeight="semibold" color="#e1ad01">Miércoles:</Text>
                                            <Text>7:00 PM - 9:00 PM</Text>
                                        </HStack>
                                    </VStack>
                                </InfoItem>
                            </VStack>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            width="100%"
                        >
                            <Button
                                size="lg"
                                bg="#e1ad01"
                                color="gray.900"
                                fontWeight="bold"
                                width={{ base: "100%", md: "auto" }}
                                px={8}
                                py={6}
                                fontSize="lg"
                                leftIcon={<FaMapMarkerAlt />}
                                onClick={() => window.open('https://maps.google.com', '_blank')}
                                _hover={{
                                    bg: '#c99801',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 20px rgba(225, 173, 1, 0.4)'
                                }}
                                _active={{
                                    bg: '#b08801',
                                    transform: 'translateY(0)'
                                }}
                                transition="all 0.3s ease"
                            >
                                Cómo Llegar
                            </Button>
                        </MotionBox>
                    </VStack>

                    <MotionBox
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        width="100%"
                        height={{ base: "400px", md: "550px" }}
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="0 20px 40px rgba(0,0,0,0.3)"
                        border="3px solid"
                        borderColor="#e1ad01"
                        position="relative"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            left: '-2px',
                            right: '-2px',
                            bottom: '-2px',
                            background: 'linear-gradient(45deg, #e1ad01, transparent, #e1ad01)',
                            borderRadius: 'xl',
                            zIndex: '-1',
                            opacity: 0.5
                        }}
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
                            filter="grayscale(20%) brightness(0.9)"
                        />
                    </MotionBox>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Location;