import React from 'react';
import { Button } from 'react-bootstrap';

import './PhonePad.css';

async function handleClick() {
    console.log("CLICK");
}

const phonePad = props => (
    <Button variant="primary" onClick={handleClick}>Answer</Button>
);

export default phonePad;
