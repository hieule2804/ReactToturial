import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg"
class DisplayInfor extends React.Component {

    constructor(props) {
        console.log("call constructor:1")
        super(props);
        //babel compiler
        this.state = {
            isTheShowListUser: true
        }

    }
    //dùng hàm này để gọi API
    componentDidMount() {
        console.log("call me Component did mount")
        setTimeout(() => {
            document.title = "hello"
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("call me component did update", this.props, prevProps)
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert("you got 5 users")
            }
        }

    }

    handleShowHide = () => {
        this.setState({
            isTheShowListUser: !this.state.isTheShowListUser
        })
    }
    render() {
        console.log("call me render")
        //destructuring array/obj  : chỉ lấy ra n thuộc tính từ props
        const { listUser } = this.props;
        //const listUser = this.props.listUser
        //props : viet tat properties
        //dùng để truyền dữ liệu từ component cha sang con 
        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isTheShowListUser === true ? "Hide List User" : "Show List User"}
                    </span>
                </div>
                {this.state.isTheShowListUser &&
                    <div>
                        {listUser.map((user) => {

                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div >
                                        my name : {user.name}
                                    </div>
                                    <div>
                                        my age : {user.age}
                                    </div>
                                    <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                </div>
                            )
                        })}


                    </div>
                }
            </div>


        )

    }

}

export default DisplayInfor;