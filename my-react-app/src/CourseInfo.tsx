// src/CourseInfo.tsx
import "./CourseInfo.css";

type Course = {
  title: string;
  instructor: string;
  duration: string;
  description: string;
};

function CourseInfo() {
  let course: Course = {
    title: "Advanced Excel",
    instructor: "Imran Khan",
    duration: "6 weeks",
    description:
      "Advanced topics in Excel including pivot tables and data analysis tools.",
  };

  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseInfo;
