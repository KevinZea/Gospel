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
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        cursor="pointer"
        onClick={onClick}
        position="relative"
    >
        <Box
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            bg={isSelected ? 'rgba(225, 173, 1, 0.1)' : 'gray.800'}
            border="2px solid"
            borderColor={isSelected ? '#e1ad01' : 'gray.700'}
            transition="all 0.3s"
            _hover={{
                borderColor: '#e1ad01',
                boxShadow: '0 20px 40px rgba(225, 173, 1, 0.3)'
            }}
        >
            {isPopular && (
                <Badge
                    position="absolute"
                    top="-3"
                    right="-3"
                    px={4}
                    py={2}
                    bg="#e1ad01"
                    color="gray.900"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    boxShadow="0 4px 12px rgba(225, 173, 1, 0.4)"
                >
                    Más Popular
                </Badge>
            )}

            <VStack spacing={5}>
                <Box
                    bg={isSelected ? '#e1ad01' : 'rgba(225, 173, 1, 0.1)'}
                    p={4}
                    borderRadius="full"
                    transition="all 0.3s"
                >
                    <Icon
                        as={icon}
                        w={8}
                        h={8}
                        color={isSelected ? 'gray.900' : '#e1ad01'}
                    />
                </Box>
                <Heading size="md" color="white">
                    {title}
                </Heading>
                <Text color="gray.300" textAlign="center" lineHeight="tall">
                    {description}
                </Text>
                <Heading
                    size="2xl"
                    color="#e1ad01"
                    fontWeight="bold"
                >
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
                position: 'top',
            });
            return;
        }

        toast({
            title: 'Gracias por tu donación',
            description: `Has elegido donar $${amount} ${frequency === 'monthly' ? 'mensualmente' : 'una vez'}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top',
        });
    };

    return (
        <Box id="donations" py={20} bg="gray.900">
            <Container maxW="1200px">
                <VStack spacing={16}>
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        textAlign="center"
                    >
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
                            Apoya Nuestra Misión
                        </Heading>
                        <Text color="gray.400" fontSize="lg" maxW="800px" mt={6} lineHeight="tall">
                            Tu generosidad nos permite continuar compartiendo el mensaje de amor y esperanza con nuestra comunidad.
                            Cada donación hace la diferencia.
                        </Text>
                    </MotionBox>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
                        {donationOptions.map((option, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <DonationCard
                                    {...option}
                                    isSelected={selectedAmount === option.amount}
                                    onClick={() => {
                                        setSelectedAmount(option.amount);
                                        setCustomAmount('');
                                    }}
                                />
                            </MotionBox>
                        ))}
                    </SimpleGrid>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        width="100%"
                        maxW="600px"
                    >
                        <VStack
                            spacing={6}
                            width="100%"
                            bg="gray.800"
                            p={8}
                            borderRadius="xl"
                            border="2px solid"
                            borderColor="gray.700"
                            boxShadow="xl"
                        >
                            <Box width="100%">
                                <Text mb={3} fontWeight="semibold" color="white" fontSize="lg">
                                    O ingresa un monto personalizado:
                                </Text>
                                <NumberInput
                                    value={customAmount}
                                    onChange={(value) => {
                                        setCustomAmount(value);
                                        setSelectedAmount(null);
                                    }}
                                    min={1}
                                    max={10000}
                                >
                                    <NumberInputField
                                        placeholder="Ingresa el monto"
                                        bg="gray.700"
                                        border="1px solid"
                                        borderColor="gray.600"
                                        color="white"
                                        _placeholder={{ color: "gray.400" }}
                                        _hover={{ borderColor: "#e1ad01" }}
                                        _focus={{
                                            borderColor: "#e1ad01",
                                            boxShadow: "0 0 0 1px #e1ad01"
                                        }}
                                        fontSize="lg"
                                        height="50px"
                                    />
                                    <NumberInputStepper borderColor="gray.600">
                                        <NumberIncrementStepper
                                            color="gray.400"
                                            _hover={{ color: "#e1ad01" }}
                                            borderColor="gray.600"
                                        />
                                        <NumberDecrementStepper
                                            color="gray.400"
                                            _hover={{ color: "#e1ad01" }}
                                            borderColor="gray.600"
                                        />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Box>

                            <Box width="100%">
                                <Text mb={3} fontWeight="semibold" color="white" fontSize="lg">
                                    Frecuencia de la donación:
                                </Text>
                                <RadioGroup value={frequency} onChange={setFrequency}>
                                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={6}>
                                        <Box
                                            flex="1"
                                            p={4}
                                            borderRadius="lg"
                                            bg={frequency === 'once' ? 'rgba(225, 173, 1, 0.1)' : 'gray.700'}
                                            border="2px solid"
                                            borderColor={frequency === 'once' ? '#e1ad01' : 'gray.600'}
                                            cursor="pointer"
                                            transition="all 0.3s"
                                            _hover={{ borderColor: '#e1ad01' }}
                                        >
                                            <Radio
                                                value="once"
                                                colorScheme="yellow"
                                                sx={{
                                                    '[data-checked]': {
                                                        bg: '#e1ad01',
                                                        borderColor: '#e1ad01'
                                                    }
                                                }}
                                            >
                                                <Text color="white" fontWeight="medium">Una vez</Text>
                                            </Radio>
                                        </Box>
                                        <Box
                                            flex="1"
                                            p={4}
                                            borderRadius="lg"
                                            bg={frequency === 'monthly' ? 'rgba(225, 173, 1, 0.1)' : 'gray.700'}
                                            border="2px solid"
                                            borderColor={frequency === 'monthly' ? '#e1ad01' : 'gray.600'}
                                            cursor="pointer"
                                            transition="all 0.3s"
                                            _hover={{ borderColor: '#e1ad01' }}
                                        >
                                            <Radio
                                                value="monthly"
                                                colorScheme="yellow"
                                                sx={{
                                                    '[data-checked]': {
                                                        bg: '#e1ad01',
                                                        borderColor: '#e1ad01'
                                                    }
                                                }}
                                            >
                                                <Text color="white" fontWeight="medium">Mensual</Text>
                                            </Radio>
                                        </Box>
                                    </Stack>
                                </RadioGroup>
                            </Box>

                            <Button
                                size="lg"
                                width="100%"
                                height="60px"
                                bg="#e1ad01"
                                color="gray.900"
                                fontSize="xl"
                                fontWeight="bold"
                                leftIcon={<Icon as={FaPray} />}
                                onClick={handleDonate}
                                _hover={{
                                    bg: '#c99801',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 24px rgba(225, 173, 1, 0.4)'
                                }}
                                _active={{
                                    bg: '#b08801',
                                    transform: 'translateY(0)'
                                }}
                                transition="all 0.3s ease"
                            >
                                Donar Ahora
                            </Button>

                            <Text fontSize="sm" color="gray.400" textAlign="center" mt={2}>
                                * Todas las donaciones son deducibles de impuestos
                            </Text>
                        </VStack>
                    </MotionBox>
                </VStack>
            </Container>
        </Box>
    );
};

export default Donations;