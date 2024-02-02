//class component
//funstion component

import React from "react";

class MyComponent extends React.Component {
    //quy dinh component nay se tra ra cai gi 
    render() {
        return (
            //JSX :chir đc 1 phan tu
            <div>
                My First Component
                {/* viet code logic,js trong {} */}
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;
