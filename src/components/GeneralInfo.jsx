import { useState } from 'react'

export default function GeneralInfo(){

    const [isEditing , setisEditing] = useState(true);
    const [perInfo , setPerInfo] = useState({name : '' , email: '' , phone : ''});

    function sub(e){
        e.preventDefault();
        setisEditing(false);
    }

     function handleEdit(){
        setisEditing(true);
    }

    function handleChange(e){
        setPerInfo({...perInfo , 
            [e.target.name] : e.target.value
        });
    }

    if(isEditing){
        return(
            <>
            <form onSubmit={sub}>
                <label>
                    Name:
                    <input type = "text" name = "name"  value={perInfo.name} onChange ={handleChange} />
                </label>
                <br></br>
                 <label>
                    Email:
                    <input type = "email" name = "email" value={perInfo.email}  onChange ={handleChange}/>
                </label>
                <br></br>
                 <label>
                    Phone No:
                    <input type = "tel" name="phone" value={perInfo.phone}  onChange ={handleChange}/>
                </label>
                <br></br>   
                <button type = "Submit">Save</button>
            </form>
            </>
        )
    }

    return(
        <>
        <h1>General Information</h1>
        <p>Name : {perInfo.name}</p>
        <p>Email :{perInfo.email}</p>
        <p>Phone: {perInfo.phone}</p>

        <button onClick={handleEdit}>Edit</button>
        </>
    )
}