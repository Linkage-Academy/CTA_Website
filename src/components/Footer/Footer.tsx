import {
    Stack,
    Text,
    Box,
    Center,
    MantineColor
  } from "@mantine/core";
import { Link } from 'react-router-dom';
import React from "react";
import RightSideFooter from "./components/RightSideFooter";
import BottomSideFooter from "./components/BottomSideFooter";
import useFooterStyles from "./Footer.styles";

export interface IFooterProps{
  footerColor:MantineColor;
}

function Footer({footerColor}:IFooterProps){
    const {classes} = useFooterStyles();
    return(
      <Stack spacing={0}>
       
        <Box sx={{backgroundColor:footerColor}} className={classes.gridContainer}>
            <Box sx={{backgroundColor:footerColor}} className={classes.box}>
              <Center>
                <Text className={classes.titleStyle}>Links importantes</Text>
              </Center>

              <Center>
                <Link className={classes.linkStyle} to={"https://linkageacademy.com/index.php/politica-de-privacidad/"}>
                  <Text color="white">Política de Privacidad</Text>
                </Link>
              </Center>

              <Center>
                <Link className={classes.linkStyle} to={"https://linkageacademy.com/index.php/terminos-y-condiciones/"}>
                  <Text color="white">Términos y Condiciones</Text>
                </Link>
              </Center>

              <Center>
                <Link className={classes.linkStyle} to={"https://linkageacademy.com/index.php/politica-de-cookies/"}>
                  <Text color="white">Política de Cookies</Text>
                </Link>
              </Center>
              

            </Box>     
            <Box sx={{backgroundColor:footerColor}} className={classes.box}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3900.597332986633!2d-86.29228118518651!3d12.139679891405454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDA4JzIyLjkiTiA4NsKwMTcnMjQuMyJX!5e0!3m2!1sen!2sni!4v1681794242551!5m2!1sen!2sni" width="320" height="280"  loading="lazy"></iframe>              
            </Box>
    <RightSideFooter footerColor={footerColor}/>
        </Box>
       
        <BottomSideFooter footerColor={footerColor}/>
      </Stack>
    )
}

export default Footer;