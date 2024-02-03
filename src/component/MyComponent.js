//class component
//funstion component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "hlll", age: 21 },
            { id: 2, name: "Hee", age: 22 },
            { id: 3, name: "Heeleee", age: 22 },

        ]

    }

    //quy dinh component nay se tra ra cai gi 
    render() {
        return (
            //JSX :chir đc 1 phan tu
            <div>
                {/* goi component con */}
                <UserInfor />
                <br />
                <DisplayInfor
                    listUser={this.state.listUser} />
                <hr />
            </div>
        );
    }
}

export default MyComponent;
