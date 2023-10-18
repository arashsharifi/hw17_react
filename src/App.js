import "./App.css";
import Qcourse1 from "./components/Qcourse1";
import Qcourse2 from "./components/Qcourse2";
import Qcourse3 from "./components/Qcourse3";
import Qcourse4 from "./components/Qcourse4";
import Qcourse5 from "./components/Qcourse5";
import Qcourse6 from "./components/Qcourse6";

// import Myself from "./components/myself";

function App() {
  const user = [
    {
      fName: "arash",
      lName: "amirsharifi",
      age: 26,
      job: "React Developer",
    },
  ];
  return (
    <div className="container-page">
      <h1>Qcourse_1</h1>
      <Qcourse1></Qcourse1>
      <h1>Qcourse_2</h1>
      <Qcourse2></Qcourse2>
      <h1>Qcourse_3</h1>
      <Qcourse3></Qcourse3>
      <h1>Qcourse_4</h1>
      <Qcourse4></Qcourse4>
      <h1>about me</h1>
      <h1>Qcourse_5</h1>
      <Qcourse5></Qcourse5>
      <h1>Qcourse_6</h1>
      <Qcourse6></Qcourse6>
    </div>
  );
}

export default App;
