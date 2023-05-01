import { Box, Button, Image } from "@mantine/core";
import {
  IconChartArrowsVertical,
  IconClockHour5,
  IconFileCertificate,
  IconRosette,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
import CoursePageTemplate from "../../templates/CoursePageTemplate";
import { ICoursePageTemplateProps } from "../../templates/CoursePageTemplate/CoursePageTemplate";
import ComputerHeroImageWeb from "./assets/ComputerHeroImageWeb.webp";
import Css from "./assets/css.webp";
import Codigo from "./assets/Codigo.webp";
import Controller from "./assets/Controller.webp";
import Infantil from "../MinecraftCourse/assets/Infantil.webp";
import Trans from "../MinecraftCourse/assets/Trans.webp";
import Python from "../MinecraftCourse/assets/Python.webp";
import Npc from "./assets/Npc.webp";
import fourImg from "./assets/CTA_WHO_IMG.png";

const data: ICoursePageTemplateProps = {
  accentColor: "cyan",
  footerInfo: {
    footerColor: "#1098ad",
  },

  hero: {
    title: "!Aprende a hacer tus ideas realidad!",
    rightSection: <Image src={ComputerHeroImageWeb} width="100%" p={0} m={0} />,
  },

  infoFirst: {
    title: "¿Por qué aprender programación web?",
    description:
      "Aprende a crear sitios y aplicaciones web interactivos desde cero con nuestro curso de programación web. Desarrolla habilidades en lógica y resolución de problemas, y prepárate para una carrera rentable en la industria tecnológica. Únete a nuestro curso y comienza tu viaje en la programación hoy mismo.",
    rightSection: <Image src={Css} width={180} />,
    bottomSection: <Box />,
  },
  courseCard: {
    mainImage: Codigo,
    title: "Bootcamp de desarrollo Web",
    color: "cyan",
    elements: [
      {
        label: "Nivel",
        description: "Principiante",
        icon: <IconChartArrowsVertical color="#0D8598" />,
      },
      {
        label: "Horas Semanales",
        description: "4 Horas",
        icon: <IconClockHour5 color="#0D8598" />,
      },
      {
        label: "Edad",
        description: "14+ años",
        icon: <IconUsers color="#0D8598" />,
      },
      {
        label: "Certificado",
        description: "Si",
        icon: <IconFileCertificate color="#0D8598" />,
      },
      {
        label: "Insignia Digital",
        description: "Si",
        icon: <IconRosette color="#0D8598" />,
      },
      {
        label: "Lecciones",
        description: "96 lecciones",
        icon: <IconSchool color="#0D8598" />,
      },
    ],
  },
  infoSecond: {
    title: "Aprende Jugando",
    bottomSection: <Image radius="md" src={Controller} />,
    description:
      "En nuestro curso, nos enfocamos en hacer que el aprendizaje de programación web sea divertido y efectivo a través de la gamificación. Cada lección está diseñada para desafiarte y motivarte a mejorar tus habilidades a través de desafíos y juegos interactivos. La gamificación también te permite medir tu progreso y competir con otros estudiantes en línea, lo que puede aumentar tu motivación y compromiso. ¡Aprender programación web nunca ha sido tan emocionante!",
  },
  modules: [
    {
      title: "HTML/CSS",
      img: Infantil,
      description: "Módulo 1, 28 Horas de enseñanza",
      modDescription:
        "Este curso  proporcionará una base sólida en HTML y CSS sobre la que puedes profundizar para aprender conceptos avanzados de desarrollo web. Al completar este curso, tendrás las habilidades y la confianza necesarias para crear tus propias páginas y diseños web, y seguir aprendiendo más sobre el desarrollo web. ",
      hasButton: true,
    },
    {
      title: "Python",
      img: Trans,
      description: "Módulo 2, 16 Horas de enseñanza",
      modDescription:
        "Este curso te proporcionará una base sólida en programación con Python sobre la que puedes profundizar para aprender conceptos avanzados de programación. Al completar este curso, tendrás las habilidades y la confianza necesarias para crear tus propios programas y seguir aprendiendo más sobre la programación. ",
      hasButton: true,
    },
    {
      title: "Django",
      img: Python,
      description: "Módulo 3, 32 Horas de enseñanza",
      modDescription:
        "Guiará a los estudiantes en la fase final del desarrollo de un servidor web, utilizando lo previamente aprendido en los modulos anteriores. Este módulo unificará lo previamente aprendido y enseñará cosas nuevos como base de datos.",
      hasButton: true,
    },
  ],
  infoThird: {
    title: "Conviértete en un experto",
    bottomSection: (
      <Button color="cyan" mt="1rem" size="sm" fullWidth>
        ¡Compra el curso ahora!
      </Button>
    ),
    description:
      "La metodología de nuestro curso para niños es que los chicos aprendan mientras se divierten en su videojuego favorito, en este caso Minecraft. La gamificación presente alrededor de la curva de aprendizaje será la clave para desarrollar el pensamiento lógico del estudiante. ¡Anímate!",
    rightSection: <Image src={Npc} width={200} />,
  },
  infoFourth: {
    title: "¿Qué Esperar de este Bootcamp?",
    bottomSection: <></>,
    description:
      "El curso guiará a los estudiantes en la creación de una pequeña red social, ideal para incluir en un portafolio de desarrollo. Esta plataforma será desarrollada durante toda la duración del curso. Las últimas dos semanas del curso serán dedicadas al desarrollo de proyectos propios de los estudiantes que les ayudara a afianzar sus conocimientos.",
    rightSection: <Image src={fourImg} width={200} />,
  },
};

function WebBootcampCourse() {
  return <CoursePageTemplate {...data} />;
}

export default WebBootcampCourse;
