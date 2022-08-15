import { Wrapper } from "./ContactStoreStyle"
import Profile from "./profile/Profile"
import ContactList from "./contactlist/ContactList"

const ContactStore = () => {
    return (
        <Wrapper>
            <Profile/>
            <ContactList/>
            <ContactList/>
        </Wrapper>
    )
}

export default ContactStore