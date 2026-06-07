import { useState } from 'react'

function ExperienceItem(){

    const [isEditing , setisEditing] = useState(true);
    const [expInfo , setExpInfo] = useState({company: '', position: '', responsibilities: '', dates: ''});

    function sub(e){
        e.preventDefault();
        setisEditing(false);
    }

    function handleEdit(){
        setisEditing(true);
    }

    function handleChange(e){
        setExpInfo({...expInfo , 
            [e.target.name] : e.target.value
        });
    }

    if(isEditing){
        return(
            <>
            <form onSubmit={sub}>
                <label>
                    Company / Project Name:
                    <input type="text" name="company" value={expInfo.company} onChange={handleChange}  />
                </label>
                <br></br>
                 <label>
                    Position Title:
                    <input type="text" name="position" value={expInfo.position} onChange={handleChange} />
                </label>
                <br></br>
                 <label>
                    Responsibilities:
                    <input name="responsibilities" value={expInfo.responsibilities} onChange={handleChange}/>
                </label>
                <br></br>
                 <label>
                    Date:
                    <input type="date" name="dates" value={expInfo.dates} onChange={handleChange}/>
                </label> 
                <br></br>
                <button type="submit">Save</button>
            </form>
            </>
        )
    }

    return(
        <>
        <p>Company: {expInfo.company}</p>
        <p>Position: {expInfo.position}</p>
        <p>Responsibilities: {expInfo.responsibilities}</p>
        <p>Dates: {expInfo.dates}</p>

        <button onClick={handleEdit}>Edit</button>
        </>
    )
}

export default function ExperienceSection() {
    const [experienceIds, setExperienceIds] = useState([0]);

    function addExperience(){
        setExperienceIds([...experienceIds , experienceIds.length]);
    }

    function subExperience(){
        if (experienceIds.length === 1) return;
        setExperienceIds(experienceIds.slice(0, -1));
    }
    
    return(
        <div>
            <h2>Practical Experience</h2>
            {experienceIds.map((id) => (
                <ExperienceItem key={id} />
            ))}

            <button onClick={addExperience}>+</button>
            <button onClick={subExperience}>-</button>
        </div>
    )
}