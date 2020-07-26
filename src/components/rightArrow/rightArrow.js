import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import classes from "./rightArrow.module.css"

const rightArrow = (props) => {
    return(
        <div onClick={props.rightSlide} className = {classes.Right} >
            <ChevronRightIcon style = {{fontSize: "70px" , color: "black"}} />
        </div>
    )
}

export default rightArrow;