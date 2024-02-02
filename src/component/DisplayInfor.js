import React from "react";

class DisplayInfor extends React.Component {

    render() {
        //destructuring array/obj  : chỉ lấy ra n thuộc tính từ props
        const { name, age } = this.props
        //props : viet tat properties
        //dùng để truyền dữ liệu từ component cha sang con 
        return (
            <div>
                <div>
                    my name : {name}
                </div>
                <div>
                    my age : {age}
                </div>
            </div>
        )

    }

}

export default DisplayInfor;