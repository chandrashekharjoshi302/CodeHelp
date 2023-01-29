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
  import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
  import styles from '@/styles/Home.module.css'
  import { doc, setDoc } from "firebase/firestore";
  import Image from "next/image";
  import { useState } from "react";
  import { auth, db, provider } from "./firebase/firebase-config";
  import Link from "next/link";
  import {FcGoogle} from "react-icons/fc"
  
  export default function Signup() {
    const [emailSignUp, setEmailSignUp] = useState("");
    const [passwordSignUp, setPasswordSignUp] = useState("");
  
    const Signup = async () => {
      try {
        const email = emailSignUp;
        const password = passwordSignUp;
  
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
  
        const usersCollectionRef = doc(db, "users", user.uid);
        await setDoc(usersCollectionRef, { email, password });
  
        setEmailSignUp("");
        setPasswordSignUp("");
      } catch (error) {
        console.log(error);
      }
    };
  
    const signInWithGoogle = async () => {
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        const name = user.displayName;
        const email = user.email;
  
        const usersCollectionRef = doc(db, "users", user.uid);
        await setDoc(usersCollectionRef, { email, googleAuth: true });
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
        mt="60px"
        id={styles.home}
      >
        <Stack spacing={8} mx={"auto"} w={500} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            {/* <Image
              src={"/Circle Flower Natural Brand Logo (1).png"}
              alt="Logo"
              width={150}
              height={150}
              displayName

            /> */}

<Heading fontSize={"4xl"} textAlign={"center"} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
            Signup
          </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            id={styles.drop}
            p={6}
            textColor="messenger.300"
          >
            <Stack spacing={4}>
              <Box>
                <FormLabel>Email address</FormLabel>
                <input
                  type={"email"}
                  placeholder="Email"
                  value={emailSignUp}
                  my="2"
                  className="w-full font-semibold h-8 bg-transparent focus:bg-transparent focus:outline-none outline-none border-b-4 px-4 py-1 border-blue-900"
                  onChange={(e) => setEmailSignUp(e.target.value)}
                />
              </Box>
  
              <Box>
                <FormLabel>Password</FormLabel>
                <input
                  type={"password"}
                  placeholder="password"
                  value={passwordSignUp}
                  my="2"
                  className="w-full font-semibold h-8 bg-transparent focus:bg-transparent focus:outline-none outline-none border-b-4 px-4 py-1 border-blue-900"
                  onChange={(e) => setPasswordSignUp(e.target.value)}
                />
              </Box>
              <Link href="/Login">
                <Button onClick={Signup} colorScheme="messenger" className="w-full">Sign Up</Button>
              </Link>
              <h1 className="text-center mt-2">....OR.....</h1>
              <Link href="/">
                <Button
                  className="w-full"
                  backgroundColor={"white"}
                  color={"white"}
                  my="2"
                  onClick={signInWithGoogle}
                >
                  <FcGoogle size={24}/>
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  