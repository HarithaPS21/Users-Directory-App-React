import classes from './AddUser.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { useState, useRef } from 'react';
import ErrorModal from '../UI/Modal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    // const [userName, setUserName] = useState("");
    // const [age, setAge] = useState("");
    const [error, setError] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = event => {
        event.preventDefault();
        console.log("form submitted");
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.length === 0 || enteredAge.length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (>0)."
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        // setUserName("");
        // setAge("");
    }

    // const userNameChangeHandler = event => {
    //     setUserName(event.target.value);
    // }

    // const ageChangeHandler = event => {
    //     setAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    }

    return <Wrapper>
        {
            error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
        }
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    type="text"
                    id="username"
                    // onChange={userNameChangeHandler}
                    // value={userName}
                    ref={nameInputRef}
                />
                <label htmlFor='age'>Age (Years)</label>
                <input
                    type="number"
                    id="age"
                    // onChange={ageChangeHandler}
                    // value={age}
                    ref={ageInputRef}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </Wrapper>

}

export default AddUser;