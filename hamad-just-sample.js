// Load JSON data
fetch('students.json')
  .then(response => response.json())
  .then(data => {
    // Function to display student result
    function displayResult(rollNumber) {
      const student = data.find(student => student.rollNumber === rollNumber);
      if (student) {
        // Create HTML elements to display student result
        const resultHtml = `
          <h2>Student Result</h2>
          <p>Name : ${student.name}</p>
          <p>Roll Number: ${student.rollNumber}</p>
          <p>Marks:</p>
         <ul>
            ${Object.keys(student.marks).map(subject => `<li>${subject}: ${student.marks[subject]}</li>`).join('')}
          </ul>
        `; 




       const resultHtml2 = `
          <h2>Student Result</h2>
          <p>Name : ${student.name}</p>
          <p>Roll Number: ${student.rollNumber}</p>
          <p>Marks:</p>
         <ul>
            ${Object.keys(student.marks).map(subject => `<li>${subject}: ${student.marks[subject]}</li>`).join('')}
          </ul>
        `;






document.getElementById("result2").innerHTML=resultHtml2;
        document.getElementById('result').innerHTML = resultHtml;
      } else {
        document.getElementById('result').innerHTML = 'Student not found';
      }
    }

    // Get roll number from input field and display result
    document.getElementById('search-btn').addEventListener('click', () => {
      const rollNumber = document.getElementById('roll-number').value;
      displayResult(rollNumber);
    });
  })
  .catch(error => console.error(error));