import {
  Box,
  Center,
  DefaultMantineColor,
  Group,
  SimpleGrid,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";

import StackInfobox from "../StackInfobox/StackInfobox";
import useValuesSectionStyles from "./ValuesSection.styles";

// Interfaces
import { IStackInfoboxProps } from "../StackInfobox/StackInfobox";

export interface IValuesSectionprops {
  title: string;
  infoFirst: IStackInfoboxProps;
  infoSecond: IStackInfoboxProps;
  infoThird: IStackInfoboxProps;
  infoFourth: IStackInfoboxProps;
}

function ValuesSection({
  title,
  infoFirst,
  infoSecond,
  infoThird,
  infoFourth,
}: IValuesSectionprops) {
  const { classes } = useValuesSectionStyles();
  return (
    <>
      <Title order={4} weight={500} className={classes.valuesTitle}>
        {title}
      </Title>
      <Box className={classes.grid}>
        <Box>
          <StackInfobox {...infoFirst} />
        </Box>
        <Box>
          <StackInfobox {...infoSecond} />
        </Box>
        <Box>
          <StackInfobox {...infoThird} />
        </Box>
        <Box>
          <StackInfobox {...infoFourth} />
        </Box>
      </Box>
    </>
  );
}

export default ValuesSection;
