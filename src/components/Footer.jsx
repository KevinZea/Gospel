// src/components/Footer.jsx
import { Box, Container, Stack, SimpleGrid, Text, IconButton, VStack, Heading } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

const Footer = () => {
    const socialLinks = [
        { icon: FaFacebook, url: 'https://facebook.com' },
        { icon: FaTwitter, url: 'https://twitter.com' },
        { icon: FaInstagram, url: 'https://instagram.com' },
        { icon: FaYoutube, url: 'https://youtube.com' }
    ];

    return (
        <Box bg="gray.900" color="white" py={10}>
            <Container maxW="1200px">
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
                    {/* Sobre Nosotros */}
                    <VStack align="start" spacing={3}>
                        <Heading size="md">Sobre Gospel</Heading>
                        <Text fontSize="sm">
                            Somos una comunidad comprometida con compartir el amor de Dios y construir un mundo mejor.
                        </Text>
                    </VStack>

                    {/* Horarios */}
                    <VStack align="start" spacing={3}>
                        <Heading size="md">Horarios</Heading>
                        <Text fontSize="sm">Domingo: 10:00 AM - 12:00 PM</Text>
                        <Text fontSize="sm">Miércoles: 7:00 PM - 9:00 PM</Text>
                        <Text fontSize="sm">Viernes: 7:00 PM - 9:00 PM</Text>
                    </VStack>

                    {/* Enlaces Rápidos */}
                    <VStack align="start" spacing={3}>
                        <Heading size="md">Enlaces Rápidos</Heading>
                        <Text cursor="pointer" _hover={{ color: 'brand.300' }}>Servicios</Text>
                        <Text cursor="pointer" _hover={{ color: 'brand.300' }}>Eventos</Text>
                        <Text cursor="pointer" _hover={{ color: 'brand.300' }}>Donaciones</Text>
                        <Text cursor="pointer" _hover={{ color: 'brand.300' }}>Ministerios</Text>
                    </VStack>

                    {/* Redes Sociales */}
                    <VStack align="start" spacing={3}>
                        <Heading size="md">Síguenos</Heading>
                        <Stack direction="row" spacing={4}>
                            {socialLinks.map((social, index) => (
                                <MotionIconButton
                                    key={index}
                                    as="a"
                                    href={social.url}
                                    aria-label={`Visitar ${social.icon.name}`}
                                    icon={<social.icon />}
                                    variant="ghost"
                                    color="white"
                                    _hover={{ bg: 'brand.500' }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </Stack>
                    </VStack>
                </SimpleGrid>

                <Box borderTopWidth={1} borderColor="gray.700" pt={8} mt={8}>
                    <Text textAlign="center" fontSize="sm">
                        © {new Date().getFullYear()} Gospel Iglesia. Todos los derechos reservados.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;