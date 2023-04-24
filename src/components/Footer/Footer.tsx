import {
    Button,
    Card,
    DefaultMantineColor,
    Group,
    Image,
    Stack,
    Text,
    Title,
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

import RightSideFooter from "./components/RightSideFooter";
import BottomSideFooter from "./components/BottomSideFooter";

  

  import useFooterStyles from "./Footer.styles";

function Footer(){
    const {classes} = useFooterStyles();
    return(
      <Stack spacing={0}>
        { /*
        <Box className={classes.gridContainer}>
           <Box className={classes.box}>h</Box>
            <Box className={classes.box}>o</Box>
    <RightSideFooter/>
        </Box>
        */}
        <BottomSideFooter/>
      </Stack>
    )
}

export default Footer;