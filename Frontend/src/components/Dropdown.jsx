import { useState } from "react";
import { Menu, Button } from "@mantine/core";
import GoogleIcon from "../assets/search.png";

export default function Dropdown() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      opened={opened}
      onChange={setOpened}
      width={320}  
      shadow="md"
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right", duration: 150 }}
    >
      <Menu.Target>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md flex items-center gap-2">
          Get Started
        </Button>
      </Menu.Target>

      <Menu.Dropdown className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
        <Menu.Item className="w-full text-center px-4 py-2.5 text-gray-700 text-sm hover:bg-gray-100 transition">
          Login with Email
        </Menu.Item>

        <div className="w-full flex items-center px-4 py-2.5">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-xs font-medium">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <Menu.Item className="w-full text-center">
          <Button
            variant="default"
            className="w-full flex items-center justify-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2.5 transition"
          >
            <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
            <span className="ml-2">Continue with Google</span>
          </Button>
        </Menu.Item>

        <div className="w-full flex items-center px-4 py-2.5">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-xs font-medium">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <Menu.Item className="w-full text-center px-4 py-2.5 text-gray-700 text-sm hover:bg-gray-100 transition">
          Sign Up
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
