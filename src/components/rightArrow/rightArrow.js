import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const rightArrow = () => {
    return(
        <div onClick={props.rightSlide}>
            <ChevronRightIcon />
        </div>
    )
}

export default rightArrow;