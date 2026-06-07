import { useState } from 'react'

function EducationItem(){

    const [isEditing , setisEditing] = useState(true);
    const [eduInfo , setEduInfo] = useState({school: '', degree: '', dates: ''});

    function sub(e){
        e.preventDefault();
        setisEditing(false);
    }

     function handleEdit(){
        setisEditing(true);
    }

    function handleChange(e){
        setEduInfo({...eduInfo , 
            [e.target.name] : e.target.value
        });
    }

    if(isEditing){
        return(
            <>
            <form onSubmit={sub}>
                <label>
                    School:
                    <input type = "text" name = "school"  value={eduInfo.school} onChange ={handleChange} />
                </label>
                <br></br>
                 <label>
                    Degree:
                    <input type = "text" name = "degree" value={eduInfo.degree}  onChange ={handleChange}/>
                </label>
                <br></br>
                 <label>
                    Date:
                    <input type = "date" name="dates" value={eduInfo.dates}  onChange ={handleChange}/>
                </label> 
                <button type = "Submit">Save</button>
            </form>
            </>
        )
    }

    return(
        <>
        <p>School : {eduInfo.school}</p>
        <p>Degree :{eduInfo.degree}</p>
        <p>Dates: {eduInfo.dates}</p>

        <button onClick={handleEdit}>Edit</button>
        </>
    )
}


export default function EducationSection() {
    const [educationIds, setEducationIds] = useState([0]);

    function addSchool(){
        setEducationIds([...educationIds , educationIds.length]);
    }

    function subSchool(){
        if (educationIds.length === 1) return;
        setEducationIds(educationIds.slice(0, -1));
    }
    return(
        <div>
            <h2>Education</h2>
            {educationIds.map((id , index) => (
                <EducationItem key={id} />
            ))}

            <button onClick={addSchool}>+</button>
            <button onClick={subSchool}>-</button>
        </div>
    )

}