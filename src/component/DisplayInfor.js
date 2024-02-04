import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg"

//stateless vs stateful
//function component k co tu khoa this
//tu khoa this chi ton tai trong class

//funstion component
const DisplayInfor = (props) => {
    const { listUser } = props;
    //useState trả 2 giá trị : tên state , hàm cập nhập state
    //[tên state ,hàm cập nhập biến state]
    const [isTheShowHideListUser, setShowHideListUser] = useState(true);
    // tuong ung voi
    // this.state = {
    //     isTheShowHideListUser: true
    // }
    const handleShowHideListUser = () => {
        setShowHideListUser(!isTheShowHideListUser)
    }
    //định nghĩa bao nhiêu hook cũng đc

    useEffect(
        () => {
            if (listUser.length === 0) {
                alert("me")
            }
            console.log("call me Effect")
        }, [listUser]
        // mỗi lần giá trị của hàm listUser thay đổi thì hàm useEffect sẽ được gọi 
        // arrowFunction : sẽ làm gì khi có sự thay đổi(thay đổi props or state) :
        //[] :mảng dependence : chỉ thực hiện effect 1 lần 
    );

    return (
        <div className="display-infor-container">
            {/* <img src={logo} /> */}
            <div>
                <span onClick={() => { handleShowHideListUser() }}>
                    {isTheShowHideListUser ? "Hide List User" : "Show ListUSer"}
                </span>
            </div>
            {isTheShowHideListUser &&
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
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                            </div>
                        )
                    })}


                </div>
            }
        </div>


    )


}

export default DisplayInfor;