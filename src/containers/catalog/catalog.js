import React , {Component} from "react";
import catalogData from "../../components/catalogData/catalogData";
import LeftArrow from "../../components/leftArrow/leftArrow";
import RightArrow from "../../components/rightArrow/rightArrow";
import CarouselDisplay from "../carouselDisplay/carouselDisplay";

class Catalog extends Component{
    state = {
        activeIndex: 0,
        length: catalogData.length
    }

    leftArrow = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if(index < 1){
            index = length - 1
        }else{
            index = index -1
        }

        this.setState({activeIndex: index})
    }

    rightArrow = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if(index === length-1){
            index = 0
        }else{
            index= index + 1
        }
    }
    render(){
        return(
            <div>
                <div>
                    <LeftArrow leftSlide = {this.leftArrow} />
                </div>
                <div>
                    <CarouselDisplay activeIndex = {this.state.activeIndex} />
                </div>
                <div>
                    <RightArrow rightSlide = {this.rightArrow} />
                </div>
            </div>
        )
    }
}

export default Catalog;