import React ,{useState} from "react"
import {nanoid} from "@reduxjs/toolkit"
import {useSelector,useDispatch} from "react-redux"
import {reminderAdded} from "../reminderSlice"
import DeleteReminder from "./DeleteReminder"
import styles from '../../styles/Reminder.module.css'
export default function AddReminder(){
    const [title,setTitle] = useState("")
    
    const reminders= useSelector(state=>state.reminders)
    
    const dispatch=useDispatch();

    const onTitleChanged =(e)=>{
        setTitle(e.target.value)
    };
    const onBtnClick = ()=>{
        if(title){
            dispatch(reminderAdded({id:nanoid(),title}))
            setTitle("")
        }
    }
   
    
    const renderReminders = reminders.map(reminder=>(
      
        <DeleteReminder  
        title={reminder.title} id={reminder.id}
         />
       
        
    ))
    return (
        <>
        <div className={styles.container}>       
         <h1 style={{color:"black"}}>Remainders</h1>
            <div >
                <form className={styles.form}>
                   
                    <input
                    name="Reminder" 
                    type="text"
                    className={styles.input}
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}

                    />
                    <button type="button" className={styles.button} onClick={onBtnClick}  >+</button>
                    
                </form>
                <div>
                
                {renderReminders}
            </div>
            </div>
            </div>

        </>
    )

}
   