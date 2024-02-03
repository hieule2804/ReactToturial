import React from "react";

class DisplayInfor extends React.Component {

    render() {
        //destructuring array/obj  : chỉ lấy ra n thuộc tính từ props
        const { listUser } = this.props;
        //const listUser = this.props.listUser
        //props : viet tat properties
        //dùng để truyền dữ liệu từ component cha sang con 
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>
                                my name : {user.name}
                            </div>
                            <div>
                                my age : {user.age}
                            </div>
                        </div>
                    )
                })}


            </div>
        )

    }

}

export default DisplayInfor;