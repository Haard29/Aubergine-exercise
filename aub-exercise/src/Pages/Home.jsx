import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Homepage = () => {
  const [users, setUsers] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const [isNull, setIsNull] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      console.log(data);
      setUsers(data.data);
      setIsNull(false);
    };
    getUsers();
  }, []);

  return (
    <>
      {!isNull &&
        users.map((character) => (
          <Link to={`/${character.id}`}>
            <div className="card">
              <img id="avatar" src={character.avatar} alt={character.first_name} />
              <div className="card-body">
                <h2>
                  {character.first_name} {character.last_name}
                </h2>
                <p>{character.email}</p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};

export default Homepage;
