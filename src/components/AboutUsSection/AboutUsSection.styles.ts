import { createStyles } from "@mantine/core";

const useAboutUsSectionStyles = createStyles((theme) => ({
  grid: {
    display: "grid",

    [theme.fn.largerThan("sm")]: {
        gridTemplateColumns:"auto auto"
    },
  },
  textStyle: {
    fontSize:"1.2rem",
  }
}))

export default useAboutUsSectionStyles;