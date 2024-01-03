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
        <div className="flex flex-col items-center justify-center">
          <div className="text-justify">
            <h1 className="mb-4 text-center text-4xl font-bold md:text-6xl">
              Consuming and Securing Your API Keys in React
            </h1>
            <p className="md:text-md absolute right-20 w-80 py-5 text-xs text-gray-400 md:w-fit">
              Developed by Juan Diaz
            </p>
            <h1 className="mb-4 text-center text-xl  md:text-2xl">
              Watch:
              <a
                className="pl-2 font-semibold text-gray-400 duration-150 hover:text-sky-600"
                href="https://www.youtube.com/watch?v=FcwfjMebjTU&t=0s"
              >
                Hide Your API Keys SAFELY in React
              </a>
            </h1>
            <h2></h2>
            <p className="py-2 text-xl md:text-2xl">
              This is a simple app that consumes an API using React, Vite and
              Tailwind CSS. The App is secured using a key I created in Rapid
              API. This API key is saved in a .env file and the data is fetched
              from a backend server that I created using Node.js and Express.js.
            </p>
            <p className="py-2 text-xl md:text-2xl">
              Since the app is getting the data from a backend server, the app
              is only working in localhost when the backend server is up and
              running. Which means that the app is not working in production.
              And to make it work on localhost, you need to run the backend
              server first. Running the backend server is easy. Just run the
              command
              <span className="px-2 font-semibold ">npm run backend</span>
              in the terminal. Then, run the command
              <span className="px-2 font-semibold ">npm run dev</span> to start
              the app.
            </p>
            <p className="py-4 text-xl md:text-2xl">
              Check the code in my Github and the documentation in my website to
              learn more about this project.
            </p>
            <div className="flex justify-around">
              <p>
                <a
                  href="https://github.com/JuanPabloDiaz/food-RapidAPI"
                  className="p-2 text-xl text-sky-600 underline underline-offset-4 duration-150 hover:text-sky-800 md:text-2xl"
                >
                  Github Repo
                </a>
              </p>
              <p className="flex flex-col">
                <a
                  href="https://docs.jpdiaz.dev/posts/consume-rapid-api/"
                  className="p-2 text-xl text-sky-600 underline underline-offset-4 duration-150 hover:text-sky-800 md:text-2xl"
                >
                  Docs.Jpdiaz.dev
                </a>
                <span className="text-center text-xs text-gray-500">
                  Step 5: API Keys SAFELY
                </span>
              </p>
            </div>
            <h2 className="mt-14 text-left text-2xl font-semibold text-gray-500 underline underline-offset-4 md:text-4xl">
              Food API
            </h2>
            <p className="p-2 text-xl md:text-2xl">
              The best food API for your app, website or recipe using Edamam
              Food and Grocery Database
            </p>
            <p className="md:text-md w-80 py-5 text-xs text-gray-400 md:w-fit">
              Food and Grocery Database API: using Rapid API, React, Vite and
              Tailwind CSS
            </p>

            <p className="md:text-md w-80 py-5 text-xs text-gray-400 md:w-fit">
              You should see the data below this text. If you don't see it, it
              means that the backend server is not running. Please, run the
              command{" "}
              <span className="px-2 font-semibold ">npm run backend</span> in
              the terminal to start the backend server.
            </p>
          </div>
          <div className="grid-row grid w-full max-w-screen-sm justify-center gap-4 sm:grid-cols-2 md:max-w-screen-md md:grid-cols-3 lg:max-w-screen-lg xl:max-w-screen-xl">
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
