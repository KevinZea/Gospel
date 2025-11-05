// src/components/Hero.jsx
import { Box, Container, Heading, Text, Button, Stack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import portada from '../assets/portada.jpg';
import logo from '../assets/logo.png';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Hero = () => {
    return (
        <Box
            id="home"
            h="100vh"
            bg="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/portada.jpg') no-repeat"
            bgSize="cover"
            bgPosition="center"
            color="white"
            pt="70px"
        >
            <Container maxW="1200px" h="100%" py={20}>
                <Stack
                    spacing={6}
                    w={{ base: "100%", md: "60%" }}
                    h="100%"
                    justifyContent="center"
                >
                    <MotionHeading
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="bold"
                    >
                        Bienvenido a
                        <Text as="span" display="block" fontFamily="Technohideo">
                            Gospel
                        </Text>
                    </MotionHeading>

                    <MotionText
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        fontSize={{ base: "xl", md: "2xl" }}
                    >
                        Una familia Espiritual
                        que establece el Reino de los cielos,
                        ejerciendo el poder
                        y extendiendo la gloria de Dios más allá de nuestras puertas.
                    </MotionText>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            bg="#e1ad01"
                            color="gray.900"
                            fontWeight="bold"
                            px={8}
                            py={6}
                            fontSize="lg"
                            position="relative"
                            overflow="hidden"
                            _hover={{
                                bg: 'gray.900',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 24px rgba(225, 173, 1, 0.4)'
                            }}
                            _active={{
                                transform: 'translateY(0)'
                            }}
                            transition="all 0.3s ease"
                            onClick={() => {
                                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                opacity={0}
                                transition="opacity 0.3s ease"
                                pointerEvents="none"
                                zIndex={1}
                                sx={{
                                    'button:hover &': {
                                        opacity: 1
                                    }
                                }}
                            >
                                <Image
                                    src={logo}
                                    alt="Gospel Logo"
                                    h="100px"
                                    w="auto"
                                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                                />
                            </Box>

                            <Text
                                position="relative"
                                zIndex={2}
                                transition="opacity 0.3s ease"
                                sx={{
                                    'button:hover &': {
                                        opacity: 0
                                    }
                                }}
                            >
                                Descubre Más
                            </Text>
                        </Button>
                    </MotionBox>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;