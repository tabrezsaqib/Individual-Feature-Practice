import React, {useState, useEffect} from "react";
import "./Registration.css";


function Registration(){
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        position: "",
        field: "",
        specials: [],
    });
    const [btnState, setBtnState] = useState(true);
    function handleUser(e){
        {
            if(e.target.name === "name")
            {
                setUser(() => ({ ...user, name: e.target.value }));
            }
            if(e.target.name==="email")
            {
                setUser(() => ({ ...user, email: e.target.value }));
            }
            if(e.target.name === "password")
            {
                setUser(() => ({ ...user, password: e.target.value }));
            }
            if(e.target.name === "position")
            {
                setUser(() => ({ ...user, position: e.target.value }));
            }
            if(e.target.name === "field")
            {
                setUser(() => ({ ...user, field: e.target.value }));
            }
            if(e.target.name === "specials")
            {
                if (!user.specials.includes(e.target.value)) 
                {
                    setUser(() => ({
                      ...user,
                      specials: [...user.specials, e.target.value],
                    }));
                } else 
                {
                    setUser(() => ({
                      ...user,
                      specials: user.specials.filter((element) => element !== e.target.value),
                    }));
                }
            }
        }
        
    }
    useEffect(() => {
        if (user.name !== "" && user.email !== "" && user.password !== ""){
            setBtnState(false);
        }
        else{
            setBtnState(true);
        }
    }, [user.name, user.email, user.password])
    function SubmitData()
    {
        localStorage.setItem("formData", JSON.stringify(user));
    }
    let details=JSON.parse(localStorage.getItem("formData"));
    console.log(details);
return(
        <>
            <div className="regmain">
                <div className="regcont">
                    <form onSubmit={SubmitData}>
                        <input type="text"  
                        name="name" 
                        placeholder="Enter your name" 
                        value={user.name} 
                        onChange={handleUser}/>
                        <br />

                        <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={handleUser}
                        />
                        <br />

                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={user.password}
                        onChange={handleUser}
                            />
                        <br />

                        <label htmlFor="Student">Student</label>
                        <input
                            type="radio"
                            name="position"
                            id="Student"
                            value="Student"
                            onChange={handleUser}
                        />
                        <br />
                        <label htmlFor="Employee">Employee</label>
                        <input
                            type="radio"
                            name="position"
                            id="Employee"
                            value="Employee"
                            onChange={handleUser}
                        />
                        <br />

                        <h4>Specialization</h4>
                        <label htmlFor="Critical">Critical Thinking</label>
                        <input
                            type="checkbox"
                            name="specials"
                            id="Critical"
                            value="Critical"
                            onChange={handleUser}
                        />
                        <br />
                        <label htmlFor="Communication">Excellent Communication</label>
                        <input
                            type="checkbox"
                            name="specials"
                            id="Communication"
                            value="Communication"
                            onChange={handleUser}
                        />
                        <br />
                        <label htmlFor="Logical">Logical Application</label>
                        <input
                            type="checkbox"
                            name="specials"
                            id="Logical"
                            value="Logical"
                            onChange={handleUser}
                        />
                        <br />
                        <label htmlFor="Raport">Good Raport</label>
                        <input
                            type="checkbox"
                            name="specials"
                            id="Raport"
                            value="Raport"
                            onChange={handleUser}
                        />
                        <br />
                        <select name="field" onChange={handleUser}>
                            <option value="ECE" disabled select="true">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="CSE">CSE</option>
                            <option value="ME">ME</option>
                            <option value="CE">CE</option>
                            <option value="IT">IT</option>
                        </select>
                        <br />
                        <button disabled={btnState}>Submit</button>
                    </form>
                </div>
            </div>
        </>
);

}

export default Registration;