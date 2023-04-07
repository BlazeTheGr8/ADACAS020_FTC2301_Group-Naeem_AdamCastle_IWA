const nickname= "Timmy";
const firstname = "Timothy";

console.log("Good Morning, " + (nickname || firstname) + "!")


if (nickname !== null || firstname !== null) {
    console.log(`Good Morning, ${nickname || firstname}!`);
} else {
    console.log("Good Morning!")
}