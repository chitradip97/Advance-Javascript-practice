// You have an array of objects representing students. Each student object has a grade property. Write a function called filterPassingStudents that takes an array of student objects as input and returns a new array containing only students with a grade greater than or equal to 70. 

const students = [
    { name: 'Alice', grade: 80 },
    { name: 'Bob', grade: 60 },
    { name: 'Charlie', grade: 90 },
    { name: 'David', grade: 45 },
  ]

  let filterPassingStudent=students.filter(student=>{
     if (student.grade>=70)
     {
         return student
     }
  })
  console.log(filterPassingStudent);
    //   console.log(student.grade)
    //  for(let value in student )
    //  {
    //   if(value.grade>=70)
    //   {
    //       value;
    //   }
//   return(  value.grade>=70? value:'' )

    //  }

    //  student.filter(value=>{
    //      value.grade>=70
    //      console.log(value.grade)
    //  }
    //  )
  
  