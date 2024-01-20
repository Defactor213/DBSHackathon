import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Grid,
  Link,
} from "@chakra-ui/react";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/userSignUp", {
        username,
        password,
        firstName,
        lastName,
      });

      console.log("Signup successful:", response.data);
      localStorage.setItem("username", username);
      navigate("/login");
    } catch (error) {
      console.error(
        "Error during login:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Container
      maxW="xs"
      mt="50px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text as="h1" fontSize="xl" textAlign="center">
        Sign Up
      </Text>
      <form onSubmit={handleSignup} width="100%">
        <FormControl mb="4">
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            variant="outline"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            variant="outline"
            autoFocus
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            variant="outline"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            variant="outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="100%">
          Sign Up
        </Button>
      </form>
      <Grid mt="4" templateColumns="1fr" gap="2" justifyContent="flex-end">
        <Link href="/login" fontSize="sm">
          Already have an account? Login
        </Link>
      </Grid>
    </Container>
  );
};

export default Signup;
