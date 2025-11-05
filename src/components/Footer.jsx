// src/components/Footer.jsx
import { Box, Container, Stack, SimpleGrid, Text, IconButton, VStack, Heading, HStack, Divider, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const MotionIconButton = motion(IconButton);
const MotionBox = motion(Box);

const Footer = () => {
    const socialLinks = [
        { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
        { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
        { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube' }
    ];

    const quickLinks = [
        { name: 'Servicios', to: 'services' },
        { name: 'Eventos', to: 'events' },
        { name: 'Donaciones', to: 'donations' },
        { name: 'Ubicación', to: 'location' }
    ];

    return (
        <Box bg="gray.900" color="white" position="relative" overflow="hidden">
            {/* Decoración de fondo */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                height="4px"
                bgGradient="linear(to-r, transparent, #e1ad01, transparent)"
            />

            <Container maxW="1200px" py={16}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {/* Sobre Nosotros */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <VStack align="start" spacing={4}>
                            <Heading
                                size="md"
                                color="#e1ad01"
                                position="relative"
                                _after={{
                                    content: '""',
                                    display: "block",
                                    width: "40px",
                                    height: "3px",
                                    bg: "#e1ad01",
                                    marginTop: "8px",
                                    borderRadius: "full"
                                }}
                            >
                                Sobre Gospel
                            </Heading>
                            <Text fontSize="sm" color="gray.400" lineHeight="tall">
                                Somos una comunidad comprometida con compartir el amor de Dios y construir un mundo mejor.
                            </Text>
                        </VStack>
                    </MotionBox>

                    {/* Horarios */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <VStack align="start" spacing={4}>
                            <Heading
                                size="md"
                                color="#e1ad01"
                                position="relative"
                                _after={{
                                    content: '""',
                                    display: "block",
                                    width: "40px",
                                    height: "3px",
                                    bg: "#e1ad01",
                                    marginTop: "8px",
                                    borderRadius: "full"
                                }}
                            >
                                Horarios
                            </Heading>
                            <VStack align="start" spacing={2}>
                                <HStack>
                                    <Text fontSize="sm" fontWeight="semibold" color="#e1ad01" minW="80px">
                                        Domingo:
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                        10:00 AM - 12:00 PM
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize="sm" fontWeight="semibold" color="#e1ad01" minW="80px">
                                        Miércoles:
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                        7:00 PM - 9:00 PM
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize="sm" fontWeight="semibold" color="#e1ad01" minW="80px">
                                        Viernes:
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                        7:00 PM - 9:00 PM
                                    </Text>
                                </HStack>
                            </VStack>
                        </VStack>
                    </MotionBox>

                    {/* Enlaces Rápidos */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <VStack align="start" spacing={4}>
                            <Heading
                                size="md"
                                color="#e1ad01"
                                position="relative"
                                _after={{
                                    content: '""',
                                    display: "block",
                                    width: "40px",
                                    height: "3px",
                                    bg: "#e1ad01",
                                    marginTop: "8px",
                                    borderRadius: "full"
                                }}
                            >
                                Enlaces Rápidos
                            </Heading>
                            <VStack align="start" spacing={2}>
                                {quickLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.to}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                    >
                                        <Text
                                            fontSize="sm"
                                            color="gray.400"
                                            cursor="pointer"
                                            position="relative"
                                            _hover={{
                                                color: '#e1ad01',
                                                paddingLeft: '8px'
                                            }}
                                            transition="all 0.3s ease"
                                            _before={{
                                                content: '"›"',
                                                position: 'absolute',
                                                left: '-8px',
                                                color: '#e1ad01',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease'
                                            }}
                                            sx={{
                                                '&:hover::before': {
                                                    opacity: 1
                                                }
                                            }}
                                        >
                                            {link.name}
                                        </Text>
                                    </Link>
                                ))}
                            </VStack>
                        </VStack>
                    </MotionBox>

                    {/* Redes Sociales */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <VStack align="start" spacing={4}>
                            <Heading
                                size="md"
                                color="#e1ad01"
                                position="relative"
                                _after={{
                                    content: '""',
                                    display: "block",
                                    width: "40px",
                                    height: "3px",
                                    bg: "#e1ad01",
                                    marginTop: "8px",
                                    borderRadius: "full"
                                }}
                            >
                                Síguenos
                            </Heading>
                            <Text fontSize="sm" color="gray.400">
                                Mantente conectado con nuestra comunidad
                            </Text>
                            <Stack direction="row" spacing={3} pt={2}>
                                {socialLinks.map((social, index) => (
                                    <MotionIconButton
                                        key={index}
                                        as="a"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        icon={<social.icon />}
                                        size="lg"
                                        bg="gray.800"
                                        color="gray.400"
                                        border="2px solid"
                                        borderColor="gray.700"
                                        _hover={{
                                            bg: '#e1ad01',
                                            color: 'gray.900',
                                            borderColor: '#e1ad01',
                                            transform: 'translateY(-4px)'
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition="all 0.3s ease"
                                    />
                                ))}
                            </Stack>
                        </VStack>
                    </MotionBox>
                </SimpleGrid>

                {/* Divider decorativo */}
                <Box position="relative" my={10}>
                    <Divider borderColor="gray.700" />
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        bg="gray.900"
                        px={4}
                    >
                        <Icon as={FaHeart} color="#e1ad01" w={5} h={5} />
                    </Box>
                </Box>

                {/* Copyright */}
                <MotionBox
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <VStack spacing={2}>
                        <Text
                            textAlign="center"
                            fontSize="sm"
                            color="gray.400"
                        >
                            © {new Date().getFullYear()} Gospel Iglesia. Todos los derechos reservados.
                        </Text>
                        <Text
                            textAlign="center"
                            fontSize="xs"
                            color="gray.500"
                        >
                            Hecho con <Text as="span" color="#e1ad01">amor</Text> para nuestra comunidad
                        </Text>
                    </VStack>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default Footer;