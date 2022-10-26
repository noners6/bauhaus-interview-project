import { useEffect, useState } from "react";

const { getData } = require("./api");
function App() {
  const [data, setData] = useState([]);

  // useEffect takes effect after the button is clicked.
  // Button can be clicked any number of times.
  useEffect(() => {
    getData().then(({ data }) => {
      console.log("useEffect Data", data);
      setData(data);
    });
  }, []);
  return (
    <div>
      TEST
      {data.length > 0 && data.map((d) => <span>{d.title}</span>)}
    </div>
  );
}

export default App;
