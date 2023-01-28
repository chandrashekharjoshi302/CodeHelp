import React from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import styles from "../src/styles/Home.module.css";
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
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div className="flex h-[60px] text-xl items-center px-2 justify-between font-sans font-medium  text-gray-300 w-full fixed" id={styles.main}>
      <div className=" px-0 md:px-5 items-center ">
        <Image src="/quizzy.png" width="110" height="30" className="w-[60px] md:w-[90px] border-4 cursor-pointer" alt="photo"></Image>
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
        <h1 className="cursor-pointer hover:scale-110 duration-200">Home</h1>
        <h1 className="cursor-pointer hover:scale-110 duration-200">About Us</h1>
        <h1 className="cursor-pointer hover:scale-110 duration-200 border-2 px-2 py-1 rounded-md ">Signin</h1>
        <h1 className="cursor-pointer hover:scale-110 duration-200 border-2 px-2 py-1 rounded-md">Register</h1>
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
            <MenuItem >
              Home
            </MenuItem>
            <MenuItem >
              About
            </MenuItem>
            <MenuItem >
              Signin
            </MenuItem>
            <MenuItem >
              Register
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
