// src/components/Services.jsx
import { Box, Container, SimpleGrid, Heading, Text, Icon, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPray, FaBible, FaHandsHelping, FaMusic } from 'react-icons/fa';

const MotionBox = motion(Box);

const ServiceCard = ({ title, description, icon }) => {
    return (
        <MotionBox
            whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(225, 173, 1, 0.3)"
            }}
            transition={{ duration: 0.3 }}
            p={8}
            bg="gray.800"
            borderRadius="xl"
            boxShadow="xl"
            textAlign="center"
            border="2px solid"
            borderColor="transparent"
            _hover={{
                borderColor: "#e1ad01"
            }}
        >
            <VStack spacing={5}>
                <Box
                    p={4}
                    bg="#e1ad01"
                    borderRadius="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon as={icon} w={8} h={8} color="gray.900" />
                </Box>
                <Heading size="md" color="white" fontWeight="bold">
                    {title}
                </Heading>
                <Text color="gray.300" fontSize="md" lineHeight="tall">
                    {description}
                </Text>
            </VStack>
        </MotionBox>
    );
};

const Services = () => {
    const services = [
        {
            title: "Servicios Dominicales",
            description: "Únete a nuestras inspiradoras ceremonias cada domingo a las 10:00 AM y 6:00 PM.",
            icon: FaPray
        },
        {
            title: "Estudio Bíblico",
            description: "Profundiza en las escrituras con nuestros grupos de estudio semanales.",
            icon: FaBible
        },
        {
            title: "Ministerio de Alabanza",
            description: "Participa en nuestro ministerio de música y alabanza.",
            icon: FaMusic
        },
        {
            title: "Trabajo Social",
            description: "Ayudamos a nuestra comunidad a través de diferentes programas sociales.",
            icon: FaHandsHelping
        }
    ];

    return (
        <Box id="services" py={20} bg="gray.900">
            <Container maxW="1200px">
                <VStack spacing={16}>
                    <Box textAlign="center" maxW="700px">
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
                            Nuestros Servicios
                        </Heading>
                        <Text color="gray.400" fontSize="lg" mt={6}>
                            Descubre las diferentes formas en las que puedes participar en nuestra comunidad
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} width="100%">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
};

export default Services;