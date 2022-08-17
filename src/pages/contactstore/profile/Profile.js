import {DataBox} from "../../../components/ui/StyledComponents"
import {DataBoxNavProfile} from "./ProfileStyle"
import camberbech from "../../../assets/camberbech.jpg"

const Profile = () => {
    return (
        <>
            <DataBox>
                <DataBoxNavProfile>Profile</DataBoxNavProfile>
                <img style={{"position": "absolute", "width": "150px"}} src={camberbech} />
            </DataBox>
        </>
    )
}

export default Profile