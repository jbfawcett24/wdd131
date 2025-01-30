const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
//document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grades = ["A", "B", "A", "C"];
function GPAConvert(grade) {
    switch(grade)
    {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        case "D":
            return 1;
        case "F":
            return 0;
    }
}

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const newFruits = fruits.filter((fruit) => fruit.length<6);
document.querySelector("#myList").innerHTML = newFruits.join("");

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const islucky = numbers.indexOf(luckyNumber);
console.log(islucky);

// const gradeNum = grades.map(GPAConvert);
// const gradeTotal = gradenum.reduce((total, item) => total+item);
// const GPA = gradeTotal/gradeNum.length;