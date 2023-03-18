import {
    StyledIcon
} from './index.style'
const Component = (props) => {
    const {
        icon,
        ...rem
    } = props;
    return (
        <StyledIcon {...rem}>
            {icon}
        </StyledIcon>
    )
}

export default Component;