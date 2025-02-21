// src/components/Hero.jsx
import { Box, Container, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Hero = () => {
    return (
        <Box
            id="home"
            h="100vh"
            bg="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/church-bg.jpg')"
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
                        Bienvenido a Gospel
                    </MotionHeading>

                    <MotionText
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        fontSize={{ base: "xl", md: "2xl" }}
                    >
                        Un lugar donde encontrarás paz, amor y comunidad. Únete a nosotros en este viaje espiritual.
                    </MotionText>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            bg="brand.500"
                            _hover={{ bg: 'brand.600' }}
                            onClick={() => {
                                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Descubre Más
                        </Button>
                    </MotionBox>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;