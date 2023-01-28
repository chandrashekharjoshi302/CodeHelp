import React from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Button,
  Text,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import useAuth from "../useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const Navbar = () => {
  const currentUser = useAuth();

  const Logout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{marginTop:"0px"}} className="mt-0 border">
    <div className="flex h-[60px] text-xl items-center px-2 justify-between font-sans font-medium  text-gray-300 w-full fixed mb-10" id={styles.mai}>
      <div className=" px-0 md:px-5 items-center border border-red-600 ">
        <Link href="/">
        <Image src="/quizzy.png" width="110" height="20" className="w-[60px] md:w-[90px] cursor-pointer" alt="photo"></Image>
        </Link>
      </div>
      <div className=" h-[35px] px-3 md:w-[35%] md:h-[40px] rounded-xl items-center bg-white flex md:px-3 justify-between">
        <input
          placeholder="Search"
          className=" md:h-[38px] outline-none text-gray-600 text-xs md:text-lg font-normal rounded-xl"
        />
        <BsSearch className="text-[13px] md:text-[17px] text-gray-600 cursor-pointer" />
      </div>
      
      <div className="hidden md:block">
      <div className="flex md:text-sm lg:text-xl font-medium gap-6  h-full justify-center items-center md:px-6">
        <Link href="/">
        <h1 className="cursor-pointer hover:scale-110 duration-200">Home</h1>
        </Link>
        <h1 className="cursor-pointer hover:scale-110 duration-200">About Us</h1>
        <Link href="/login">
        <h1 className="cursor-pointer hover:scale-110 duration-200 border-2 px-2 py-1 rounded-md ">{currentUser?currentUser.displayName:"Signin"}</h1>
        </Link>
        <Link href="/signup">
        <Text className="cursor-pointer">
            {currentUser?"":"Register"}
        </Text>
        </Link>
        <Text style={{cursor:"pointer"}} onClick={Logout}>{currentUser?"Logout":""}</Text>
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
            <MenuItem >
              Home
            </MenuItem>
            </Link>
            <MenuItem >
              About
            </MenuItem>
            <Link href="/login">
            <MenuItem >
            {currentUser?currentUser.displayName:"Signin"}
            </MenuItem>
            </Link>
            <Link href="/signup">
            <MenuItem >
            {currentUser?"":"Register"}
            </MenuItem>
            </Link>
            <MenuItem>
            <Text style={{cursor:"pointer"}} onClick={Logout}>{currentUser?"Logout":""}</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
