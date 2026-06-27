const banner = require("./generateBanner");
const journey = require("./generateJourney");
const terminal = require("./generateTerminal");
const skills = require("./generateSkills");
const achievements = require("./generateAchievements");


console.log("================================");
console.log("🚀 Building Balaji's GitHub Profile");
console.log("================================");

banner();
journey();
terminal();
skills();
achievements();

console.log("================================");
console.log("✅ Build Complete");