import "./App.css";
import Greet from "./Greet";
import CourseList from "./CourseList";
import CourseInfo from "./CourseInfo";

function App() {
  return (
    <div id="app">
      <h1>Welcome to the world of React</h1>
      <Greet></Greet>
      <CourseList></CourseList>
      <CourseInfo></CourseInfo>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis
        animi nulla est omnis nesciunt maiores repellendus aspernatur quidem
        tenetur eveniet autem, dolore sit suscipit, illo exercitationem. Earum,
        rem laboriosam.
      </p>
    </div>
  );
}

export default App;
