import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_DATA, DELETE_DATA, UPDATE_DATA } from '../Redux/action';

const CrudReduxComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        age: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    };

    const saveData = (e) => {
        e.preventDefault();
        if (userData.id) {
            // Update existing data
            dispatch({ type: UPDATE_DATA, payload: userData });
        } else {
            // Create new data
            let len = data.length;
            userData.id = len + 1;
            dispatch({ type: CREATE_DATA, payload: userData });
        }
        resetform();
    };


    const deleteData = (id) => {
        dispatch({ type: DELETE_DATA, payload: (id) });
    }

    const updateData = (id) => {
        const existingData = data.find((item) => item.id === id);
        if (existingData) {
            setUserData(existingData);
        }
    };

    const resetform = () => {
        setUserData({
            id: "",
            name: "",
            age: ""
        });
    }

    return (
        <>
            <h2>User Registration Form</h2>
            <form action="#" method='post' onSubmit={saveData}>
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" id="" value={userData.name} onChange={handleChange} required />
                <br /><br />
                <label htmlFor="age">Age : </label>
                <input type="number" name="age" id="" value={userData.age} onChange={handleChange} required />
                <br /><br />
                <button type='submit'>{userData.id ? "Update" : "Save"}</button>
            </form>
            <br /><br />

            <table border={2} cellSpacing={2}>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Actions</td>
                </tr>

                {data && data.map((i) => {
                    return (
                        <>
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>
                                    <button onClick={() => updateData(i.id)}>Edit</button>&nbsp;&nbsp;
                                    <button onClick={() => deleteData(i.id)}>Delete</button>
                                </td>
                            </tr>
                        </>
                    )
                })
                }
            </table>
        </>
    )
}

export default CrudReduxComponent