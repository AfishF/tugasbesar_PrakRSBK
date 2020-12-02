import React, { Component } from "react";
import 'antd/dist/antd.css';
import CharactersCard from "../components/CharactersCard";
import { Row, Col } from "antd";

export default class About extends Component {

    componentDidMount() {
        alert('I will go to the about page')
    }

    componentWillUnmount() {
        alert('I will go to the character page')
    }


    render() {
        return (
            <div>
                <center>
                    <h1>Kelompok 8</h1>
                </center>
                <Row>
                    <Col span={12}>
                        <div className="site-card-wrapper">
                            <CharactersCard
                                img="https://pbs.twimg.com/profile_images/1309059882805612550/5zF4b4YH_400x400.jpg"
                                name="Abbiyu Kirana Distira"
                                birthday="Unknown"
                                status="Alive and Well"
                                nickname=""
                                occupation="Student"
                                portrayed=""
                            />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="site-card-wrapper">
                            <CharactersCard
                                img="https://avatars0.githubusercontent.com/u/38339230?s=460&u=52f517ece291562a33c3515835a8d6b0977b980d&v=4"
                                name="Muhammad Afishal Fakhri"
                                birthday="Unknown"
                                status="Alive and Well"
                                nickname=""
                                occupation="Student"
                                portrayed=""
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}