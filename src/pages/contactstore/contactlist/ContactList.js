import { DataBox, DataBoxNav } from "../../../components/ui/StyledComponents";
import {
  DataWrapper,
  SearchField,
  SelectWrapper,
  SelectList
} from "./ContactListStyle";

const ContactDetails = () => {
  return (
    <>
      <DataBox>
        <DataBoxNav>Select Contact</DataBoxNav>
        <DataWrapper>
          <SearchField type="text" placeholder="type your text" />
          <SelectWrapper>
            <SelectList size="6">
              <option>Contact1</option>
              <option>Contact2</option>
              <option>Contact3</option>
              <option>Contact4</option>
              <option>Contact5</option>
              <option>Contact6</option>
              <option>Contact7</option>
            </SelectList>
          </SelectWrapper>
        </DataWrapper>
      </DataBox>
    </>
  );
};

export default ContactDetails;
