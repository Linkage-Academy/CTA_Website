import {
  Button,
  Card,
  DefaultMantineColor,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import useCourseDescriptionCardStyles from "./CourseDescriptionCard.styles";
import SendEmailModal from "../SendEmailModal";

interface ICourseDescriptionCardElement {
  label: string;
  icon: JSX.Element;
  description: string;
}

export interface ICourseDescriptionCardProps {
  mainImage: string;
  color: DefaultMantineColor;
  title: string;

  elements: ICourseDescriptionCardElement[];
}

function CourseDescriptionCard({
  mainImage,
  color,
  title,
  elements,
}: ICourseDescriptionCardProps) {
  const { classes } = useCourseDescriptionCardStyles();
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <SendEmailModal opened={opened} close={close} />
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section component="a">
          <Image src={mainImage} height={220} />
        </Card.Section>
        <Stack sx={{ textAlign: "center" }} align="center">
          <Title order={4} fw={500} pt="1rem">
            {title}
          </Title>

          <Group noWrap w="100%" className={classes.labelsCard}>
            <Stack sx={{ flexGrow: 1 }} spacing="1.2rem">
              {elements.map((el) => (
                <Group key={el.label}>
                  {el.icon}
                  <Text>{el.label}</Text>
                </Group>
              ))}
            </Stack>

            <Stack sx={{ textAlign: "start" }} spacing="1.2rem">
              {elements.map((el) => (
                <Group key={el.description}>
                  <Text color="dark.3">{el.description}</Text>
                </Group>
              ))}
            </Stack>
          </Group>
          <Button color={color} size={"lg"} onClick={open}>
            Inscríbete
          </Button>
        </Stack>
      </Card>
    </>
  );
}

export default CourseDescriptionCard;
