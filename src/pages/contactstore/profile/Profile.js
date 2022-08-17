import { DataBox } from "../../../components/ui/StyledComponents";
import {
  DataBoxNavProfile,
  ImageWrapper,
  InputImage,
  Image,
  TopImageText,
  ErrorImageText,
  ErrorImageInfo,
  InfoWrapper,
  InfoLabel,
  InfoData,
  PasswordForm,
  Fieldset,
  Legend
} from "./ProfileStyle";
import camberbech from "../../../assets/camberbech.jpg";

const Profile = () => {
  return (
    <>
      <DataBox>
        <DataBoxNavProfile>Profile</DataBoxNavProfile>
        <TopImageText>Click the image to change it:</TopImageText>
        <ImageWrapper>
          <Image src={camberbech} />
          <InputImage type="file" size="1" />
        </ImageWrapper>
        <ErrorImageText>The image was not uploaded</ErrorImageText>
        <ErrorImageInfo>Errror accesing data</ErrorImageInfo>
        <InfoWrapper>
          <InfoLabel>First Name:</InfoLabel>
          <InfoData>Doctorrr</InfoData>
          <InfoLabel>Last Name:</InfoLabel>
          <InfoData>Who</InfoData>
          <InfoLabel>Email:</InfoLabel>
          <InfoData>user3@intrinsicgrouplimited.com</InfoData>
          <InfoLabel>Join Date:</InfoLabel>
          <InfoData>2022-07-25T13:35:33.066+00:00</InfoData>
        </InfoWrapper>
        <PasswordForm>
          <Fieldset>
            <Legend>Change Password</Legend>
          </Fieldset>
        </PasswordForm>
      </DataBox>
    </>
  );
};

export default Profile;
