import User from "./User";
import UserClass from "./UserClass";
import React from "react"

class About extends React.Component {
    constructor(props) {
        super(props)

        console.log("Parent's Constructor")
    }

    componentDidMount() {
        console.log("Parent's componentDidMount")
    }

    render() {
        console.log("Parent's render");

        return (
            <>
                <h1>This is the about Us page</h1>
                <UserClass name={"First I"} address={"delhi (class)"} />
            </>
        )
    }
}


export default About;

