import { useState } from "react";
import { Menu, Button } from "@mantine/core";
import GoogleIcon from "../assets/search.png";
export default function Dropdown() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      opened={opened}
      onChange={setOpened}
      width={240}
      shadow="md"
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right", duration: 150 }}
    >
      <Menu.Target>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-md flex items-center gap-2"
        >
          Get Started
        </Button>
      </Menu.Target>

      <Menu.Dropdown className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
        <Menu.Item
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-none transition-colors"
        >
          Login with Email
        </Menu.Item>

        <Menu.Item
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-none transition-colors"
        >
          <Button variant="default" rightIcon={GoogleIcon}>Continue with Google</Button>
        </Menu.Item>

        <Menu.Item
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-none transition-colors"
        >
          SignUp
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}