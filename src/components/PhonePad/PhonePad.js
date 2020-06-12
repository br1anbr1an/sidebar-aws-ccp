import React from 'react';
import { Button, Alert } from 'react-bootstrap';

import './PhonePad.css';

async function handleClick() {
    console.log("CLICK");
}

const phonePad = props => (
    <div>
        <Alert variant={props.stateStyle}>
            <h1>
                <center>{props.state}</center>
            </h1>
        </Alert>s
        <Alert variant="danger">
            <h1>
                <center>Incoming call</center>
            </h1>
        </Alert>
        <Alert variant="primary">
            <h1>
                <center>On call</center>
            </h1>
        </Alert>
        <Alert variant="warning">
            <h1>
                <center>Break</center>
            </h1>
        </Alert>
        <Alert variant="dark">
            <h1>
                <center>ACW</center>
            </h1>
        </Alert>
    </div>
    // <Button variant="primary" onClick={handleClick}>Answer</Button>
);

export default phonePad;
