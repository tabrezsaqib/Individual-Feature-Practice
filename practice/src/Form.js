import React, {useState, useEffect} from "react";
import './Form.css';

function Form(){

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    let d = {
      username: username,
      password: password,
    };

    useEffect(() => {
      let a = fetch("http://localhost:3001/userDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(d),
        })
          .then((resp) => {
            console.log(resp.status);
          })
          .catch((error) => {
            console.log(error.message);
          });
    }, []);

    function handleForm(e){

        e.preventDefault();

        if(username.length > 0 && password.legth > 0){

            alert("data is not empty");

              let a = fetch("http://localhost:3001/userDetails", {
                method: "POST",
                headers:{
                  'Content-Type': "apllication/json",
                },
                body: JSON.stringify(d),
              }

              ). then((resp) => {
                console.log(resp.status);
              } ).catch((error) => {
                console.log(error.message);
              });
              } 
        else {
              alert("Plz fill the form");
            }
          }
             
    return (
        <>
        <form onSubmit={handleForm}>
            <input 
            type="text" 
            placeholder="Enter your username" 
            value={username} 
            onChange={(e) => {setusername(e.target.value);}}/>
            <br />
            <br />
            <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => {setpassword(e.target.value);}}/>
            <br />
            <br />
            <button>Registration</button>
        </form>
        </>
    );
}
export default Form;