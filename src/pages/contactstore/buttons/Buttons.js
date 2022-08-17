import { LargeButton } from "../../../components/ui/StyledComponents"
import { ButtonsWrapper } from "./ButtonsStyle"

const Buttons = () => {
    return (
        <ButtonsWrapper>
            <LargeButton>Add</LargeButton>
            <LargeButton>Cancel</LargeButton>
        </ButtonsWrapper>
    )
}

export default Buttons