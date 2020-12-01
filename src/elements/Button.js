import styled, {css} from 'styled-components';
export default styled.button`
    font-size: 20px;
    border: 2px solid;
    height: auto;
    width: auto;
    border-color: white;
    border-radius: 9px;
    padding:0px 2px;
    background:transparent;
    margin:20px 10px;
    ${(props) =>
        props.background &&
        css`
        props.background:${(props) =>props.background};
        `}
    color:white;
    &:hover{
        text-decoration:underline;
    }
`;