// src/components/Header.jsx
import { Box, Flex, Button, IconButton, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const MotionBox = motion(Box);

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    const menuItems = [
        { name: 'Inicio', to: 'home' },
        { name: 'Servicios', to: 'services' },
        { name: 'Galería', to: 'gallery' },
        { name: 'Ubicación', to: 'location' },
        { name: 'Contacto', to: 'contact' },
    ];

    return (
        <Box
            as="nav"
            position="fixed"
            top="0"
            width="100%"
            zIndex="1000"
            bg="white"
            boxShadow="0 2px 10px rgba(0,0,0,0.1)"
        >
            <Flex
                h={16}
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
                px={4}
                maxW="1200px"
            >
                <MotionBox
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Box fontSize="2xl" fontWeight="bold" color="brand.500">
                        Gospel
                    </Box>
                </MotionBox>

                {/* Desktop Menu */}
                <HStack
                    spacing={8}
                    display={{ base: 'none', md: 'flex' }}
                >
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            <Button variant="ghost" color="gray.600" _hover={{ color: 'brand.500' }}>
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </HStack>

                {/* Mobile Menu Button */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    variant="ghost"
                    aria-label="Toggle Navigation"
                />
            </Flex>

            {/* Mobile Menu */}
            <VStack
                display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
                pb={4}
                bg="white"
            >
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={onToggle}
                    >
                        <Button w="100%" variant="ghost">
                            {item.name}
                        </Button>
                    </Link>
                ))}
            </VStack>
        </Box>
    );
};

export default Header;