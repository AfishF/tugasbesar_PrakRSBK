import React, { Component } from "react";
import axios from "axios";

import 'antd/dist/antd.css';
import TextInput from "../elements/TextInput";
import CharactersCard from "../components/CharactersCard";

export default class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            character: [],
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
                <TextInput placeholder="Search by name" type="text" bordeColor="black" onChange={(e) => this.setState({ searchField: e.target.value })} />
                <center>
                    <h1>List of Breaking Bad Characters</h1>
                </center>
                {
                    (filterCharacter != 0)
                        ? filterCharacter.map((results, index) => {
                            return (
                                <div className="site-card-wrapper" key={results.char_id}>
                                    <CharactersCard
                                        img={results.img}
                                        name={results.name}
                                        birthday={results.birthday}
                                        status={results.status}
                                        nickname={results.nickname}
                                        occupation={results.occupation.join(', ')}
                                        portrayed={results.portrayed}
                                    />
                                </div>
                            );
                        })
                        : <center>
                            <h1>No Data Found</h1>
                        </center>
                }
            </div>
        );
    }
}