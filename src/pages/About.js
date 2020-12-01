import React, { Component } from "react";
import 'antd/dist/antd.css';
import CharactersCard from "../components/CharactersCard";
import { Row, Col} from "antd";

export default class About extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1>Anggota Kelompok 8</h1>
                </center>
                <div className="site-card-wrapper">
                    <CharactersCard
                        img="https://scontent.fjog3-1.fna.fbcdn.net/v/t1.0-9/89687359_2498163060288695_7399932530192809984_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE60ufBweWI1sHGWML3G3idVG4I0DjzDoVUbgjQOPMOhQZvqp4nGukbK7osiXWMbxTGWjV11SaquvzJDIbNAa8C&_nc_ohc=tx_JcxV9byIAX9-Wx0_&_nc_ht=scontent.fjog3-1.fna&oh=60b95bdb1ddb447fe755f80b62021f34&oe=5FEC7B6C"
                        name="Abbiyu Kirana Distira"
                        birthday="Unknown"
                        status="Alive and Well"
                        nickname=""
                        occupation="Student"
                        portrayed=""
                    />
                </div>
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
            </div>
        );
    }
}