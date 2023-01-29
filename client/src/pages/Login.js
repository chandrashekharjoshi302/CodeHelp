import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormLabel,
} from "@chakra-ui/react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import { auth, provider } from "./firebase/firebase-config";
import Link from "next/link";

export default function Login() {
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const Login = async () => {
    try {
      const email = emailSignIn;
      const password = passwordSignIn;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setEmailSignIn("");
      setPasswordSignIn("");
    } catch (error) {
      alert("Wrong Credentials");
      console.log(error);
    }
  };
  const Logout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
      // mt={"11%"}
      mt="60px"
      id={styles.home}
    >
      <Stack spacing={8} mx={"auto"} w={500} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
            Login
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          // bg={useColorModeValue("white", "gray.700")}
          id={styles.drop}
          boxShadow={"lg"}
          p={6}
          className=""
          textColor="messenger.300"
        >
          <Stack spacing={4}>
            <Box>
              <FormLabel>Email address</FormLabel>
              <input
                type={"email"}
                placeholder="Example@gmail.com"
                value={emailSignIn}
                my="2"
                required
                className="w-full font-semibold h-8 bg-transparent focus:bg-transparent focus:outline-none outline-none border-b-4 px-4 text-white py-1 border-blue-900"
                onChange={(e) => setEmailSignIn(e.target.value)}
              />
            </Box>

            <Box>
              <FormLabel>Password</FormLabel>
              <input
                type={"password"}
                placeholder="**********"
                value={passwordSignIn}
                my="2"
                required
                className="w-full font-semibold h-8 bg-transparent focus:outline-none outline-none border-b-4 px-4 py-1 text-white border-blue-900"
                onChange={(e) => setPasswordSignIn(e.target.value)}
              />
            </Box>
            <Link href="/">
              <Button onClick={Login} colorScheme="messenger" className="w-full ">Login</Button>
            </Link>
            {/* <Link href="/">
              <Button my="2" onClick={Logout}>
                Logout
              </Button>
            </Link> */}
          </Stack>
          <h1 className="mt-3 text-center font-semibold">If don't have Account with us <Link href="/signup"> <span className="text-pink-600">Click Here</span></Link> </h1>
        </Box>
      </Stack>
    </Flex>
  );
}