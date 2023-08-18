import React from "react";
import Botones from './Botones';

const studentName = "Brian";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  return <div>
    <h1>Student</h1>
    <h3>{studentName}</h3>
    <ul>
      {techSkills.map((skill, i) => <li key={i}>{skill}</li>)}
    </ul>
    <Botones props={alerts}></Botones>
  </div>;
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
