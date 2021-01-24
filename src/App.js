import React, { useCallback, useState } from "react";
import axios from "axios";

 const URI = "http://18.230.65.107:5000/";
 const user1 = {
   "company"  : 1,
   "username" : "admin",
   "senha" : "admin"
 };

 const authAxios = axios.create({
   baseURL: URI,
   headers: {
     "sessionToken": "a55b4f502d2d3b45bbe6e1f74a7b838c-1-1-a55b4f502d2d3b45bbe6e1f74a7b838c",
     "Content-Type": "application/json",
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Headers": "Content-Type",
   },
 });

const App = () => {
   const [tokenAcess, setTokenAcess] = useState([]);
   const [requestError, setRequestError] = useState();

   const fetchData = useCallback(async () => {
     try {
       const result = await authAxios.get(`${URI}/auth/user`, { data: user1 });
       setTokenAcess(result.data);
       console.log(tokenAcess);
     } catch (err) {
       setRequestError(err.message);
       console.log(requestError);
     }
   }); 
  }

  return (
    <div className="App">
      <button onClick={() => fetchData()}>Chamando a API </button>
    </div>
  );
};

export default App;
