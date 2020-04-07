import React, { Component } from 'react'
import '../style/Login_page/RightBody.css'
import { Row, Col } from 'antd'

export default class RightBody extends Component {
    render() {
        return (
            <Col className="RightBody">

                <Row className="rowInRight">สร้างบัญชีใหม่</Row>


                <Row className="rowInRight">ง่ายและเร็ว</Row>


                <Row className="rowInRight" type="flex">

                    <Col className="firstInput">
                        <Row>
                            <input type="text" placeholder="ชื่อ" />
                            <input type="text" placeholder="นามสกุล" />
                        </Row>
                    </Col>
                    <Col span={24}><input type="text" placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล" /></Col>
                    <Col span={24}><input type="text" placeholder="รหัสผ่านใหม่" /></Col>
                    <Col span={24}></Col>

                    <Row className="subRowInRight">วันเกิด</Row>

                    <Row>
                        <select type="date" placeholder="default">6</select>
                        <select type="date" placeholder="default">6</select>
                        <select type="date" placeholder="default">6</select>
                    </Row>

                    <Row>
                        <Row className="subRowInRight">เพศ</Row>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </Row>

                    <Row >เมื่อคลิก สมัคร แสดงว่าคุณยินยอมตามข้อกำหนด นโยบายข้อมูล และนโยบายคุกกี้ของเราแล้ว คุณอาจได้รับการแจ้งเตือนทาง SMS จากเราและสามารถเลือกไม่รับได้ทุกเมื่อ</Row>

                </Row>


            </Col>
        )
    }
}
