// Components
import {
  ActionIcon,
  Box,
  Card,
  Center,
  DefaultMantineColor,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { IconAbc } from "@tabler/icons-react";
import HeroHeader from "../../components/HeroHeader";
import StackInfobox, {
  IStackInfoboxProps,
} from "../../components/StackInfobox/StackInfobox";
import ValuesSection, {
  IValuesSectionprops,
} from "../../components/ValuesSection/ValuesSection";
import AboutUs, { IAboutUsprops } from "../../components/AboutUs/AboutUs";

// Interfaces
import { IGroupInfoboxProps } from "../../components/GroupInfobox/GroupInfobox";

// style
import useHomePageTemplateStyles from "./HomePageTemplate.styles";

// React

export interface IHomePageTemplateProps {
  accentColor: DefaultMantineColor;
  hero: {
    title: string;
    rightSection: React.ReactNode;
  };
  infoFirst: IStackInfoboxProps;
  valuesInfo: IValuesSectionprops;
  aboutUsInfo: IAboutUsprops;
}

function HomePageTemplate({
  accentColor,
  hero,
  infoFirst,
  valuesInfo,
  aboutUsInfo,
}: IHomePageTemplateProps) {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const xPadding = isLargeScreen ? 128 : "xs";
  const { classes } = useHomePageTemplateStyles();

  return (
    <Stack spacing="xl">
      <HeroHeader
        title={hero.title}
        color={accentColor}
        rightSection={hero.rightSection}
      />
      <Stack px={xPadding} spacing="sm">
        <Stack spacing="md">
          <Title className={classes.titleSection}>Nuestros Valores</Title>
          <SimpleGrid
            cols={4}
            breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
          >
            <Card withBorder shadow="xs">
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon color="dark.9" variant="transparent" size="xl">
                  <IconAbc size="3rem" />
                </ActionIcon>
                <Box>
                  <Text fz="lg" fw={700}>
                    Compromiso
                  </Text>
                  <Text fz="md">en la sastifacción del cliente</Text>
                </Box>
              </Stack>
            </Card>

            <Card withBorder shadow="xs">
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon color="dark.9" variant="transparent" size="xl">
                  <IconAbc size="3rem" />
                </ActionIcon>
                <Box>
                  <Text fz="lg" fw={700}>
                    Respeto
                  </Text>
                  <Text fz="md">en nuestras comunicaciones</Text>
                </Box>
              </Stack>
            </Card>

            <Card withBorder shadow="xs">
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon color="dark.9" variant="transparent" size="xl">
                  <IconAbc size="3rem" />
                </ActionIcon>
                <Box>
                  <Text fz="lg" fw={700}>
                    Voluntad
                  </Text>
                  <Text fz="md">en impartir el mejor contenido</Text>
                </Box>
              </Stack>
            </Card>

            <Card withBorder shadow="xs">
              <Stack align="center" sx={{ textAlign: "center" }}>
                <ActionIcon color="dark.9" variant="transparent" size="xl">
                  <IconAbc size="3rem" />
                </ActionIcon>
                <Box>
                  <Text fz="lg" fw={700}>
                    Responsabilidad
                  </Text>
                  <Text fz="md">con nuestros colaboradores</Text>
                </Box>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
        <AboutUs {...aboutUsInfo} />
        <StackInfobox {...infoFirst} />
      </Stack>
    </Stack>
  );
}

export default HomePageTemplate;
