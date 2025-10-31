// src/components/Header.jsx
import { Box, Flex, Button, IconButton, useDisclosure, VStack, HStack, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

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
            bg="gray.900"
            boxShadow="0 4px 20px rgba(0,0,0,0.3)"
            borderBottom="3px solid"
            borderColor="#e1ad01"
        >
            <Flex
                h={20}
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
                px={6}
                maxW="1200px"
            >
                <MotionBox
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <Box
                        w={150}
                        h={145}
                        filter="drop-shadow(0 2px 8px rgba(225, 173, 1, 0.3))"
                    >
                        <Image src={logo} alt="Logo" w={"100%"} h={"100%"} objectFit="contain" />
                    </Box>
                </MotionBox>

                {/* Desktop Menu */}
                <HStack spacing={2}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-80}
                        >
                            <Button
                                variant="ghost"
                                color='#e1ad01'
                                fontWeight="semibold"
                                fontSize="lg"
                                px={5}
                                py={6}
                                position="relative"
                                _hover={{
                                    color: 'white',
                                    bg: 'rgba(225, 173, 1, 0.1)',
                                    transform: 'translateY(-2px)'
                                }}
                                _active={{
                                    bg: 'rgba(225, 173, 1, 0.2)'
                                }}
                                transition="all 0.3s ease"
                                _after={{
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '0',
                                    height: '2px',
                                    bg: '#e1ad01',
                                    transition: 'width 0.3s ease'
                                }}
                                sx={{
                                    '&:hover::after': {
                                        width: '70%'
                                    }
                                }}
                                display={{ base: 'none', md: 'flex' }}
                            >
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
                    color="#e1ad01"
                    fontSize="xl"
                    _hover={{
                        bg: 'rgba(225, 173, 1, 0.2)',
                        color: 'white'
                    }}
                    aria-label="Toggle Navigation"
                />
            </Flex>

            {/* Mobile Menu */}
            <MotionBox
                display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                bg="gray.800"
                borderTop="1px solid"
                borderColor="gray.700"
            >
                <VStack
                    spacing={0}
                    py={4}
                    divider={<Box borderColor="gray.700" />}
                >
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={onToggle}
                            style={{ width: '100%' }}
                        >
                            <Button
                                w="100%"
                                variant="ghost"
                                color="#e1ad01"
                                fontWeight="semibold"
                                fontSize="lg"
                                py={6}
                                _hover={{
                                    bg: 'rgba(225, 173, 1, 0.15)',
                                    color: 'white'
                                }}
                                _active={{
                                    bg: 'rgba(225, 173, 1, 0.25)'
                                }}
                                justifyContent="flex-start"
                                pl={8}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </VStack>
            </MotionBox>
        </Box>
    );
};

export default Header;