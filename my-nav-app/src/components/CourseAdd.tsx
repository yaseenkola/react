import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://693323a2e5a9e342d272088f.mockapi.io/courses";

const CourseAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const addCourse = async () => {
    setError(null);
    setSuccess(null);

    // Validation
    if (title.trim().length === 0) {
      setError("Course title cannot be empty");
      return;
    }

    if (description.trim().length === 0) {
      setError("Course description cannot be empty");
      return;
    }

    if (description.length < 10) {
      setError("Description must be at least 10 characters long");
      return;
    }

    setSuccess("Course details are valid! Adding course...");

    // Create a course object
    const course = { title, description };

    // Hit the POST API
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    // Navigate to the list page
    navigate("/courses/list");
  };

  let errorMessage = null;
  if (error) {
    errorMessage = <div className="alert alert-danger">{error}</div>;
  }

  let successMessage = null;
  if (success) {
    successMessage = <div className="alert alert-success">{success}</div>;
  }

  return (
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>

      {errorMessage}
      {successMessage}

      <div id="addCourseform" className="border border-1 rounded shadow p-4">
        <div className="mb-4">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title like Java, Python..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descriptionTextBox" className="form-label fw-bold">
            Course Description
          </label>
          <input
            type="text"
            id="descriptionTextBox"
            className="form-control"
            placeholder="Enter Course Description such as topics"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={addCourse}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseAdd;
