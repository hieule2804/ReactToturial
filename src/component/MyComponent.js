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

    handleOnChange = (event) => {
        // console.log(event, event.target.value)

        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        //ngăn reload lại trang
        event.preventDefault();
        console.log(this.state.name)
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
                {/* <button onClick={(event) => { this.handlerClick(event) }}>Click Me</button> */}

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => { this.handleOnChange(event) }}></input>
                    <button >Submit</button>
                </form>

            </div>
        );
    }
}

export default MyComponent;
