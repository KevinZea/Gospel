// src/components/Services.jsx
import { Box, Container, SimpleGrid, Heading, Text, Icon, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPray, FaBible, FaHandsHelping, FaMusic } from 'react-icons/fa';

const MotionBox = motion(Box);

const ServiceCard = ({ title, description, icon }) => {
    return (
        <MotionBox
            whileHover={{ y: -10 }}
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            textAlign="center"
        >
            <VStack spacing={4}>
                <Icon as={icon} w={10} h={10} color="brand.500" />
                <Heading size="md">{title}</Heading>
                <Text color="gray.600">{description}</Text>
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
        <Box id="services" py={20} bg="gray.50">
            <Container maxW="1200px">
                <VStack spacing={12}>
                    <Box textAlign="center">
                        <Heading mb={4}>Nuestros Servicios</Heading>
                        <Text color="gray.600" fontSize="lg">
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