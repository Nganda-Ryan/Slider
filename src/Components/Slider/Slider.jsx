import React, { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider';

const Slider = () => {
    const [slideAnime, setSlideAnime] = useState({
        index: 1,
        inProgress: false
    });

    const nextSlide = () => {
        if(slideAnime.index !== dataSlider.length && !slideAnime.inProgress){
            setSlideAnime({index: slideAnime.index + 1, inProgress: true});
            setTimeout(() => {
                setSlideAnime({index: slideAnime.index + 1, inProgress: false});
            }, 400)
        }else if(slideAnime.index === dataSlider.length && !slideAnime.inProgress){
            setSlideAnime({index: 1, inProgress: true});
            setTimeout(() => {
                setSlideAnime({index: 1, inProgress: false});
            }, 400)
        }
    }

    const prevSlide = () => {
        if(slideAnime.index !== 1 && !slideAnime.inProgress){
            setSlideAnime({index: slideAnime.index - 1, inProgress: true});
            setTimeout(() => {
                setSlideAnime({index: slideAnime.index - 1, inProgress: false});
            }, 400)
        }else if(slideAnime.index === 1 && !slideAnime.inProgress){
            setSlideAnime({index: 5, inProgress: true});
            setTimeout(() => {
                setSlideAnime({index: 5, inProgress: false});
            }, 400)
        }
    }
    const moveDot = index => {
        setSlideAnime({index:  index, inProgress: false})
    }
    return (
        <div className='container-slider'>
            {
                dataSlider.map((obj, index) => {
                    return(
                        <div 
                         key={obj.id}
                         className={slideAnime.index === index + 1 ? "slide active-anim" : "slide"}>

                            <img src={process.env.PUBLIC_URL + `/imgs/img${ index + 1}.jpg`} alt=''/>

                        </div> 
                    )
                })
            }
            {
                console.log('RENDEr')
            }
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>
            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => {
                    return <div 
                    key={`${index + 1}-key`}
                    className={slideAnime.index === index + 1 ? "dot active" : "dot"}
                    onClick={() => moveDot(index + 1)}
                    ></div>
                })}
            </div>
        </div>
    )
}

export default Slider