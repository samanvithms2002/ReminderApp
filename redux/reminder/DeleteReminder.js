import React from "react"
import {useDispatch} from "react-redux"
import {reminderDeleted} from "../reminderSlice"
import styles from "../../styles/Reminder.module.css"

export default function DeleteReminder({title,id}){
    const dispatch=useDispatch();
   
     const onButtonClick =()=>{
       
        
         dispatch(reminderDeleted({id: id ,title:title}))
        
    }
    return(
        <article className={styles.details}>
        
        <div>{title}</div>
        
        <button className={styles.delete} onClick={onButtonClick}> X</button>
        
 
        </article>
       
    )
}