import React from "react";
function Component1(props){


    
        const { image2, title, className, price } = props;
        return (
            <div className='component-1 ${className || "" }'>
                <img className='image-2' src={image2} alt='image 2' />
                <div className='flex-col brawler-bold-white-32px'>
                    <div className='bitcoin'>
                        {title}
                    </div>
                    <div className='price'>
                    {price}


                    </div>
                </div>
            </div>
        );
    }

export default Component1;
