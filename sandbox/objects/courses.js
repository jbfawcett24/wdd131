// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'}, 
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'} ],
    enrollStudent: function(sectionNum, num)
    {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
          );
        this.sections[sectionIndex].enrolled += num
        displaySection(this.sections);
    },
  };

function classInfo(course)
{
    const name = document.querySelector("#courseName");
    const code = document.querySelector("#courseCode");
    name.textContent = course.name;
    code.textContent = course.code;
}

function sectionTemplate(section) 
{
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
      </tr>`
}

function displaySection(sections)
{
    const hmtl = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = hmtl.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum, 1);
  });

document.querySelector("#dropStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum, -1);
});

classInfo(aCourse);
displaySection(aCourse.sections);