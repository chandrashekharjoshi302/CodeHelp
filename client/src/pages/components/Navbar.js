import React from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import {RiLogoutCircleRLine} from 'react-icons/ri'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import { GoHome, GoInfo } from "react-icons/go";

import useAuth from "../useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const Navbar = () => {
  const currentUser = useAuth();
 
  const toast=useToast()

  const Logout = async () => {
    try {
      await signOut(auth);
      toast({
        status:"success",
        duration:"3000",
        isClosable:true,
        title:"Logout",
        description:"Successfull.",
        position:"top"
      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" fixed w-full z-20 -mt-[60px] " id={styles.nav}>
      <div
        className="flex h-[60px] text-xl items-center px-2 justify-between font-sans font-medium  text-gray-300 w-full  "
        id={styles.mai}
      >
        <div className=" px-0 md:px-5 items-center relative  h-[90px] top-5">
          <Link href="/">
            <Image
              src="/quizzy.png"
              width="110"
              height="20"
              className="w-[60px] md:w-[90px] cursor-pointer"
              alt="photo"
            ></Image>
          </Link>
        </div>
        <div className=" h-[35px] px-3 md:w-[35%] md:h-[40px] rounded-xl items-center bg-white flex md:px-3 justify-between">
          <div className="w-[80%] md:w-[90%] h-full">
            <input
              placeholder="Search"
              className=" md:h-[38px] w-[80%] md:w-[90%]  outline-none text-gray-600 text-xs md:text-lg font-normal rounded-xl"
            />
          </div>
          <div className="border-l-2 h-full flex items-center px-2 overflow-hidden ">
            <BsSearch className="text-[13px] md:text-[17px] text-gray-600 cursor-pointer hover:scale-105 duration-300" />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex md:text-sm lg:text-xl font-medium gap-6  h-full justify-center items-center md:px-6">
            <Link href="/">
              <h1 className="cursor-pointer hover:scale-110 duration-200 text-2xl">
                <GoHome />{" "}
              </h1>
            </Link>
            <h1 className="cursor-pointer hover:scale-110 duration-200 text-2xl">
              <GoInfo />
            </h1>
            <Link href="/Login">
             {currentUser?"": <h1
                className="cursor-pointer hover:scale-110 duration-200 border-2 px-2 py-1 rounded-md"
                id={styles.btn}
              >
                Signin
              </h1>}
            </Link>
            {/* <Link href="/signup">
        <h1 className="cursor-pointer hover:scale-110 duration-200 border-2 px-2 py-1 rounded-md">Register</h1>
        </Link> */}
            <Text style={{ cursor: "pointer" }}>
              {currentUser ? currentUser.email.substring(
                      0,
                      currentUser.email.indexOf("@")
                    ) : ""}
            </Text>
            <Link href="/" >
            <Text style={{ cursor: "pointer" }} onClick={()=>Logout()} >
              {currentUser ? <RiLogoutCircleRLine size={24}/> : ""}
            </Text>
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <Menu className="text-black">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon className="text-3xl" />}
              variant="none"
            />
            <MenuList color="blackAlpha.700">
              <Link href="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <MenuItem>About</MenuItem>
              <Link href="/Login">
                <MenuItem className="flex gap-2">
                  {currentUser ? currentUser.email.substring(
                      0,
                      currentUser.email.indexOf("@")
                    ): "Signin"} <span onClick={Logout}> {currentUser ? <RiLogoutCircleRLine size={24}/> : ""}</span>
                </MenuItem>
              </Link>
              {/* <MenuItem onClick={Logout}>
              {currentUser ? "logout" : ""}
                </MenuItem> */}
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
