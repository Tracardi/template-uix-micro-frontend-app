import React from 'react';
import "regenerator-runtime/runtime";

function App({domElement}) {

    const attribute = domElement.getAttribute("data-attribute") || "I am test attribute"
    return <h1>"Hello world " + {attribute}</h1>

}

export default App;
