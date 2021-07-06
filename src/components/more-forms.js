import react, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [fNameError, setfNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPassword, setConPassword] = useState("");
    const[matchPassword, setMatchPassword] = useState(false);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, conPassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } {
            return "Welcome, please submit the form";
        }
    }

    const handleFName = () => {
        if (firstName.length < 2 && firstName.length > 0) {
            return "First name must be at least 2 characters!"
        }
    }
    const handleLName = () => {
        if (lastName.length < 2 && lastName.length > 0) {
            return "Last name must be at least 2 characters!"
        }
    }
    const handleEmail = () => {
        if (email.length < 5 && email.length > 0) {
            return "Email must be at least 5 characters!"
        }
    }
    const handlePass = () => {
        if (password.length < 8 && password.length > 0) {
            return "Password must be at least 8 characters!"
        }
    }
    const handlePassMatch = () => {
        if (password != conPassword) {
            return "Passwords must match"
        }
    }

    return (
        <>
            <form onSubmit={ createUser }>
                <h3>{formMessage()}</h3>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                    <div>{handleFName()}</div>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                    <div>{handleLName()}</div>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <div>{handleEmail()}</div>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <div>{handlePass()}</div>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConPassword(e.target.value)}/>
                    <div>{handlePassMatch()}</div>
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confrim Password: {conPassword}</p>
        </>

    )
};

export default UserForm;