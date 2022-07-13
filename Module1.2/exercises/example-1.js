// outer/global scope: RED
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" },
  ];
  function getStudentName(studentID) {
    // function scope: BLUE
    for (let student of students) {
      // loop scope: GREEN
      if (student.id == studentID) {
        return student.name;
      }
    }
  }
  
  var nextStudent = getStudentName(73);
  console.log(nextStudent); // Suzy
  
  // Bubble 1(RED) encompasses the global scope, which holds three identifiers / variables:
  // students(line 1), get - StudentName(line 8), and nextStudent(line 16).
  // 2. Bubble 2(BLUE) encompasses the scope of the function getStudentName(..) (line 8),
  //  which holds just one identifier / variable: the parameter studentID(line 8).
  // 3. Bubble 3(GREEN) encompasses the scope of the for- loop(line 9),
  //     which holds just one identifier / variable: student(line 9).