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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Consuming An API and Hide Your API Keys SAFELY in React
            </h1>
            <p className="text-xl md:text-2xl p-2">
              This is a simple app that consumes an API using React, Vite and
              Tailwind CSS. The App is secured using a key I created in Rapid
              API. This API key is saved in a .env file and the data is fetched
              from a backend server that I created using Node.js and Express.js.
            </p>
            <p className="text-xl md:text-2xl p-2">
              Since the app is getting the data from a backend server, the app
              is only working in localhost when the backend server is up and
              running. Which means that the app is not working in production.
              And to make it work on localhost, you need to run the backend
              server first. Running the backend server is easy. Just run the
              command
              <span className="font-semibold px-2 ">npm run backend</span>
              in the terminal. Then, run the command
              <span className="font-semibold px-2 ">npm run dev</span> to start
              the app.
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold mt-14 text-left underline underline-offset-4 text-gray-500">
              Food API
            </h2>
            <p className="text-xl md:text-2xl p-2">
              The best food API for your app, website or recipe using Edamam
              Food and Grocery Database
            </p>
            <p className="text-xs md:text-md py-5 text-gray-400 w-80 md:w-fit">
              Food and Grocery Database API: using Rapid API, React, Vite and
              Tailwind CSS
            </p>
            <p className="text-xs md:text-md py-5 text-gray-400 w-80 md:w-fit">
              Developed by Juan Diaz
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
