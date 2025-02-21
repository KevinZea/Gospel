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
        >
            <Box
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="lg"
                position="relative"
                overflow="hidden"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    bg: 'brand.500',
                }}
            >
                <VStack align="stretch" spacing={4}>
                    <HStack justify="space-between" wrap="wrap">
                        <Heading size="md" color="gray.800">
                            {event.title}
                        </Heading>
                        <Badge
                            colorScheme={event.category === 'Especial' ? 'red' : event.category === 'Servicio' ? 'green' : 'blue'}
                            borderRadius="full"
                            px={3}
                            py={1}
                        >
                            {event.category}
                        </Badge>
                    </HStack>

                    <Text color="gray.600">{event.description}</Text>

                    <Divider />

                    <HStack spacing={6} wrap="wrap">
                        <HStack spacing={2}>
                            <Icon as={FaCalendar} color="brand.500" />
                            <Text fontSize="sm">{event.date}</Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Icon as={FaClock} color="brand.500" />
                            <Text fontSize="sm">{event.time}</Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Icon as={FaMapMarkerAlt} color="brand.500" />
                            <Text fontSize="sm">{event.location}</Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Icon as={FaUsers} color="brand.500" />
                            <Text fontSize="sm">{event.capacity} cupos</Text>
                        </HStack>
                    </HStack>

                    <Button
                        rightIcon={<Icon as={event.icon} />}
                        colorScheme="blue"
                        onClick={() => onRegister(event)}
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
        });
    };

    return (
        <Box id="events" py={20} bg="gray.50">
            <Container maxW="1200px">
                <VStack spacing={12}>
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        textAlign="center"
                    >
                        <Heading mb={4}>Próximos Eventos</Heading>
                        <Text color="gray.600" fontSize="lg" maxW="800px">
                            Únete a nuestros eventos especiales y sé parte de nuestra comunidad en crecimiento.
                            Cada evento es una oportunidad para crecer en fe y comunión.
                        </Text>
                    </MotionBox>

                    <VStack spacing={6} width="100%">
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
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Registro para {selectedEvent?.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4} as="form" onSubmit={handleSubmitRegistration}>
                            <FormControl isRequired>
                                <FormLabel>Nombre completo</FormLabel>
                                <Input placeholder="Tu nombre" />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="tu@email.com" />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Teléfono</FormLabel>
                                <Input type="tel" placeholder="Tu número de teléfono" />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Comentarios adicionales</FormLabel>
                                <Input placeholder="¿Algo que debamos saber?" />
                            </FormControl>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme="blue" onClick={handleSubmitRegistration}>
                            Confirmar Registro
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default UpcomingEvents;