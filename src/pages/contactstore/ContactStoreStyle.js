import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    // min-width: 1300px;
    // height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: lightblue;
    @media screen and (max-width: 1450px) {
        flex-direction: column-reverse;
        height: 1500px;
    }
    @media screen and (max-width: 1050px) {
        top: 100px;
        height: 2050px;
    }
`

const ProfileWrapper = styled.div `

`

const ContactsWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
@media screen and (max-width: 1050px) {
    // background-color: blue;
    flex-direction: column;
    height: 1500px;
}
`

export { Wrapper, ProfileWrapper, ContactsWrapper }