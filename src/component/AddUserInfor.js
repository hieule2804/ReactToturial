import React from "react";

class AddUserInfor extends React.Component {
    //state là 1 obj : kiểm soat data của component
    state = {
        name: "hihi",
        address: "Hn",
        age: 20
    };
    handleOnChangeInput = (event) => {
        // console.log(event, event.target.value)

        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        // console.log(event, event.target.value)

        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        //ngăn reload lại trang
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                My Name is :{this.state.name} and i'm{this.state.age}<br></br>
                {/* viet code logic,js trong {} */}
                {Math.random()}
                {/* chuyen qua dung arrow function */}
                {/* <button onClick={(event) => { this.handlerClick(event) }}>Click Me</button> */}

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name</label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => { this.handleOnChangeInput(event) }}>

                    </input>
                    <label>Your Age</label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => { this.handleOnChangeAge(event) }}>

                    </input>
                    <button >Submit</button>
                </form>
            </div>
        )

    }

}

export default AddUserInfor;