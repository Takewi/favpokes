// src/pages/Home.jsx

import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box textAlign="center" mt={10}>
      <Heading>Bem-vindo à Página Inicial</Heading>
      <Text mt={4}>
        Esta é a página principal da sua aplicação, acessível apenas após o
        login.
      </Text>
    </Box>
  );
};

export default Home;
