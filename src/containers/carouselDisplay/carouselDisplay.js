import React, { Component } from "react";
import catalogData from "../../components/catalogData/catalogData";

class CarouselDisplay extends Component{
    state = {
        carouselData: catalogData
    }

    render(){
        return (
            <section>
                {
                    this.state.carouselData.map( (data, index) =>{
                        return (
                            <div className = {index === this.props.activeIndex  ? "active" : "inactive"} key = {data.id} >
                                <h2>{data.text}</h2>
                                <img src={data.imgURL} alt = "img" />
                            </div>
                        )
                    } )
                }
            </section>
        )
    }
}

export default CarouselDisplay;