module.exports = function hero(x, y) {

return `

<!-- Hair -->
<rect x="${x+8}" y="${y}" width="4" height="4" fill="#1E1E1E"/>
<rect x="${x+12}" y="${y-2}" width="4" height="4" fill="#1E1E1E"/>
<rect x="${x+16}" y="${y}" width="4" height="4" fill="#1E1E1E"/>

<!-- Face -->
<rect x="${x+10}" y="${y+4}" width="8" height="8" fill="#F2C094"/>

<!-- Body -->
<rect x="${x+8}" y="${y+12}" width="12" height="12" fill="#FF8C42"/>

<!-- Laptop -->
<rect x="${x+20}" y="${y+12}" width="10" height="8" fill="#58A6FF"/>

`;

}