import {
    Group,
    Stack,
    Text,
    Box
  } from "@mantine/core";
import React from "react";
import {
    IconChartArrowsVertical,
    IconClockHour5,
    IconFileCertificate,
    IconRosette,
    IconSchool,
    IconUsers,
  } from "@tabler/icons-react";

import useFooterStyles from "../Footer.styles";


function RightSideFooter(){
    const {classes} = useFooterStyles();
    return(
        <Box className={classes.box}>
            <Stack  align={"flex-start"}>
                <Text className={classes.titleStyle}>Redes Sociales</Text>
                <Group>
                    <Box className={classes.iconBox}><IconSchool/></Box>
                    <Box className={classes.iconBox}><IconSchool/></Box>
                    <Box className={classes.iconBox}><IconSchool/></Box>
                    <Box className={classes.iconBox}><IconSchool/></Box>
                </Group>
                <Stack align={"flex-start"}>
                    <Text className={classes.titleStyle}>Contáctanos</Text>

                    <Text color="white">Número de Teléfono: (+505) 8389 1437</Text>
                    <Text color="white">Correo Electrónico: contacto@linkageacademy.com</Text>
                </Stack>
            </Stack>
        </Box>
    )
}

export default RightSideFooter;