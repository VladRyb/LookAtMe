import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

export default function AboutComponent() {
  const session = localStorage.getItem("session");
  const history = useHistory();
  if (session === "false") {
    history.push("/login");
  }

  return (
    <>
      <h2>О нас</h2>
      <div className='aboutContainer'>
      <p>Текст о том, что умеет наше приложение<br/>
      Текст о том, что умеет наше приложение<br/>
      Текст о том, что умеет наше приложение<br/>
      Текст о том, что умеет наше приложение<br/>
      Текст о том, что умеет наше приложение<br/>
      Текст о том, что умеет наше приложение<br/>
      Текст о том, что умеет наше приложение<br/>
      Текст о том, что умеет наше приложение<br/>
      </p>
      
      </div>
    </>
  );
}
