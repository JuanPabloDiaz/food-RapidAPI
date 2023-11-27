import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Card from "./Components/Card";

function App() {
  // API options was here. I moved it to the backend.js file

  // First element from useState is the state itself (""). The initial value, in this case an empty string
  // Second is the function that will update the state (setEndPoint). The "Changer" function
  const [endPoint, setEndPoint] = useState("");
  // "Changer" function: it change the state of the endPoint variable by taking the value from the input
  const onChangeHandler = (event) => {
    setEndPoint(event.target.value);
  };

  // "Submit" function: it prevent the default behaviour of the form. It won't refresh the page
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  // container is an empty array. setContainer is the function that will update the state of the container
  const [container, setContainer] = useState([]);

  useEffect(() => {
    // API's URL was here. I moved it to the backend.js file

    // fetchData  function was here. I moved it to the backend.js file

    const url = "http://localhost:8000/backend";

    // async function:
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setContainer(result); // setContainer is now an array of objects that contains the data from the API
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [endPoint]);

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center  pb-2">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Food API</h1>
            <p className="text-xl md:text-2xl p-2">
              The best food API for your app, website or recipe using Edamam
              Food and Grocery Database
            </p>
            <p className="text-xs md:text-md py-5 text-gray-400 w-80 md:w-fit">
              Food and Grocery Database API: using Rapid API, React, Vite and
              Tailwind CSS
            </p>
          </div>
          <div className="grid gap-4 grid-row justify-center sm:grid-cols-2 md:grid-cols-3 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            {/* {container.map((item) => { */}
            {/* return ( */}
            {/* <div> */}
            {/* <p>{item.image}</p> */}
            {/* <img src={item.image} /> */}
            {/* </div> */}
            {/* ); */}
            {/* })} */}
            {/* Card */}

            {container &&
              container.map((item) => <Card key={item.id} data={item} />)}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
