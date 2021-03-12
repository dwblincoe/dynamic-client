import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => {
  const { colors } = theme.palette;
  return {
    container: {
      height: "100vh",
      background: colors.white,
    },
  };
});
