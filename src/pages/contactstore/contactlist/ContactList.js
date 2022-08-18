import {useState} from "react"
import { DataBox, DataBoxNav } from "../../../components/ui/StyledComponents";
import {
  DataWrapper,
  SearchField,
  SelectWrapper,
  SelectList,
  Option
} from "./ContactListStyle";

const ContactDetails = () => {
  const [backgroundColor, setBackgroundColor]= useState(false)
  const changeOptionColor = () => {
    setBackgroundColor(!backgroundColor)
  }

  return (
    <>
      <DataBox>
        <DataBoxNav>Select Contact</DataBoxNav>
        <DataWrapper>
          <SearchField type="text" placeholder="type your text" />
          <SelectWrapper>
            <SelectList size="4">
              <Option>Contact1</Option> 
              <Option>Contact2</Option>
              <Option>Contact3</Option>
              <Option>Contact4</Option>
              <Option>Contact5</Option>
              <Option>Contact6</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact7</Option>
              <Option>Contact25</Option>
            </SelectList>
          </SelectWrapper>
        </DataWrapper>
      </DataBox>
    </>
  );
};

export default ContactDetails;
