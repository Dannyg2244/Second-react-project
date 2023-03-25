// import React from "react"
// import { useRef } from "react"
// function Form() {
//     const inputRef = useRef(null)
//     const handleSubmit = () => {
//         inputRef.current.value()
//         console.log("form submitted")
//     }
//     return (
//         <div>
//         <form onSubmit={handleSubmit}>
//             <label>Text</label>
//             <input ref={inputRef} type="text"/>
//             <button>Submit</button>
//         </form>
//         </div>
//     )
// }
// export default Form
/*
import "./App.css"
import React from "react"
import { useState } from "react"

function App() {
    const [name, SetName] = useState("")
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
     

    const handleSubmit = (e) => {
        e.preventDefault()
        SetName("")
        setComment("")
        setScore("10")
        console.log("form submitted");
        if(Number(score) <=5 && comment.length <= 12) {
            alert("your Score must be atleast 5 and comment must contain at least  12 character")
        }

    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset className="field">
                    <div className="dv">
                    <label htmlFor="name"> Name:</label>
                    <input 
                    value={name}
                    id="name"
                    type="text" 
                    placeholder="Name"
                    onChange={(e) => SetName(e.target.value)}
                    />
                    </div>
                    <div>
                        <label>score: {score}</label>
                        <input
                        type="range"
                        value={score}
                        min="0"
                        max="10"
                        onChange={(e) => setScore(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea 
                        required
                        value={comment}
                        placeholder="Feedback"
                        onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <div>
                        <button disabled={!name}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default App
*/

/*
//creating a functionality form with React
import React from "react"
import { useState } from "react"

function PasswordErrorMessage() {
    return (
            <p>password must be atleast 8 character</p>
    )
}

export default function App() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    })
    const [role, setRole] = useState("role")

    const ClearForm =(e) => {
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword({
            value: "",
            isTouched: false
        })
        setRole("role")
    }

    const isFormValid = () => {
        return (
            firstname &&
            lastname &&
            email &&
            password.value.length > 8 &&
            role !== "role"
            
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Account Created")
        ClearForm()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Sign Up</h1>
                    <div>
                        <label>firstname</label>
                        <input 
                        type="text"
                        value={firstname}
                        placeholder="firstname"
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>lastname</label>
                        <input
                        type="text"
                        value={lastname}
                        placeholder="lastname"
                        onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>email</label>
                        <input 
                        type="email"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>password</label>
                        <input
                        type="password"
                        value={password.value}
                        placeholder="password"
                        onChange={(e) => setPassword({...password, value: e.target.value})}
                        onBlur={() => setPassword({...password, isTouched: true})}
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage/>
                        ): null }
                    </div>
                    <div>
                        <label>Role</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="role" disabled hidden selected>Role</option>
                            <option value="individual">individual</option>
                            <option value="collectively">Collectively</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" disabled={!isFormValid()}>Create Account</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
*/

//Creating a Goal form
/*
import React from "react"
import { useState } from "react"

function GoalForm(props) {
    const [formData, setFormData] = useState({
        goal: "",
        by: ""
    })

    const handleClick = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAdd(formData);
        setFormData({
            goal: "",
            by: ""
        });
    }

    return (
        <div>
            <h1>My Little Lemon Goal</h1>

                <form onSubmit={handleSubmit} >
                <input type="text" name="Goal" value={formData.goal} placeholder="goal" onChange={handleClick}/>
                <input type="text" name="By... " value={formData.by} placeholder="By" onChange={handleClick}/>
                <button>Submit Goal</button>
                </form>
        </div>
    )
}

function ListAllGoal(props) {
    return (
        <>
        <ul>
            {props.allGoal.map((g) => (
                    <li key={g.goal}>
                        <span>my goal is to {g.goal}, by {g.by} </span>
                    </li>
            ))}
        </ul>
        </>
    )
}

export default function App() {
    const [allGoal, updateAllGoal] = useState([])

    function addGoal(goal) {
        updateAllGoal({...allGoal, goal})
    }

    return (
        <div>
            <GoalForm onAdd={addGoal} />
            <ListAllGoal allGoal={allGoal} />
        </div>
    )
}*/