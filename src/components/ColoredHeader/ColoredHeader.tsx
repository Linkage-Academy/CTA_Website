import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  Anchor,
  Box,
  Burger,
  Button,
  DefaultMantineColor,
  Drawer,
  Group,
  Header as MantineHeader,
  Image,
  MantineTheme,
  MediaQuery,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import React from "react";
// logoUrl from "./assets/Logo.png";
import logoUrl from "./assets/IsotipoCTAMenu 1.png";

import useColoredHeaderStyles from "./ColoredHeader.styles";
import SendEmailModal from "../SendEmailModal";

export interface IColoredHeaderProps {
  color: DefaultMantineColor;
}

// i created this because of desperation
// No time to fixed the circular dependency
const routes = [
  {
    navName: "Home",
    path: "/",
  },
  {
    navName: "Minecraft",
    path: "/minecraft",
  },
  {
    navName: "Bootcamp Web",
    path: "/web",
  },
];

function ColoredHeader({ color }: IColoredHeaderProps) {
  const { classes } = useColoredHeaderStyles({ color });
  const [opened, { toggle, close }] = useDisclosure(false);
  const [openedEmail, { open: openEmail, close: closeEmail }] =
    useDisclosure(false);

  const theme: MantineTheme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  const location = useLocation();

  const links = routes.map((route) => {
    const isCurrentLocation = location.pathname === route.path;
    return (
      <Anchor
        key={route.navName}
        component={Link}
        to={route.path || ""}
        color={isLargeScreen ? "white" : "dark.8"}
        className={isCurrentLocation ? classes.activeLink : undefined}
        underline={isCurrentLocation}
      >
        {route.navName}
      </Anchor>
    );
  });

  return (
    <MantineHeader
      className={classes.header}
      pr="xl"
      height="auto"
      sx={{ alignItems: "center" }}
    >
      <SendEmailModal opened={openedEmail} close={closeEmail} />
      <Image
        maw={280}
        src={logoUrl}
        alt="Academy Linkage Logo"
        className={classes.headerLogo}
      />

      <Box py="sm">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger opened={opened} color="white" onClick={toggle} />
        </MediaQuery>

        <Drawer opened={opened} onClose={close} zIndex={1000}>
          <Stack>
            {links}
            <Anchor
              href="https://academy.linkageacademy.com/login"
              color="black"
              underline={false}
            >
              Aula Virtual
            </Anchor>
          </Stack>
        </Drawer>

        <Group className={classes.desktopNavbar} spacing="xl">
          {links}
          <Anchor
            href="https://academy.linkageacademy.com/login"
            color="white"
            underline={false}
          >
            Aula Virtual
          </Anchor>

          <Button
            className={classes.desktopNavbarCTA}
            size="sm"
            color={`${color}.6`}
            variant="white"
            onClick={openEmail}
          >
            Inscribete Ahora
          </Button>
        </Group>
      </Box>
    </MantineHeader>
  );
}

export default ColoredHeader;
