import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError()
    console.log(err)
    return (
        <center>
            <h2>{err.status} : {err.statusText}</h2>
            <h3>Oops! {err.data}</h3>
        </center>
    )
}

export default Error;