//class component
//funstion component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "hlll", age: 16 },
            { id: 2, name: "Hee", age: 22 },
            { id: 3, name: "Heeleee", age: 40 },

        ]

    }

    handleAddNewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userid) => {
        let listUserClone = [...this.state.listUser];
        listUserClone = listUserClone.filter(item => item.id !== userid)
        this.setState({
            listUser: listUserClone
        })
    }
    //quy dinh component nay se tra ra cai gi 
    render() {
        // const test = { name: "hieu" }
        return (
            //JSX :chir đc 1 phan tu
            // react.fragment 
            <>
                {/* {JSON.stringify(test)} */}
                <div className="a">
                    {/* goi component con */}
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br />
                    <DisplayInfor
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                    <hr />
                </div>
                <div className="b"></div>
            </>
        );
    }
}

export default MyComponent;
