import { Card, Image, Text, Badge, Button, Group, DefaultMantineColor, Center } from '@mantine/core';
import { Link } from 'react-router-dom';
import useCourseCardStyles from './CourseCard.styles';

export interface ICourseCardProps{
    title:string;
    badgeText:string;
    description:string;
    btnText:string;
    btnLink:string;
    btnColor:DefaultMantineColor
    courseImg:string
}

function CourseCard({
    title,
    badgeText,
    description,
    btnText,
    btnColor,
    btnLink,
    courseImg
}:ICourseCardProps) {
    const {classes} = useCourseCardStyles();
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={courseImg}
          height={200}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text className={classes.titleStyle} weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          {badgeText}
        </Badge>
      </Group>

      <Text className={classes.textStyle} size="sm" color="dimmed">
        {description}
      </Text> 
      <Center>
        <Link className={classes.link} to={btnLink}>
          <Button color={btnColor} mt="md" radius="md">
              {btnText}
          </Button>
        </Link>
      </Center>

    </Card>
  );
}

export default CourseCard;