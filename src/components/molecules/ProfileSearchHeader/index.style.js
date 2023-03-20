import { styled } from '@mui/material/styles';
import {
    Box,
    InputBase
} from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBox = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.spacing(3),
    backgroundColor: `${theme.palette.customColors.lightGrey} !important`,
    width: '95% !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5vh'
  }));
  
const SearchIcon = styled(Search)(({ theme }) => ({
    color: `${theme.palette.customColors.grey} !important`,
    zIndex: 100,
    height: '100%'
}));

const SearchBoxInput = styled(InputBase)(({ theme }) => ({
    color: theme.palette.customColors.grey,
    transition: theme.transitions.create("width"),
    backgroundColor: `${theme.palette.customColors.lightGrey} !important`,
    zIndex: 50,
    width: "80%",
    height: '100%',
    marginLeft: theme.spacing(4),
    borderRadius: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    fontSize: '15px'
}));

const ParentContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export {
    SearchBox,
    SearchIcon,
    SearchBoxInput,
    ParentContainer
}