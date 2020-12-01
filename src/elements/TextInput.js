import styled, {css, ThemeProvider} from "styled-components";

export default styled.input`
    font-size:1.0rem;
    border:2px solid;
    border-radius:5px;
    padding:7px 10px;
    background:white;
    margin:10px 10px;
    ${(props) =>
        props.borderColor &&
        css`
        border-color:${(props) =>props.borderColor}
        `}
    color:black;
`;