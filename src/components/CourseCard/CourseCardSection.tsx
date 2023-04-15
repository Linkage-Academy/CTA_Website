import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Title, Stack} from '@mantine/core';
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import CourseCard from './components/CourseCard';
import { ICourseCardProps } from './components/CourseCard';

export interface ICourseCardSectionProps{
  courseCardInfo1: ICourseCardProps;
  courseCardInfo2: ICourseCardProps;
}


function CourseCardSection({
  courseCardInfo1,
  courseCardInfo2
}:ICourseCardSectionProps) {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const wrapBoolean = isLargeScreen ? true : false;
  return (
    <Stack  mb={40}>
      <Title>{"Nuestros Cursos para 2023"}</Title>
      <Group noWrap={wrapBoolean}>
        <CourseCard {...courseCardInfo1}/>
        <CourseCard {...courseCardInfo2}/>
      </Group>
    </Stack>
  )

}
export default CourseCardSection;