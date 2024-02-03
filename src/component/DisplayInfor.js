import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg"
class DisplayInfor extends React.Component {

    state = {
        isTheShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isTheShowListUser: !this.state.isTheShowListUser
        })
    }
    render() {
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