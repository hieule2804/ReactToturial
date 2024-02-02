//class component
//funstion component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {


    //quy dinh component nay se tra ra cai gi 
    render() {
        return (
            //JSX :chir đc 1 phan tu
            <div>
                {/* goi component con */}
                <UserInfor />
                <br />
                <DisplayInfor name="hlll" age={21} />
                <hr />
            </div>
        );
    }
}

export default MyComponent;
