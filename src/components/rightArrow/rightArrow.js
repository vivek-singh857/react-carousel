import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const rightArrow = (props) => {
    return(
        <div onClick={props.rightSlide}>
            <ChevronRightIcon />
        </div>
    )
}

export default rightArrow;