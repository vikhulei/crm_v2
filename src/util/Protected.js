import {Outlet, Navigate} from "react-router-dom"

const Protected = ({auth}) => {
    return (
        <>
           {auth ? <Outlet/> : <Navigate to="/login"/>}
        </>
    )
}

export default Protected