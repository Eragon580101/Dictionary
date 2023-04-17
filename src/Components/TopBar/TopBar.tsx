import React, { forwardRef, useRef, useState } from 'react';
import './TopBar.scss';

interface Props {
    handleDarkMode: () => void;
}

type Ref = HTMLDivElement;

export const TopBar = forwardRef<Ref, Props>((props, ref) => {
    const { handleDarkMode } = props;

    return (
        <div className="top-bar" ref={ref}>
            <div className="top-bar__logo">
                <i className="fas fa-book icon"></i>
                <span>Dictionary</span>
            </div>
            <div className="top-bar__control">
                <input type="checkbox" className='top-bar__control_switch' onClick={handleDarkMode} />    
                <i className="fas fa-moon icon"></i>
            </div>        
        </div>
    )
    })

