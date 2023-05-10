import { Box, Stack, useMantineTheme } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import ColoredHeader from "../ColoredHeader";
import Hero from "../Hero";
import useHeroHeaderStyles from "./HeroHeader.styles";
import { IHeroProps } from "../Hero/Hero";

type IHeroHeaderProps = IHeroProps;

function HeroHeader({ color, title, rightSection }: IHeroHeaderProps) {
  const { classes } = useHeroHeaderStyles({ color });

  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const xPadding = isLargeScreen ? 128 : "xs";

  return (
    <Stack id="hero" spacing={0} sx={{ position: "relative" }} bg="gray.1">
      <ColoredHeader color={color} />
      <Box className={classes.rightSidebar} />

      <Box px={xPadding} my="md">
        <Hero color={color} title={title} rightSection={rightSection} />
      </Box>
    </Stack>
  );
}

export default HeroHeader;
