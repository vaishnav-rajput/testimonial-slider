import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    return(<div>
        <Card review={reviews[index]} />
        
    </div>)
}

export default Testimonial;