import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

function Card({review}){

    const [index,setIndex] = useState(0);
    const [testimonial,setTestimonial] = useState(review[index])
    
    function nextTestimonialHandler(){
        
        if(index === review.length-1){
            //this is the cyclic case
            setIndex(0); 
        }
        else{
            //this is normal flow of the code and set only the next testimonial
            setIndex(index+1);
        }
        setTestimonial(review[index])
    }
    
    function prevTestimonialHandler(){
        
        if(index === 0){
            //this is again cyclic case 
            setIndex(review.length-1);
        }
        else{
            // this is the normal flow of the code
            setIndex(index-1)
        }
        setTestimonial(review[index])
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomTestimonialHandler(){
        //now generate a random number between 0 to review.length and setindex to it simple
        let randomIndex = Math.floor(Math.random()*review.length); // Generates a random index between 0 and array.length - 1
        
        setIndex(randomIndex);
        setTestimonial(review[index]);
    }
    
    return (
        <div className="review" >

            <div className="image_section" >
                 
                <img className="image" src={testimonial.image} ></img>

                <div className="image_bg">
                   
                </div>

            </div>

            <div className="review_info">
                <h3 className="name">{testimonial.name}</h3>
                <h5 className="job">{testimonial.job}</h5>
            </div>
            
            <div className="quote quote_left">
                <FaQuoteLeft></FaQuoteLeft>
            </div>

            <div className="description">
                <p className="text">{testimonial.text}</p>
            </div>

            <div className="quote">
                <FaQuoteRight></FaQuoteRight>
            </div>

            <div className="icons" >
                <IoIosArrowBack className="arrowBack" onClick={prevTestimonialHandler} ></IoIosArrowBack>
                <IoIosArrowForward className="arrowForward" onClick={nextTestimonialHandler}></IoIosArrowForward>
            </div>

            <button className="surprise_btn" onClick={randomTestimonialHandler}>
                Surprise Me
            </button>
            
            
        </div>
    )
}

export default Card;