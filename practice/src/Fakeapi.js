import React, {useState, useEffect} from "react";

function Fakeapi(){
    const [apiData, setApiData] = useState("");

    useEffect(
        () => {
                let a = fetch("https://jsonplaceholder.typicode.com/users");
                a.then( (resp) => {
                    return resp.json();
                    }).then(
                        (values) => {
                            // setApiData(values);
                            console.log(values);
                        }
                    );
                    a.catch((error) => {
                        console.log(error.message);
                      });
              }, [apiData]
    );
    return(
        <>

        </>
    );
}
export default Fakeapi;