import React, { Component } from "react";
import catalogData from "../../components/catalogData/catalogData";
import classes from "./carouselDisplay.module.css";

class CarouselDisplay extends Component{
    state = {
        carouselData: catalogData
    }

    render(){
        return (
            <section className={classes.FlexContainer}>
                {
                    this.state.carouselData.map( (data, index) =>{
                        return (
                            <div className = {index === this.props.activeIndex  ? classes.active : classes.inactive} key = {data.id} >
                                {/* <h2 className = {classes.Text}>{data.text}</h2> */}
                                <img src={data.imgURL} alt = "img"  style={{width: "100%" , height: "200px"}} />
                            </div>
                        )
                    } )
                }
            </section>
        )
    }
}

export default CarouselDisplay;