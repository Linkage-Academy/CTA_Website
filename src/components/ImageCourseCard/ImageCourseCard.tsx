import {
  Box,
  Button,
  Card,
  DefaultMantineColor,
  Stack,
  Text,
  Title,
  Center,
  Modal,
  Image,
} from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import useImageCourseCardStyles from "./ImageCourseCard.styles";
import SendEmailModal from "../SendEmailModal";

export interface IImageCourseCardProps {
  img: string;
  title: string;
  description: string;
  modDescription: string;
  color: DefaultMantineColor;
  hasButton?: boolean;
  requiredHours?: string;
  numberOfSessions?: string;
  dependsOn?: string;
}

function ImageCourseCard({
  img,
  title,
  description,
  modDescription,
  color,
  requiredHours,
  numberOfSessions,
  dependsOn,
  hasButton = true,
}: IImageCourseCardProps) {
  const { classes } = useImageCourseCardStyles();
  const [opened, { open, close }] = useDisclosure();
  const [openedInfoModal, { open: openInfoModal, close: closeInfoModal }] =
    useDisclosure();

  return (
    <>
      <Modal
        opened={openedInfoModal}
        onClose={closeInfoModal}
        withCloseButton={false}
        styles={{
          content: {
            padding: 0,
          },
          body: {
            padding: 0,
          },
        }}
      >
        <Card>
          <Card.Section>
            <Image src={img} width="100%" />
          </Card.Section>
          <Title order={4} my="md" sx={{ textAlign: "center" }}>
            {title}
          </Title>
          <Title order={5}>Nombre del curso</Title>
          <Text mb="xs" ml="xs">
            {title}
          </Text>

          <Title order={5}>Horas de Enseñanza</Title>
          <Text mb="xs" ml="xs">
            {requiredHours || 32}
          </Text>

          <Title order={5}>Sesiones</Title>
          <Text mb="xs" ml="xs">
            {numberOfSessions || 16}
          </Text>

          <Title order={5}>Depende de</Title>
          <Text mb="xs" ml="xs">
            {dependsOn || "-"}
          </Text>
        </Card>
      </Modal>
      <SendEmailModal opened={opened} close={close} />
      <Card
        withBorder
        className={classes.card}
        radius="lg"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
        onClick={openInfoModal}
      >
        <Stack>
          <Box>
            <Title order={3} className={classes.titleCardSection} color="white">
              {title}
            </Title>
            <Text color="white" sx={{ fontWeight: "bold" }}>
              {description}
            </Text>
            <Text color="white">{modDescription}</Text>
          </Box>
          {hasButton && (
            <Center>
              <Button color={color} size="sm" fullWidth={false} onClick={open}>
                Inscribete al Módulo
              </Button>
            </Center>
          )}
        </Stack>
      </Card>
    </>
  );
}

ImageCourseCard.defaultProps = {
  hasButton: true,
  requiredHours: "32",
  dependsOn: "-",
  numberOfSessions: "16",
};
export default ImageCourseCard;
