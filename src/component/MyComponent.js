//class component
//funstion component

import React from "react";

class MyComponent extends React.Component {

    //state là 1 obj : kiểm soat data của component
    state = {
        name: "hihi",
        address: "Hn",
        age: 20
    };
    handlerClick(event) {
        // console.log("my name is the : ", this.state.name)
    }
    handleOnMouseOver(event) {
        console.log(event);
    }
    //quy dinh component nay se tra ra cai gi 
    render() {
        return (
            //JSX :chir đc 1 phan tu
            <div>
                My Name is :{this.state.name} and i'm from{this.state.address}<br></br>
                {/* viet code logic,js trong {} */}
                {Math.random()}
                <button onClick={this.handlerClick}>Click Me</button>
                <button onMouseOver={this.handleOnMouseOver}>Have Me</button>
            </div>
        );
    }
}

export default MyComponent;
