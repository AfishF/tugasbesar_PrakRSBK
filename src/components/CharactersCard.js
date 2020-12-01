import React, { Component } from 'react'
import '../App.css'
import { Row, Col, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

export default function CharactersCard(props) {
    return (
            <div className="card-info">
                <center>
                    <Avatar src={props.img} size={128} icon={<UserOutlined />} />
                    <h2>{props.name}</h2>
                </center>
                <Row>
                    <Col span={12}><p>Birthday</p></Col>
                    <Col span={12}><p>: {props.birthday}</p></Col>
                </Row>
                <Row>
                    <Col span={12}><p>Status</p></Col>
                    <Col span={12}><p>: {props.status}</p></Col>
                </Row>
                <Row>
                    <Col span={12}><p>Nickname</p></Col>
                    <Col span={12}><p>: {props.nickname}</p></Col>
                </Row>
                <Row>
                    <Col span={12}><p>Occupation</p></Col>
                    <Col span={12}><p>: {props.occupation}</p></Col>
                </Row>
                <Row>
                    <Col span={12}><p>Portrayed</p></Col>
                    <Col span={12}><p>: {props.portrayed}</p></Col>
                </Row>
            </div>
    )
}