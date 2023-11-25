import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Card from "./Components/Card";

function App() {
  // options is required ~ Rapid API
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY, // -->> This is the Default API key
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

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
    // const url = `https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`;  // IMDb API

    const url =
      "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";

    // async function:
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.hints);
        console.log(result.hints.food);
        setContainer(result.hints); // setContainer is now an array of objects that contains the data from the API
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [endPoint, options]);

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

            {container.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
