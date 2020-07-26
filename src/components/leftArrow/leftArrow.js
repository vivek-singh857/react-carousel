import React from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classes from "./leftArrow.module.css"

const leftArrow = (props) => {
    return(
        <div onClick={props.leftSlide} className = {classes.Left}>
            <ChevronLeftIcon style = {{fontSize: "70px" , color: "black"}} />
        </div>
    )
}

export default leftArrow;