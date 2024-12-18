import { Box, Flex, For, Heading, IconButton, Text } from "@chakra-ui/react";
import { LuBrain, LuHome, LuLibrary, LuMenu } from "react-icons/lu";
import { ColorModeButton } from "../components/ui/color-mode";
import { NavLink, Outlet, useLocation } from "react-router";
import { IconType } from "react-icons";
import {
  KAsidePadding,
  KBorderWidth,
  KIconSize,
  KStrokeWidth,
} from "../constants";
import { useEffect, useState } from "react";

type NavLinkType = {
  title: string;
  path: string;
  icon: IconType;
};

const NavLinks: NavLinkType[] = [
  { title: "Home", path: "/", icon: LuHome },
  { title: "Dev Notes", path: "/notes", icon: LuBrain },
  { title: "Articles", path: "/articles", icon: LuLibrary },
];

export default function DashboardLayout() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const location = useLocation();

  function toggleAside() {
    setIsAsideOpen(!isAsideOpen);
  }

  useEffect(() => {
    setIsAsideOpen(false);
  }, [location]);

  return (
    <Flex color={"gray.fg"}>
      <Box
        borderRightWidth={{ base: 1, lg: KBorderWidth }}
        bg={"gray.contrast"}
        flexBasis={"260px"}
        width={isAsideOpen ? "300px" : "0"}
        overflowX={{ base: "hidden", lg: "visible" }}
        position={{ base: "fixed", lg: "relative" }}
        transition={"width ease-in-out 200ms"}
        zIndex={20}
      >
        <Flex flexDir={"column"} height={"dvh"} position={"sticky"} top={0}>
          <Heading
            size={"3xl"}
            fontWeight={"extrabold"}
            color={"blue.500"}
            paddingX={KAsidePadding}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            height={"72px"}
            borderBottomWidth={KBorderWidth}
          >
            DailyDEV
          </Heading>
          <Flex flexDir={"column"} flexGrow={1} gapY={2} padding={4}>
            <For each={NavLinks}>
              {(link, index) => (
                <NavLink key={index} to={link.path}>
                  {({ isActive }) => (
                    <Flex
                      paddingX={4}
                      paddingY={4}
                      gapX={2}
                      // textDecorationColor={"blue.500"}
                      // textDecorationThickness={2}
                      // textDecorationStyle={"wavy"}
                      // textUnderlineOffset={4}
                      // textDecorationLine={isActive ? "underline" : "unset"}
                      bg={isActive ? "bg.emphasized" : "transparent"}
                      borderRadius={"sm"}
                      _hover={{bg: "bg.emphasized"}}
                    >
                      <link.icon size={KIconSize} strokeWidth={KStrokeWidth} />
                      <Text textStyle={"md"} fontWeight={"medium"}>
                        {link.title}
                      </Text>
                    </Flex>
                  )}
                </NavLink>
              )}
            </For>
          </Flex>
          <Flex
            height={"72px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderYWidth={KBorderWidth}
            paddingX={KAsidePadding}
          >
            <Box></Box>
            <ColorModeButton />
          </Flex>
        </Flex>
      </Box>
      <Box flexGrow={1}>
        <Flex
          height={"72px"}
          borderBottomWidth={KBorderWidth}
          alignItems={"center"}
          justifyContent={"space-between"}
          position={"sticky"}
          top={0}
          bg={{ base: "white", _dark: "black" }}
          paddingX={4}
          zIndex={10}
        >
          <Heading textStyle={"3xl"} fontWeight={"bold"}>
            Dev Notes
          </Heading>
          <IconButton
            variant={"ghost"}
            display={{ base: "grid", lg: "none" }}
            onClick={toggleAside}
          >
            <LuMenu size={KIconSize} strokeWidth={KStrokeWidth} />
          </IconButton>
        </Flex>
        <Box paddingX={4} paddingY={4}>
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
}
