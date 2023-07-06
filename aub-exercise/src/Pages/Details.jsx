import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const About = () => {
  const [character, setUser] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const downloadDetails = () => {};

  const [isNull, setIsNull] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await response.json();
      console.log(data);
      setUser(data.data);
      setIsNull(false);
      console.log(id);
    };
    getUsers();
  }, []);

  return (
    <>
      {!isNull && (
        <div className="card" id="details-body">
          <img id="avatar" src={character.avatar} alt={character.first_name} />
          <div className="card-body">
            <h2>
              {character.first_name} {character.last_name}
            </h2>
            <p>{character.email}</p>
            <button className="btn"id="download" onClick={downloadDetails}>
            Download{" "}
          </button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
