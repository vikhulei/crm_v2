import {DataBox, DataBoxNav, Label, Input} from "../../../components/ui/StyledComponents"
import {DataWrapper, DetailsLabel, DetailsInput, NumbersWrapper, CountryCode, AreaCode, Extension, PhoneNumber} from "./ContactDetailsStyle"

const ContactList = () => {
    return (
        <>
            <DataBox>
                <DataBoxNav>Contact Details</DataBoxNav>
                <DataWrapper autoComplete="off">
                    <DetailsLabel>
                        Name:
                        <DetailsInput/>
                    </DetailsLabel>
                    <DetailsLabel>
                        Company:
                        <DetailsInput/>
                    </DetailsLabel>
                    <DetailsLabel>
                        Email:
                        <DetailsInput/>
                    </DetailsLabel>
                    <DetailsLabel>Phone numbers:</DetailsLabel>
                </DataWrapper>
                <NumbersWrapper>
                <CountryCode/>
                <AreaCode/>
                <Extension/>
                <PhoneNumber/>
                </NumbersWrapper>
            </DataBox>
        </>
    )
}

export default ContactList