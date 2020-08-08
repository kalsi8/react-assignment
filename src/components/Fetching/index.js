import React, { useEffect, useState } from 'react';

function Fetching() {
    const [dotes, setDotes] = useState(0)
    useEffect(() => {
        const inter = setInterval(() => {
            if(dotes === 3){
                setDotes(0)
            }
            setDotes(dotes => {
                if(dotes === 3){
                    return 0;
                }
                return dotes +1
            })
        },1000)

        return () => {
            clearInterval(inter)
        }
    }, [])
    return (
        <div>
            fetching
            {'.'.repeat(dotes)}
        </div>
    )
}


export default Fetching;