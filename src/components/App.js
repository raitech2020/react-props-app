import React from "react";
import Card from "./Card";

const App = () => {
    return (
        <div>
            <h2>People</h2>
            <hr/>
            <Card type="Business">
                <p>Russ Cox</p>
                <p>Google</p>
                <p>Golang</p>
            </Card>
            <hr/>
            <Card type="Business">
                <p>James Gosling</p>
                <p>Amazon</p>
                <p>Java</p>
            </Card>
            <hr/>
            <Card type="Personal">
                <p>Kate Jones</p>
                <p>Self Employed</p>
                <p>Writer</p>
            </Card>
        </div>
    )
}

export default App
