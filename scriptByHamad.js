console.log("hello hamad");



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
             <li>${student.marks}</li>
          </ul>
        `;



        const resultHtml1 = `
<tbody>       
 ${Object.keys(student.marks).map(subject => `<tr> <td class="auto-style1"
                                style="border: 1px solid green; background-color: darkseagreen; font-weight: bold;">${subject}</td> <td  style="border: 1px solid green; background-color: snow; font-weight: bold; ">&nbsp;<span>${student.marks[subject]}</span></td> </tr>`).join('')}
</tbody>
`;


        const resultHtml2 = `

<tr style="background-color: darkseagreen; font-weight: bold; text-align: center;" >

  ${Object.keys(student.marks2).map(subject => `<th style = "border: 1px solid green; text-align: center" >${student.marks2[subject]}</th>`).join('')}

</tr>

`;


        const resultHtml4 = `
  

  ${Object.keys(student.marks4).map(subject => `<td>${student.marks4[subject]}</td>`).join('')}

  `;



        const resultHtml5 = `
  

  ${Object.keys(student.marks5).map(subject => `<td>${student.marks5[subject]}</td>`).join('')}

  `;


        const resultHtml6 = `
  

  ${Object.keys(student.marks6).map(subject => `<td>${student.marks6[subject]}</td>`).join('')}

  `;





        const resultHtml7 = `
  

  ${Object.keys(student.marks7).map(subject => `<td>${student.marks7[subject]}</td>`).join('')}

  `;




        const resultHtml8 = `
  

  ${Object.keys(student.marks8).map(subject => `<td>${student.marks8[subject]}</td>`).join('')}

  `;

        const resultHtml9 = `
  

  ${Object.keys(student.marks9).map(subject => `<td>${student.marks9[subject]}</td>`).join('')}

  `;



        const resultHtml10 = `
  

  ${Object.keys(student.marks10).map(subject => `<td>${student.marks10[subject]}</td>`).join('')}

  `;


        const resultHtml11 = `
  

  ${Object.keys(student.marks11).map(subject => `<td>${student.marks11[subject]}</td>`).join('')}

  `;



        const resultHtml12 = `
  

  ${Object.keys(student.marks12).map(subject => `<td>${student.marks12[subject]}</td>`).join('')}

  `;





        const resultHtml_overall = `
  

  <td><b>Overall Result</b></td>${Object.keys(student.marks_over).map(subject => `<td><span style="font-weight:bold;" >${student.marks_over[subject]}</span></td>`).join('')}

  `;



        const resultHtml_subject_re = `
  

<td colspan="1" class="auto-style1"
style="width: 10%; border: 1px solid green; background-color: darkseagreen; font-weight: bold;">
Subjects<br>
Re-appearing</td>${Object.keys(student.marks_subject_re).map(subject => `<td colspan="5" style="border: 1px solid green; background-color: snow;" ><span id="MainContent_subreapps" style="font-weight:bold;" >${student.marks_subject_re[subject]}</span></td>`).join('')}

  `;












        const resultHtml_remarks = `
  

  <td colspan="1" class="auto-style1"
  style="width: 10%; border: 1px solid green; bdarkseagreen; font-weight: bold;">
  Remarks</td>${Object.keys(student.marks_remarks).map(subject => `<td colspan="5" style="border: 1px solid green; background-color: snow;" ><span  id="MainContent_remarkss" style="font-weight:bold;" >${student.marks_remarks[subject]}</span></td>`).join('')}

  `;

        const resultHtml_note_hamad = `
${Object.keys(student.marks_note).map(subject => `<td colspan="7" style="border: 1px solid green"><b> Note: This is NOT an Official Detailed Marks Certificate <br>  ${student.marks_note[subject]}</b></td> `).join('')}

`;









        document.getElementById("tr_note_hamad").innerHTML = resultHtml_note_hamad

        document.getElementById("tr-remarks").innerHTML = resultHtml_remarks

        document.getElementById("tr-subjects-re").innerHTML = resultHtml_subject_re

        document.getElementById("tr-overall-hamad").innerHTML = resultHtml_overall

        document.getElementById("tr-target-hamad-9").innerHTML = resultHtml12
        document.getElementById("tr-target-hamad-8").innerHTML = resultHtml11
        document.getElementById("tr-target-hamad-7").innerHTML = resultHtml10
        document.getElementById("tr-target-hamad-6").innerHTML = resultHtml9
        document.getElementById("tr-target-hamad-5").innerHTML = resultHtml8
        document.getElementById("tr-target-hamad-4").innerHTML = resultHtml7
        document.getElementById("tr-target-hamad-3").innerHTML = resultHtml6






        document.getElementById("tr-target-hamad-2").innerHTML = resultHtml5
        document.getElementById("tr-target-hamad-1").innerHTML = resultHtml4

        document.getElementById("thead-hamad").innerHTML = resultHtml2

        document.getElementById("table1-hamad").innerHTML = resultHtml1

        document.getElementById('result').innerHTML = resultHtml;
      } else {
        document.getElementById('result').innerHTML = 'Student not found';
      }
    }

    // Get roll number from input field and display result
    document.getElementById('search-btn').addEventListener('click', () => {
      const rollNumber = document.getElementById('roll-number').value;

document.getElementById('hamad-result-search-div').style.display = 'none';
      document.getElementById('container body-content-hamad1').style.display = 'block';
      document.getElementById('container body-content-hamad2').style.display = 'block';

      displayResult(rollNumber);
    });
  })
  .catch(error => console.error(error));




// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk






  
// document.getElementById('search-btn').addEventListener("click" , () =>{
//       const rollNumber = document.getElementById('roll-number').value;

//       document.getElementById('hamad-result-search-div').style.display = 'none';
//       document.getElementById('container body-content-hamad1').style.display = 'block';
//       document.getElementById('container body-content-hamad2').style.display = 'block';

// }
// );








// for back button


document.getElementById('MainContent_LinkButton1').addEventListener(
      'click' , () =>{
            document.getElementById('hamad-result-search-div').style.display ='block';


            document.getElementById('container body-content-hamad1').style.display = 'none';
            document.getElementById('container body-content-hamad2').style.display = 'none';
      }
);




// lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll




// 2nd table data fetch




// fetch('students.json')
//   .then(response => response.json())
//   .then(data => {
// const tableHead =document.getElementById("thead-hamad");
// const tr = document.createElement('tr');
// data.resultTable[0].forEach((item) => {
//   const th = document.createElement('th');
//   th.textContent = item ;
//   tr.appendChild(th);
//   });
//   tableHead.appendChild(tr);
// })
// .catch(error => console.error('error fetchin table 2 data',error));






// <tr>
//             <td class="auto-style1"
//                             style="border: 1px solid green; background-color: darkseagreen; font-weight: bold;" >roll</td>
//             <td  style="border: 1px solid green; background-color: snow;" >&nbsp;<span>68501</span></td>
//         </tr>
