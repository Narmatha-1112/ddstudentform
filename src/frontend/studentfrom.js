document.getElementById('studentformdata').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  // Convert appropriate fields to correct types
  data.age = parseInt(data.age, 10);
  data.studentId = parseInt(data.studentId, 10);
  data.dateOfBirth = new Date(data.dateOfBirth).toISOString(); // ISO format recommended for backend
  data.attendancePercentage = parseFloat(data.attendancePercentage);
  data.academyMark = parseFloat(data.academyMark);

  // Store current studentId locally
  localStorage.setItem('currentStudentId', data.studentId);

  try {
    const response = await fetch('https://ddstudentform.onrender.com/api/student/creates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Student Created:', result);
      alert('Student created successfully!');
      this.reset(); // Optional: Clear the form
    } else {
      const error = await response.json();
      console.error('Server Error:', error);
      alert('Failed to create student: ' + (error.message || 'Unknown error'));
    }
  } catch (error) {
    console.error('Network or server error:', error);
    alert('Something went wrong while creating student.');
  }
});
