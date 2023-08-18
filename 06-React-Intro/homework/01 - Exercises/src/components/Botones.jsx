import React from "react";

export default function Botones({props}) {
    return <div>
        <button onClick={() => alert(props.m1)}>Módulo 1</button>
        <button onClick={() => alert(props.m2)}>Módulo 2</button>
    </div>
}