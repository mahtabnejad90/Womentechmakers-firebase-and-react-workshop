import React from 'react';
import firebase from "./services/firebase"
import LoggedOut from "./pages/LoggedOut";
import LoggedIn from "./pages/LoggedIn";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: firebase.isLoggedIn() };
    }

    componentDidMount() {
        firebase.onLoginChange((user) => {
            // If the user object has a value, we are logged in!
            if (user) {
                this.setState({ isLoggedIn: true });
            } else {
                this.setState({ isLoggedIn: false });
            }
        });
    }

render() {
    if (this.state.isLoggedIn){
        return (
            <LoggedIn />
        ) } else {
            return (
                <LoggedOut />
            )
        }
    }
}

export default App;
