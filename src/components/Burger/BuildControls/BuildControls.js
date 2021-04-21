import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label : 'Salad', type: 'salad'},
    { label : 'Bacon', type: 'bacon'},
    { label : 'Cheese', type: 'cheese'},
    { label : 'Aloo', type: 'aloo'},
];

const buildControls = (props) =>(
    <div className={classes.buildControls}> 
        {controls.map(ctrl => ( 
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added = { () => props.ingredientsAdded(ctrl.type)} />
         ))}
        
     </div>
); 

export default buildControls;