// src/CourseList.tsx
import "./CourseList.css";

function CourseList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Instructor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CS101</td>
          <td className="course-title">Introduction to Computer Science</td>
          <td>Dr. Yaseen</td>
        </tr>
        <tr>
          <td>MATH201</td>
          <td className="course-title">Calculus I</td>
          <td>Prof. Yaseen</td>
        </tr>
        <tr>
          <td>ENG301</td>
          <td className="course-title">Advanced English Literature</td>
          <td>Dr. Yusuf</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CourseList;
