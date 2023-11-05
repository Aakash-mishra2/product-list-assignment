import ReactDOM from "react-dom";
import styled from "styled-components";

const BackDrop = styled.div`
    z-index: +10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
`;
export default function Backdrop(props) {
    return ReactDOM.createPortal(<BackDrop onClick={props.onClick} />, document.getElementById('backdrop'));
}