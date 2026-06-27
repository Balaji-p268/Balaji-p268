const fs = require("fs");
const path = require("path");

const profile = require("../config/profile.json");

module.exports = function () {

    let y = 80;
    let skills = "";

    Object.entries(profile.skills).forEach(([skill, level]) => {

        const stars = "★".repeat(level) + "☆".repeat(5 - level);

        skills += `
<text
x="60"
y="${y}"
fill="#58A6FF"
font-size="20"
font-family="Segoe UI">

${skill}

</text>

<text
x="240"
y="${y}"
fill="#FFD700"
font-size="20"
font-family="Segoe UI">

${stars}

</text>
`;

        y += 35;
    });

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="550"
     height="450">

<rect
width="550"
height="450"
fill="#0D1117"/>

<text
x="50"
y="40"
fill="white"
font-size="30"
font-family="Segoe UI"
font-weight="bold">

Skills Dashboard

</text>

${skills}

</svg>
`;

    fs.writeFileSync(
        path.join(__dirname, "../assets/skills.svg"),
        svg
    );

    console.log("⚡ skills.svg generated");

};