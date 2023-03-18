import { Typography } from "@mui/material";

const Component = (props) => {
    const {
        variant,
        sx
    } = props;
    return (
        <Typography sx={sx} variant={variant}>
            {
                props.children
            }
        </Typography>
    )
}

export default Component;