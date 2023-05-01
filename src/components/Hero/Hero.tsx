import {
  Box,
  Button,
  DefaultMantineColor,
  Group,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import useHeroStyles from "./Hero.styles";
import SendEmailModal from "../SendEmailModal";

export interface IHeroProps {
  title: string;
  color: DefaultMantineColor;
  rightSection: React.ReactNode;
}

function Hero({ title, color, rightSection }: IHeroProps) {
  const { classes } = useHeroStyles({ color });
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const buttonSize = isLargeScreen ? "lg" : "sm";
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <SendEmailModal opened={opened} close={close} />

      <Group
        noWrap
        grow={isLargeScreen}
        spacing={isLargeScreen ? 128 : "sm"}
        mb="1rem"
      >
        <Stack className={classes.mainHero}>
          <Title className={classes.mainTitle} align="left">
            {title}
          </Title>
          <Box>
            <Button
              color={`${color}.8`}
              size={buttonSize}
              fullWidth={!isLargeScreen}
              radius="md"
              onClick={open}
            >
              ¡Registrate Ahora!
            </Button>
          </Box>
        </Stack>

        <Group spacing={0} noWrap p={0}>
          {rightSection}
        </Group>
      </Group>
    </>
  );
}

export default Hero;
