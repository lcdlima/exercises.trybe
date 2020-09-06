// Now, define a second object with the same structure (the same keys) as the first and the following values:
// “Uncle Scrooge”, “Christmas on Bear Mountain, Dell’s Four Color Comics # 178”, “The Last MacPatinhas”, “Yes”.

let info = {
    character: "Margarida",
    origin: "Donald Duck",
    note: "Girlfriend of the main character in Donald Duck comics",
    recurrent: "Yes",
};
    
let newinfo = {
    character: "Uncle Scrooge",
    origin: "Christmas on Bear Mountain, Dell’s Four Color Comics # 178",
    note: "The last MacPatinhas",
    recurrent: "Yes",
}
    
console.log (info.character, "and", newinfo.character);
console.log (info.origin, "and", newinfo.origin);
console.log (info.note, "and", newinfo.note);
if (info.recurrent == "Yes" && newinfo.recurrent == "Yes") {
    console.log ("Both recurring");
}
