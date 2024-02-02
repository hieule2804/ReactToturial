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
        console.log("my name is the : ", this.state.name)
        // console.log("random : ", Math.floor((Math.random() * 100) + 1))

        //thay doi giá trị state
        this.setState({
            name: "hlee",
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMouseOver(event) {
        console.log(event);
    }
    //quy dinh component nay se tra ra cai gi 
    render() {
        return (
            //JSX :chir đc 1 phan tu
            <div>
                My Name is :{this.state.name} and i'm{this.state.age}<br></br>
                {/* viet code logic,js trong {} */}
                {Math.random()}
                {/* chuyen qua dung arrow function */}
                <button onClick={(event) => { this.handlerClick(event) }}>Click Me</button>
                <button onMouseOver={this.handleOnMouseOver}>Have Me</button>
            </div>
        );
    }
}

export default MyComponent;
