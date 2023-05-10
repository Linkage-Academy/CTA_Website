import { Box, Text, Title } from "@mantine/core";
import React from "react";
import useGroupInfoboxStyles from "./GroupInfobox.styles";

export interface IGroupInfoboxProps {
  title: string;
  description: string;
  rightSection: React.ReactNode;
  bottomSection: React.ReactNode;
}

function GroupBanner({
  title,
  description,
  bottomSection,
  rightSection,
}: IGroupInfoboxProps) {
  const { classes } = useGroupInfoboxStyles();
  return (
    <Box className={classes.grid}>
      <Title order={4} weight={500} className={classes.gridTitle}>
        {title}
      </Title>
      <Text fz={14} className={classes.gridContent}>
        {description}
      </Text>
      <Box className={classes.gridBottomSection}>{bottomSection}</Box>
      <Box className={classes.gridImage} ml="sm">
        {rightSection}
      </Box>
    </Box>
  );
}

export default GroupBanner;
