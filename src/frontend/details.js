async function searchStudent() {
  const studentId = document.getElementById('studentIdInput').value.trim();
  const resultDiv = document.getElementById('studentDetails');

  if (!studentId) {
    alert("Please enter a student ID.");
    return;
  }

  try {
    const res = await fetch(`https://ddstudentform.onrender.com/api/student/${studentId}`);
    if (!res.ok) {
      const err = await res.json();
      resultDiv.innerHTML = `<p style="color:red;">${err.error || 'Student not found'}</p>`;
      return;
    }

    const student = await res.json();
    resultDiv.innerHTML = `
      <div class="student-card">
        <p><strong>Name:</strong> ${student.fullName}</p>
        <p><strong>Email:</strong> ${student.emailAddress}</p>
        <p><strong>Student ID:</strong> ${student.studentId}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>DOB:</strong> ${new Date(student.dateOfBirth).toLocaleDateString()}</p>
        <p><strong>Gender:</strong> ${student.gender}</p>
        <p><strong>Address:</strong> ${student.address}</p>
        <p><strong>Attendance:</strong> ${student.attendancePercentage}%</p>
        <p><strong>Academy Mark:</strong> ${student.academyMark}</p>
      </div>
    `;
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = `<p style="color:red;">Error fetching student data.</p>`;
  }
}
