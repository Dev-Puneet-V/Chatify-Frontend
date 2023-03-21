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
        <SearchBoxInput
            placeholder="Type a message"
            value={searchText}
            onChange={handleSearchInputChange}
            multiline={true}
        />
    </ParentContainer>
  );
}

export default Component;
