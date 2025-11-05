// src/components/UpcomingEvents.jsx
import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Icon,
    Badge,
    Divider,
    useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUsers, FaPray, FaMusic, FaBible } from 'react-icons/fa';

const MotionBox = motion(Box);

const EventCard = ({ event, onRegister }) => {
    return (
        <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
                x: 10,
                boxShadow: "0 20px 40px rgba(225, 173, 1, 0.2)"
            }}
        >
            <Box
                bg="gray.800"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                position="relative"
                overflow="hidden"
                border="1px solid"
                borderColor="gray.700"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '100%',
                    bg: '#e1ad01',
                }}
            >
                <VStack align="stretch" spacing={5}>
                    <HStack justify="space-between" wrap="wrap" gap={3}>
                        <Heading size="md" color="white" fontWeight="bold">
                            {event.title}
                        </Heading>
                        <Badge
                            bg={event.category === 'Especial' ? '#e1ad01' : event.category === 'Servicio' ? 'gray.700' : 'gray.600'}
                            color={event.category === 'Especial' ? 'gray.900' : 'white'}
                            borderRadius="full"
                            px={4}
                            py={1}
                            fontSize="sm"
                            fontWeight="bold"
                            textTransform="uppercase"
                        >
                            {event.category}
                        </Badge>
                    </HStack>

                    <Text color="gray.300" lineHeight="tall">
                        {event.description}
                    </Text>

                    <Divider borderColor="gray.700" />

                    <VStack spacing={3} align="stretch">
                        <HStack spacing={3}>
                            <Box
                                bg="rgba(225, 173, 1, 0.1)"
                                p={2}
                                borderRadius="md"
                            >
                                <Icon as={FaCalendar} color="#e1ad01" />
                            </Box>
                            <Text fontSize="sm" color="gray.300" fontWeight="medium">
                                {event.date}
                            </Text>
                        </HStack>

                        <HStack spacing={3}>
                            <Box
                                bg="rgba(225, 173, 1, 0.1)"
                                p={2}
                                borderRadius="md"
                            >
                                <Icon as={FaClock} color="#e1ad01" />
                            </Box>
                            <Text fontSize="sm" color="gray.300" fontWeight="medium">
                                {event.time}
                            </Text>
                        </HStack>

                        <HStack spacing={3}>
                            <Box
                                bg="rgba(225, 173, 1, 0.1)"
                                p={2}
                                borderRadius="md"
                            >
                                <Icon as={FaMapMarkerAlt} color="#e1ad01" />
                            </Box>
                            <Text fontSize="sm" color="gray.300" fontWeight="medium">
                                {event.location}
                            </Text>
                        </HStack>

                        <HStack spacing={3}>
                            <Box
                                bg="rgba(225, 173, 1, 0.1)"
                                p={2}
                                borderRadius="md"
                            >
                                <Icon as={FaUsers} color="#e1ad01" />
                            </Box>
                            <Text fontSize="sm" color="gray.300" fontWeight="medium">
                                {event.capacity} cupos disponibles
                            </Text>
                        </HStack>
                    </VStack>

                    <Button
                        rightIcon={<Icon as={event.icon} />}
                        bg="#e1ad01"
                        color="gray.900"
                        size="lg"
                        fontWeight="bold"
                        onClick={() => onRegister(event)}
                        _hover={{
                            bg: '#c99801',
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg'
                        }}
                        _active={{
                            bg: '#b08801',
                            transform: 'translateY(0)'
                        }}
                        mt={2}
                    >
                        Registrarme
                    </Button>
                </VStack>
            </Box>
        </MotionBox>
    );
};

const UpcomingEvents = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const toast = useToast();

    const events = [
        {
            title: "Retiro Espiritual 2024",
            description: "Un fin de semana de renovación espiritual, adoración y comunión con hermanos en Cristo.",
            date: "15-17 Marzo, 2024",
            time: "Todo el día",
            location: "Campo Retreat Center",
            category: "Especial",
            capacity: 150,
            icon: FaPray
        },
        {
            title: "Noche de Alabanza",
            description: "Una noche especial de adoración con nuestro ministerio de música y artistas invitados.",
            date: "5 Marzo, 2024",
            time: "7:00 PM",
            location: "Auditorio Principal",
            category: "Adoración",
            capacity: 300,
            icon: FaMusic
        },
        {
            title: "Estudio Bíblico Intensivo",
            description: "Profundiza en las escrituras con nuestros maestros en este curso intensivo de 3 días.",
            date: "20-22 Marzo, 2024",
            time: "6:00 PM - 9:00 PM",
            location: "Sala de Conferencias",
            category: "Servicio",
            capacity: 80,
            icon: FaBible
        }
    ];

    const handleRegister = (event) => {
        setSelectedEvent(event);
        onOpen();
    };

    const handleSubmitRegistration = (e) => {
        e.preventDefault();
        onClose();
        toast({
            title: "Registro exitoso",
            description: `Te has registrado para ${selectedEvent.title}. Te enviaremos más información por correo.`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
        });
    };

    return (
        <Box id="events" py={20} bg="gray.900">
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
                            Próximos Eventos
                        </Heading>
                        <Text color="gray.400" fontSize="lg" maxW="800px" mt={6}>
                            Únete a nuestros eventos especiales y sé parte de nuestra comunidad en crecimiento.
                            Cada evento es una oportunidad para crecer en fe y comunión.
                        </Text>
                    </MotionBox>

                    <VStack spacing={8} width="100%">
                        {events.map((event, index) => (
                            <EventCard
                                key={index}
                                event={event}
                                onRegister={handleRegister}
                            />
                        ))}
                    </VStack>
                </VStack>
            </Container>

            <Modal isOpen={isOpen} onClose={onClose} size="md">
                <ModalOverlay backdropFilter="blur(4px)" />
                <ModalContent bg="gray.800" borderColor="gray.700" border="1px solid">
                    <ModalHeader color="white" borderBottom="1px solid" borderColor="gray.700">
                        Registro para {selectedEvent?.title}
                    </ModalHeader>
                    <ModalCloseButton color="gray.400" _hover={{ color: "#e1ad01" }} />
                    <ModalBody py={6}>
                        <VStack spacing={5} as="form" onSubmit={handleSubmitRegistration}>
                            <FormControl isRequired>
                                <FormLabel color="gray.300" fontWeight="semibold">
                                    Nombre completo
                                </FormLabel>
                                <Input
                                    placeholder="Tu nombre"
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
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel color="gray.300" fontWeight="semibold">
                                    Email
                                </FormLabel>
                                <Input
                                    type="email"
                                    placeholder="tu@email.com"
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
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel color="gray.300" fontWeight="semibold">
                                    Teléfono
                                </FormLabel>
                                <Input
                                    type="tel"
                                    placeholder="Tu número de teléfono"
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
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel color="gray.300" fontWeight="semibold">
                                    Comentarios adicionales
                                </FormLabel>
                                <Input
                                    placeholder="¿Algo que debamos saber?"
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
                                />
                            </FormControl>
                        </VStack>
                    </ModalBody>

                    <ModalFooter borderTop="1px solid" borderColor="gray.700">
                        <Button
                            variant="ghost"
                            mr={3}
                            onClick={onClose}
                            color="gray.400"
                            _hover={{
                                bg: "gray.700",
                                color: "white"
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            bg="#e1ad01"
                            color="gray.900"
                            fontWeight="bold"
                            onClick={handleSubmitRegistration}
                            _hover={{
                                bg: '#c99801'
                            }}
                            _active={{
                                bg: '#b08801'
                            }}
                        >
                            Confirmar Registro
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default UpcomingEvents;