import {
  Box,
  Button,
  Card,
  DefaultMantineColor,
  Stack,
  Text,
  Title,
  Center
} from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import useImageCourseCardStyles from "./ImageCourseCard.styles";
import SendEmailModal from "../SendEmailModal";

export interface IImageCourseCardProps {
  img: string;
  title: string;
  description: string;
  modDescription:string;
  color: DefaultMantineColor;
  hasButton?: boolean;
}

function ImageCourseCard({
  img,
  title,
  description,
  modDescription,
  color,
  hasButton = true,
}: IImageCourseCardProps) {
  const { classes } = useImageCourseCardStyles();
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <SendEmailModal opened={opened} close={close} />
      <Card
        withBorder
        className={classes.card}
        radius="lg"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        <Stack>
          <Box>
            <Title order={3} className={classes.titleCardSection} color="white">
              {title}
            </Title>
            <Text color="white" sx={{fontWeight:"bold"}}>{description}</Text>
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
};
export default ImageCourseCard;
