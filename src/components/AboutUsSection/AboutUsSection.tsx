import StackInfobox from "../StackInfobox/StackInfobox";
import { IStackInfoboxProps } from "../StackInfobox/StackInfobox";
import { Box, Text, Title, Stack, Group, Image, useMantineTheme,} from "@mantine/core";
import useAboutUsSectionStyles from "./AboutUsSection.styles";
import { useMediaQuery } from "@mantine/hooks";


export interface IAboutUsSectionprops{
    vision:{
        title:string;
        description:string;
    };
    mission:{
        title:string;
        description:string;
    }; 
    abUsImg:string;
}

function AboutUs({
    vision,
    mission,
    abUsImg
}: IAboutUsSectionprops){
    const {classes} = useAboutUsSectionStyles();
    const theme = useMantineTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    return(
       
        <Group spacing={40} align="start" noWrap={isLargeScreen? true : false }>
            <Box>
                <Box >
                    <Title>{mission.title}</Title>
                    <Text className={classes.textStyle}>{mission.description}</Text>
                </Box>
                <Box mt={"xl"}>
                    <Title>{vision.title}</Title>
                    <Text className={classes.textStyle}>{vision.description}</Text>
                </Box>
            </Box>
            <Image src={abUsImg}/>

        </Group>
        
    )

}

export default AboutUs;