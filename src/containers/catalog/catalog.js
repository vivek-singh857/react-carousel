import React , {Component} from "react";
import catalogData from "../../components/catalogData/catalogData";
import LeftArrow from "../../components/leftArrow/leftArrow";
import RightArrow from "../../components/rightArrow/rightArrow";
import CarouselDisplay from "../carouselDisplay/carouselDisplay";
import classes from "./catalog.module.css";

class Catalog extends Component{
    state = {
        activeIndex: 0,
        length: catalogData.length,
        isClicked: false
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
        if(index === length - 1){
            index = 0
        }else{
            index = index +1
        }
        this.setState({activeIndex: index})
    }

    checkboxChangeHandler = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;
        const clicked = !this.state.isClicked;
        let stop = setInterval(() => {
            if(this.state.isClicked === false){
                clearInterval(stop)
            }else{
                if(index === length - 1){
                    index = 0
                }else{
                    index = index +1
                }
                this.setState({activeIndex: index})
            }
            }, 3000)
        
    this.setState({isClicked: clicked})
    }

    render(){
        return(
            <div className = {classes.Catalog}>
                <div>
                    <LeftArrow leftSlide = {this.leftArrow} />
                </div>
                <div>
                    <CarouselDisplay activeIndex = {this.state.activeIndex} />
                </div>
                <div>
                    <RightArrow rightSlide = {this.rightArrow} />
                </div>
                <div style = {{marginTop: "30px"}} >
                    <input onChange = {this.checkboxChangeHandler} type="checkbox" />
                    <label>Slide</label>
                </div>
            </div>
        )
    }
}

export default Catalog;