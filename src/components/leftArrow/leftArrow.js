import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const leftArrow = (props) => {
    return(
        <div onClick={props.leftSlide}>
            <ArrowBackIosIcon />
        </div>
    )
}

export default leftArrow;