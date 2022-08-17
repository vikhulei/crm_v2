import {useState} from "react"
import { DataBoxNav, SmallButton, Visibility } from "../../components/ui/StyledComponents"
import { DataBoxLogin, FormLogin, LabelLogin, InputLogin, ErrorTextLogin} from "./LoginStyle"

const Login = () => {
    const [visibility, setVisibility] = useState(false)
    return (
        <DataBoxLogin>
            <DataBoxNav>Log In</DataBoxNav>
            <FormLogin autoComplete="off">
                <LabelLogin htmlFor="username">Username:
                    <InputLogin type="text" id="username" />
                </LabelLogin>
                <LabelLogin htmlFor="login">Login:
                    <InputLogin type={visibility ? "text" : "password"} id="login" />
                    <Visibility onClick={(() => setVisibility(!visibility))}/>
                </LabelLogin>
                <ErrorTextLogin>Your username or password is not correct</ErrorTextLogin>
                <SmallButton>Sign In</SmallButton>
            </FormLogin>
        </DataBoxLogin>
    )
}

export default Login