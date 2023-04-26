import {
    Group,
    Stack,
    Text,
    Box,
    MantineColor
  } from "@mantine/core";
import React from "react";
import {
    IconBrandFacebook,
    IconBrandInstagram, 
    IconBrandLinkedin, 
    IconBrandWhatsapp,
  } from "@tabler/icons-react";
import { Link } from 'react-router-dom';

import useFooterStyles from "../Footer.styles";


export interface IFooterProps{
    footerColor:MantineColor;
  }

function RightSideFooter({footerColor}:IFooterProps){
    const {classes} = useFooterStyles();
    return(
        <Box sx={{backgroundColor:footerColor}} className={classes.box}>
            <Stack  align={"flex-start"}>
                <Text className={classes.titleStyle}>Redes Sociales</Text>
                <Group>
                    <Link to={"https://www.facebook.com/profile.php?id=100077515970246"}>
                        <Box className={classes.iconBox}><IconBrandFacebook/></Box>
                    </Link>
                    <Link to={"https://www.linkedin.com/company/academy-linkage/"}>
                        <Box className={classes.iconBox}><IconBrandInstagram/></Box>
                    </Link>
                    <Link to={"https://www.instagram.com/academylinkage/?igshid=ZDdkNTZiNTM%3D"}>
                        <Box className={classes.iconBox}><IconBrandLinkedin/></Box>
                    </Link>
                    <Link to={"https://api.whatsapp.com/message/PWB3XYNADDQKI1?autoload=1&app_absent=0"}>
                        <Box className={classes.iconBox}><IconBrandWhatsapp/></Box>
                    </Link>
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