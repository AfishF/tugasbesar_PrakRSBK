import React, { Component } from "react";
import { Row, Col, Card, Avatar } from "antd";
import axios from "axios";
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Button from "../elements/Button";
import TextInput from "../elements/TextInput";

export default class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            character: [],
            visible: false,
            char_id: 0,
            name: "",
            bithday: "",
            occupation: [],
            img: "",
            status: "",
            nickname: "",
            portrayed: "",
            searchField: ""
        };
    }


    componentDidMount() {
        alert('Selamat Datang, Salam hangat dari Abbiyu dan Afishal, Semoga harimu menyenangkan :)')

        axios({
            method: "get",
            url: "https://www.breakingbadapi.com/api/characters/",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    character: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const { searchField } = this.state
        const filterCharacter = this.state.character.filter(character => (
            character.name.toLowerCase().includes(searchField.toLowerCase())
        ))
        return (
            <div>
                <center>
                    <TextInput placeholder="Search by name" type="text" border="red" onChange={(e) => this.setState({ searchField: e.target.value })} />
                    <h1>List of Breaking Bad Characters</h1>
                </center>
                {filterCharacter.map((results, index) => {
                    return (
                        <div className="site-card-wrapper" key={results.char_id} >
                            <Col span={12} offset={6}>
                                <Card>
                                    <center>
                                        <Avatar src={results.img} size={256} icon={<UserOutlined />} />
                                        <h2>{results.name}</h2>
                                    </center>
                                    <Row>
                                        <Col span={12}><p>Birthday</p></Col>
                                        <Col span={12}><p>: {results.birthday}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}><p>Status</p></Col>
                                        <Col span={12}><p>: {results.status}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}><p>Nickname</p></Col>
                                        <Col span={12}><p>: {results.nickname}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}><p>Occupation</p></Col>
                                        <Col span={12}><p>: {results.occupation.join(', ')}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}><p>Portrayed</p></Col>
                                        <Col span={12}><p>: {results.portrayed}</p></Col>
                                    </Row>
                                </Card>
                            </Col>
                        </div>
                    );
                })}
            </div>
        );
    }
}