import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ChakraProvider, Box, Flex, Text, IconButton, VStack, HStack, Container } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaUser, FaMoneyBillWave } from "react-icons/fa";
import { RecoilRoot } from "recoil";

const Header = () => (
  <Flex as="header" width="100%" padding="4" bg="blue.500" color="white" justifyContent="space-between" alignItems="center">
    <Text fontSize="xl" fontWeight="bold">
      Investment Platform
    </Text>
    <HStack spacing="4">
      <Link to="/">
        <IconButton aria-label="Home" icon={<FaHome />} />
      </Link>
      <Link to="/portfolio">
        <IconButton aria-label="Portfolio" icon={<FaChartLine />} />
      </Link>
      <Link to="/market">
        <IconButton aria-label="Market" icon={<FaMoneyBillWave />} />
      </Link>
      <Link to="/account">
        <IconButton aria-label="Account" icon={<FaUser />} />
      </Link>
    </HStack>
  </Flex>
);

const Sidebar = () => (
  <VStack as="nav" width="200px" padding="4" bg="gray.100" height="100vh" spacing="4">
    <Link to="/">
      <Text>Home</Text>
    </Link>
    <Link to="/portfolio">
      <Text>Portfolio</Text>
    </Link>
    <Link to="/market">
      <Text>Market</Text>
    </Link>
    <Link to="/account">
      <Text>Account</Text>
    </Link>
  </VStack>
);

const Home = () => (
  <Container centerContent>
    <Text fontSize="2xl">Welcome to the Investment Platform</Text>
    <Text>Get started by exploring your portfolio or checking the market data.</Text>
  </Container>
);

const Portfolio = () => (
  <Container centerContent>
    <Text fontSize="2xl">Your Portfolio</Text>
    <Text>Here you can manage your investments.</Text>
  </Container>
);

const Market = () => (
  <Container centerContent>
    <Text fontSize="2xl">Market Data</Text>
    <Text>Stay updated with the latest market trends.</Text>
  </Container>
);

const Account = () => (
  <Container centerContent>
    <Text fontSize="2xl">Your Account</Text>
    <Text>Manage your account settings and personal information.</Text>
  </Container>
);

const App = () => (
  <RecoilRoot>
    <ChakraProvider>
      <Router>
        <Flex direction="column" height="100vh">
          <Header />
          <Flex flex="1">
            <Sidebar />
            <Box flex="1" padding="4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/market" element={<Market />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </Box>
          </Flex>
        </Flex>
      </Router>
    </ChakraProvider>
  </RecoilRoot>
);

export default App;
