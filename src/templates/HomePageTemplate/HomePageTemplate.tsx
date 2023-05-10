// React
import {
  ActionIcon,
  Box,
  Card,
  DefaultMantineColor,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
  Center
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconAward,
  IconClipboardCheck,
  IconFriends,
  IconSchool,
} from "@tabler/icons-react";

// Components
import HeroHeader from "../../components/HeroHeader";
import { IGroupInfoboxProps } from "../../components/GroupInfobox/GroupInfobox";
import { IValuesSectionprops } from "../../components/ValuesSection/ValuesSection";
import AboutUsSection, {
  IAboutUsSectionprops,
} from "../../components/AboutUsSection/AboutUsSection";
import CourseCardSection from "../../components/CourseCard/CourseCardSection";
import { ICourseCardSectionProps } from "../../components/CourseCard/CourseCardSection";
import Footer, {IFooterProps} from "../../components/Footer/Footer";

// Style
import useHomePageTemplateStyles from "./HomePageTemplate.styles";


export interface IHomePageTemplateProps {
  accentColor: DefaultMantineColor;
  footerInfo:IFooterProps;
  hero: {
    title: string;
    rightSection: React.ReactNode;
  };
  infoFirst: IGroupInfoboxProps;
  valuesInfo: IValuesSectionprops;
  aboutUsInfo: IAboutUsSectionprops;
  techCenterInfo: {
    title: string;
    description: string;
    techImg: string;
  };
  metodologyInfo: {
    title: string;
    description: string;
    techImg: string;
  };

  courseCardSectionInfo: ICourseCardSectionProps;
  
}

function HomePageTemplate({
  accentColor,
  metodologyInfo,
  techCenterInfo,
  hero,
  footerInfo,
  infoFirst,
  valuesInfo,
  aboutUsInfo,
  courseCardSectionInfo
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
      <Stack px={xPadding} spacing={isLargeScreen ? 70 : "xl"}>
        <Group align="start" spacing={40} noWrap={!!isLargeScreen}>
         
            <Box w={"100%"}>
              <Title>{techCenterInfo.title}</Title>
              <Text className={classes.textStyle}>{techCenterInfo.description}</Text>
            </Box>
         
          <Image src={techCenterInfo.techImg} maw={550}/>
        </Group>
        <AboutUsSection {...aboutUsInfo}/>
        <Stack spacing="xl">
          <Title>Nuestros Valores</Title>
          <SimpleGrid
            cols={4}
            breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
          >
            <Card
              withBorder
              shadow="xs"
              sx={{
                background:
                  "linear-gradient(160deg, rgba(240,62,62,1) 0%, rgba(201,42,42,1) 100%)",
              }}
            >
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon variant="transparent" size="xl">
                  <IconFriends size="3rem" color="white" />
                </ActionIcon>
                <Box>
                  <Center>
                    <Text fz="lg" fw={700} color="white">
                      Compromiso
                    </Text>
                  </Center>
                  <Text fz="md" color="white">
                    en la sastifacción del cliente
                  </Text>
                </Box>
              </Stack>
            </Card>

            <Card
              withBorder
              shadow="xs"
              sx={{
                background:
                  "linear-gradient(160deg, rgba(240,62,62,1) 0%, rgba(201,42,42,1) 100%)",
              }}
            >
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon variant="transparent" size="xl">
                  <IconAward size="3rem" color="white" />
                </ActionIcon>
                <Box>
                  <Center>
                    <Text fz="lg" fw={700} color="white">
                      Respeto
                    </Text>
                  </Center>
                  <Text fz="md" color="white">
                    en nuestras comunicaciones
                  </Text>
                </Box>
              </Stack>
            </Card>

            <Card
              withBorder
              shadow="xs"
              sx={{
                background:
                  "linear-gradient(160deg, rgba(240,62,62,1) 0%, rgba(201,42,42,1) 100%)",
              }}
            >
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon variant="transparent" size="xl">
                  <IconSchool size="3rem" color="white" />
                </ActionIcon>
                <Box>
                  <Center>
                    <Text fz="lg" fw={700} color="white">
                      Voluntad
                    </Text>
                  </Center>
                  <Text fz="md" color="white">
                    en impartir el mejor contenido
                  </Text>
                </Box>
              </Stack>
            </Card>

            <Card
              withBorder
              shadow="xs"
              sx={{
                background:
                  "linear-gradient(160deg, rgba(240,62,62,1) 0%, rgba(201,42,42,1) 100%)",
              }}
            >
              <Stack align="center" sx={{ textAlign: "center" }}>
                <ActionIcon variant="transparent" size="xl">
                  <IconClipboardCheck size="3rem" color="white" />
                </ActionIcon>
                <Box>
                  <Center>
                    <Text fz="lg" fw={700} color="white">
                      Responsabilidad
                    </Text>
                  </Center>
                  <Text fz="md" color="white">
                    con nuestros colaboradores
                  </Text>
                </Box>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
        
        <Group align="start" noWrap={!!isLargeScreen}>
         
          <Box w={"100%"}>
            <Title>{metodologyInfo.title}</Title>
            <Text className={classes.textStyle}>{metodologyInfo.description}</Text>
          </Box>
        
          <Image src={metodologyInfo.techImg} />
        </Group>
        
        <CourseCardSection {...courseCardSectionInfo}/>
        
      </Stack>
      {isLargeScreen ? <Footer{...footerInfo}/> : null}

    </Stack>
  );
}

export default HomePageTemplate;
