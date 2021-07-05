import '../../templates/css/Main.css'
import React from 'react'

export const Main = props =>
    <React.Fragment>
        <main>
            <div>
                {props.children}
            </div>            
        </main>
    </React.Fragment>
    

export default Main