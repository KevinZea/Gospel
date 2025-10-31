// src/components/Hero.jsx
import { Box, Container, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import portada from '../assets/portada.jpg';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Hero = () => {
    return (
        <Box
            id="home"
            h="100vh"
            bg="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/portada.jpg') no-repeat"
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
                        <Text  fontFamily={"Technohideo"}>
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
                            color={"gray.700"}
                            _hover={{ bg: 'white' }}
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