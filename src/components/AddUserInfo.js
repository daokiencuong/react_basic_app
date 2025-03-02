import React from "react";

// class AddUserInfo extends React.Component {

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random()*100)+1) + '-random',
//             name: event.target.name.value,
//             age: event.target.age.value
//         });
//     }
//     render() {

//         return (
//             <>
//                 <h2>Add User Info</h2>
//                 <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
//                     <input
//                         type="text"
//                         placeholder="Name"
//                         name="name"
//                         required
//                     />
//                     <br />
//                     <input
//                         type="number"
//                         placeholder="Age"
//                         name="age"
//                         required
//                     />
//                     <br />
//                     <button type="submit">Add User</button>
//                 </form>
//             </>
//         );
//     }
// }

const AddUserInfo = (props) => {

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: event.target.name.value,
            age: event.target.age.value,
        });
    };

    return (
        <div>
            <h2>Add User Info</h2>
            <form
                onSubmit={(event) => {
                    handleOnSubmit(event);
                }}
            >
                <input type="text" placeholder="Name" name="name" required />
                <br />
                <input type="number" placeholder="Age" name="age" required />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUserInfo;
