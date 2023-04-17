import { createStyles } from "@mantine/core";

const useHomePageTemplateStyles = createStyles((theme) => ({
  titleSection: {
    fontSize: 20,
    fontWeight: 500,

    [theme.fn.largerThan("sm")]: {
      fontSize: 28,
    },
  },

  textStyle:{
    fontSize:"1.2rem",
  }
}));

export default useHomePageTemplateStyles;
