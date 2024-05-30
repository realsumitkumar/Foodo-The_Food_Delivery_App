import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                userName: "",
                location: "",
                avatar: ""
            }
        }
        console.log(this.props.name + " Child constructor")
    }

    async componentDidMount() {

        console.log(this.props.name + " Child componentDidMount")

        const data = await fetch("https://api.github.com/users/realsumitkumar")
        const json = await data.json()

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate is called")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount is called")
    }

    render() {
        let { login, avatar_url } = this.state.userInfo

        console.log(this.props.name + " Child render")

        return (
            <div className="user-card">
                <img src={avatar_url} alt="userImage" />
                <h3>Name: {login}</h3>
            </div>
        )
    }
}

export default UserClass;