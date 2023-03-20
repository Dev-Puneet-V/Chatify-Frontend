import { useState } from "react";
import {
    rootTheme
} from '../../../themes';
import {
    SearchBox,
    SearchIcon,
    SearchBoxInput,
    ParentContainer
} from './index.style';

const Component = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <ParentContainer>
        <SearchBox>
                <SearchIcon color={rootTheme.palette.customColors.lightGrey}/>
                <SearchBoxInput
                    placeholder="Search or start new chat"
                    value={searchText}
                    onChange={handleSearchInputChange}
                />
        </SearchBox>
    </ParentContainer>
  );
}

export default Component;
