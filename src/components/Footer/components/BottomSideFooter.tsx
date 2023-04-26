import {
    Group,
    Stack,
    Text,
    Box,
    MantineColor
  } from "@mantine/core";
import React from "react";
import useFooterStyles from "../Footer.styles";

export interface IFooterProps{
  footerColor:MantineColor;
}

function BottomSideFooter({footerColor}:IFooterProps){
    const {classes} = useFooterStyles();
    return(
        <Box sx={{backgroundColor:footerColor}} pl={"xl"} py={"md"} className={classes.bottomContainer}>
            <Text color="white">Copyright © 2023 Academy.Linkage - Reservado todos los derechos</Text>
        </Box>
    )
}

export default BottomSideFooter;