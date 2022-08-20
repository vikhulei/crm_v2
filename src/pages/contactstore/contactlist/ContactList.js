import React, { useState, useEffect, useRef } from "react"
import { DataBox, DataBoxNav, LargeButton } from "../../../components/ui/StyledComponents";
import {
  DataWrapper,
  SearchField,
  SelectList,
  OptionLabel,
  OptionButton,
  OptiontWrapper
} from "./ContactListStyle";
import Contacts from "./Contacts"

const ContactDetails = () => {

  const [optionValue, setOptionValue] = useState(false)
  const [cancelled, setCancelled] = useState(false)
  const selectRef = useRef()

  const changeValue = (e) => {
    setOptionValue(e.target.checked)
    console.log("target", e.target.checked)
    console.log("optionvalue", optionValue)
  }

  const cancelButton = (e) => {
    e.preventDefault()
    setOptionValue(false)
    selectRef.current.focus()
    console.log("target", e.target.checked)
    console.log("optionvalue", optionValue)
    // setOptionValue(true)
  }

useEffect (() => {
  selectRef.current.focus()
}, [optionValue])

  return (
    <>
      <DataBox>
        <DataBoxNav>Select Contact</DataBoxNav>
        <DataWrapper>
          <SearchField type="text" placeholder="type your text" />
            <SelectList>
              {Contacts.map((val, ind) => {
                return <OptiontWrapper key={ind}
                >
                <OptionButton type="radio" 
                name="contacts" id={val.id}
                checked={optionValue}
                onChange={changeValue}
                // onClick={changeValue}
                ref={selectRef}
                 />
                <OptionLabel>
                    {val.contactName}
                  </OptionLabel>
                  </OptiontWrapper>
              })}
            </SelectList>
            <LargeButton onClick={cancelButton}>Cancel</LargeButton>
        </DataWrapper>
      </DataBox>
    </>
  );
};

export default ContactDetails;
