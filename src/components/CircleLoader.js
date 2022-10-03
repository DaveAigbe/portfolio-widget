import React from 'react';
import { motion } from "framer-motion";


const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
};

const circleStyle = {
    display: "block",
    width: "3rem",
    height: "3rem",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid #3498db",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0
};


const CircleLoader = () => {
    return (
        <div className={'h-screen w-screen flex items-center justify-center'}>
            <div className={'relative w-20 h-20 box-border'}>
                <motion.span
                    style={circleStyle}
                    animate={{ rotate: 360 }}
                    transition={spinTransition}
                />
            </div>
        </div>
    )
};

export default CircleLoader;
