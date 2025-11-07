function Courses() {
  // Static array of course names
  const courses: string[] = [
    "Frontend React",
    "Advanced Web Design",
    "Canva",
    "Python",
    "Full Stack - MERN",
    "Express JS / Mongo DB",
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-warning mb-3">List of Courses</h2>

      {/* Bootstrap List Group */}
      <ul className="list-group">
        {/* Loop through courses array and render each as <li> */}
        {courses.map((course, index) => (
          <li className="list-group-item" key={index}>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
