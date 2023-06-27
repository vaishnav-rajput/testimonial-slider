import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(index){
        if((index - 1) < 0){
            setIndex(reviews.length - 1);
        } else{
            setIndex(index - 1);
        }
    }

    function rightShiftHandler(index){
       if((index + 1) >= reviews.length){
        setIndex(0);
       }else{
        setIndex(index + 1);
       }
    }   

    function surpriseHandler(){
        let randomIndex =  Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }

    return(<div>
        <Card review={reviews[index]} />
        <div>
            <div>
                <button onClick={() => leftShiftHandler(index)}>
                    <FiChevronLeft/>
                </button>
                <button onClick={() => rightShiftHandler(index)}>
                    <FiChevronRight/>
                </button>
            </div>
            <div>
                <button onClick={surpriseHandler}>
                    Surprise Me
                </button>
            </div>
        </div>
        

    </div>)
}

export default Testimonial;