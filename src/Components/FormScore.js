import axios from "axios";
import React, { useState } from "react";

const FormScore = () => {
  const [Id, setId] = useState();
  const [Name, setName] = useState("");
  const [Time, setTime] = useState(10);
  const [Stars, setStars] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    RandomId = Math.floor(Math.random() * 100);
    setId(RandomId);
    setTime(); //on progress to get Time
    setStars(); //on progress to get Stars

    try {
      const response = await axios.post("https://example.com/register.php", {
        id: Id,
        name: Name,
        time: Time,
        stars: Stars,
      });
      console.log(response.data); // Handle the response data here
    } catch (error) {
      console.error(error); // Handle any errors here
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={Name} onChange={handleNameChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormScore;
