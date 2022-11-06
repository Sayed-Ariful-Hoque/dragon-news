import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import './ToggleButton.css'

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false)
    return (
        <div>
            <ToggleButton 
            isToggled={isToggled} onToggle={()=> setIsToggled(!!isToggled)} 
            />
        </div>
    );
};

export default Toggle;