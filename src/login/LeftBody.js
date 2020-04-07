import React, { Component } from 'react'
import {Row, Col} from 'antd'
import '../style/Login_page/LeftBody.css'

export default class LeftBody extends Component {
    render() {
        return (

            <Col className="leftBody">

            <Row className="rowInLeft">การเข้าสู่ระบบล่าสุด</Row>


            <Row className="rowInLeft">คลิกรูปภาพหรือเพิ่มบัญชี</Row>



            <Row className="rowInLeft">
                <Col>
                    <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.0-1/p480x480/10497429_753345654718140_153937044072027666_o.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=apkgacAYyn8AX-XZLnt&_nc_ht=scontent.fbkk5-4.fna&_nc_tp=6&oh=6412e2e7b47df2d7448e526e54fe499e&oe=5EB340D2"></img>
                    <div>Bee</div>
                </Col>
            </Row>


            </Col>
        )
    }
}
