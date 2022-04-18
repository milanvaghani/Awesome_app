import React from 'react';

const SlotM = (props) => {
    let {x,y,z} = props;

    if(x===y && y===z){
        return(
            <>
            <div>
                <h1>{x}{y}{z}</h1>
                <hr />
                <h1>This Is Matching.</h1>
                <hr />
            </div>
            </>
        );
    } else{
        return(
            <>
            <div>
                <h1>{x}{y}{z}</h1>
                <h1>This Is Not Matching.</h1>
                <hr />
            </div>
            </>
        );
    } 
}

export default SlotM;
