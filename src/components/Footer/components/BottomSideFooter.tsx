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


function BottomSideFooter(){
    const {classes} = useFooterStyles();
    return(
        <Box pl={"xl"} py={"md"} className={classes.bottomContainer}>
            <Text color="white">Copyright © 2023 Academy.Linkage - Reservado todos los derechos</Text>
        </Box>
    )
}

export default BottomSideFooter;