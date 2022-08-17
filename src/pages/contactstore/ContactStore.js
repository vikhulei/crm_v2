import { Wrapper, ProfileWrapper, ContactsWrapper } from "./ContactStoreStyle"
import Profile from "./profile/Profile"
import ContactList from "./contactlist/ContactList"
import Buttons from "./buttons/Buttons"

const ContactStore = () => {
    return (
        <Wrapper>
            <ProfileWrapper>
                <Profile />
            </ProfileWrapper>
            <ContactsWrapper>
                <ContactList />
                <ContactList />
                <Buttons />
            </ContactsWrapper>
        </Wrapper>
    )
}

export default ContactStore