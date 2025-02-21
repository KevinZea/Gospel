// src/components/Donations.jsx
import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Button,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Radio,
    RadioGroup,
    Stack,
    Icon,
    useToast,
    Flex,
    Badge
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHeart, FaChurch, FaHandHoldingHeart, FaPray } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const DonationCard = ({ title, description, amount, icon, isPopular, onClick, isSelected }) => (
    <MotionBox
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        cursor="pointer"
        onClick={onClick}
        position="relative"
    >
        <Box
            p={6}
            borderRadius="xl"
            boxShadow="xl"
            bg={isSelected ? 'brand.50' : 'white'}
            border="2px solid"
            borderColor={isSelected ? 'brand.500' : 'transparent'}
            transition="all 0.3s"
        >
            {isPopular && (
                <Badge
                    position="absolute"
                    top="-2"
                    right="-2"
                    px={3}
                    py={1}
                    colorScheme="brand"
                    borderRadius="full"
                    fontSize="sm"
                >
                    Más Popular
                </Badge>
            )}

            <VStack spacing={4}>
                <Icon as={icon} w={8} h={8} color="brand.500" />
                <Heading size="md">{title}</Heading>
                <Text color="gray.600" textAlign="center">
                    {description}
                </Text>
                <Heading size="lg" color="brand.500">
                    ${amount}
                </Heading>
            </VStack>
        </Box>
    </MotionBox>
);

const Donations = () => {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');
    const [frequency, setFrequency] = useState('monthly');
    const toast = useToast();

    const donationOptions = [
        {
            title: 'Donación Básica',
            description: 'Ayuda a mantener nuestros servicios semanales',
            amount: 50,
            icon: FaHeart
        },
        {
            title: 'Donación Popular',
            description: 'Apoya nuestros programas comunitarios',
            amount: 100,
            icon: FaHandHoldingHeart,
            isPopular: true
        },
        {
            title: 'Donación Premium',
            description: 'Contribuye a la expansión de nuestra iglesia',
            amount: 200,
            icon: FaChurch
        }
    ];

    const handleDonate = () => {
        const amount = selectedAmount || customAmount;
        if (!amount) {
            toast({
                title: 'Por favor selecciona un monto',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        toast({
            title: 'Gracias por tu donación',
            description: `Has elegido donar $${amount} ${frequency === 'monthly' ? 'mensualmente' : 'una vez'}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Box id="donations" py={20} bg="gray.50">
            <Container maxW="1200px">
                <VStack spacing={12}>
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        textAlign="center"
                    >
                        <Heading mb={4}>Apoya Nuestra Misión</Heading>
                        <Text color="gray.600" fontSize="lg" maxW="800px">
                            Tu generosidad nos permite continuar compartiendo el mensaje de amor y esperanza con nuestra comunidad.
                            Cada donación hace la diferencia.
                        </Text>
                    </MotionBox>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
                        {donationOptions.map((option, index) => (
                            <DonationCard
                                key={index}
                                {...option}
                                isSelected={selectedAmount === option.amount}
                                onClick={() => {
                                    setSelectedAmount(option.amount);
                                    setCustomAmount('');
                                }}
                            />
                        ))}
                    </SimpleGrid>

                    <VStack spacing={6} width="100%" maxW="600px">
                        <Box width="100%">
                            <Text mb={2} fontWeight="medium">O ingresa un monto personalizado:</Text>
                            <NumberInput
                                value={customAmount}
                                onChange={(value) => {
                                    setCustomAmount(value);
                                    setSelectedAmount(null);
                                }}
                                min={1}
                                max={10000}
                            >
                                <NumberInputField placeholder="Ingresa el monto" />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Box>

                        <Box width="100%">
                            <Text mb={2} fontWeight="medium">Frecuencia de la donación:</Text>
                            <RadioGroup value={frequency} onChange={setFrequency}>
                                <Stack direction={{ base: 'column', sm: 'row' }} spacing={5}>
                                    <Radio value="once" colorScheme="blue">Una vez</Radio>
                                    <Radio value="monthly" colorScheme="blue">Mensual</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>

                        <Button
                            size="lg"
                            width="100%"
                            bg="brand.500"
                            color="white"
                            _hover={{ bg: 'brand.600' }}
                            leftIcon={<Icon as={FaPray} />}
                            onClick={handleDonate}
                        >
                            Donar Ahora
                        </Button>

                        <Text fontSize="sm" color="gray.500" textAlign="center">
                            * Todas las donaciones son deducibles de impuestos
                        </Text>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    );
};

export default Donations;