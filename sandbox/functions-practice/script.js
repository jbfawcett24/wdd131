input = document.querySelector("#grades");

function calculateGPA()
{
    const inputBox = input.value;
    const letterGrades = inputBox.split(", ");
    const numberGrades = [];

    for(let i = 0; i<letterGrades.length; i++)
    {
        switch(letterGrades[i])
        {
            case "A":
                numberGrades.push(4);
                break;
            case "B":
                numberGrades.push(3);
                break;
            case "C":
                numberGrades.push(2);
                break;
            case "D":
                numberGrades.push(1);
                break;
            case "F":
                numberGrades.push(0);
                break;
        }
    }
    let gradeTotal = 0;
    for(let i = 0; i<numberGrades.length; i++)
    {
        gradeTotal+=numberGrades[i];
    }
    const GPA = gradeTotal/numberGrades.length;
    document.querySelector("#output").innerHTML = GPA;
}

document.querySelector("#submitButton").addEventListener("click", calculateGPA);