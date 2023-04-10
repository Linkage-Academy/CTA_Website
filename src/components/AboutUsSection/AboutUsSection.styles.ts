import { createStyles } from "@mantine/core";

const useAboutUsSectionStyles = createStyles((theme) => ({
  grid: {
    display: "grid",

    [theme.fn.largerThan("sm")]: {
        gridTemplateColumns:"auto auto"
    },
  },
}))

export default useAboutUsSectionStyles;