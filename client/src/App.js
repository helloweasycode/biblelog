import {useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8200/get")
    .then((response) => {
      setViewContent(response.data);
    })},[viewContent])

  return (
    <div className="App">
      {viewContent.map((element, idx) => 
        <p key={idx}>{element.bibleverse} / {element.meditate}</p>
      )}
    </div>
  );
}

export default App;
