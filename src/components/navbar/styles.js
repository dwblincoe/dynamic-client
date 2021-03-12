import { withStyles } from "@material-ui/core";

export default withStyles((theme) => {
  const { colors } = theme.palette;

  return {
    container: {
      width: "100vw",
      height: "60px",
      background: colors.black,
    },
  };
});
