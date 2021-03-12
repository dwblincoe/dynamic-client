import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => {
    const { colors } = theme.palette;

    return {
        container: {
            background: colors.black,
            height: '100vh'
        },
        card: {
            width: 500
        },
        toggle: {
            marginTop: "5px",
            display: 'flex',
            justifyContent: 'center'
        }
    }
})