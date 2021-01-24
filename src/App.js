import React from "react";
import axios from "axios";

const App = () => {
  async function requestUrl() {
    try {
      await axios({
        method: "get",
        url: "http://18.230.65.107:5000/auth/user",
        data: {
          company: 1,
          username: "admin",
          senha: "admin",
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }).then(function (response) {
        if (response.status < 400) {
          console.log(response.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <button onClick={() => requestUrl()}>Chamando a API </button>
    </div>
  );
};

export default App;
