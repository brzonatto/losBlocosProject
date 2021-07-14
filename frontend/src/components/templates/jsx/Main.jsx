import '../../templates/css/Main.css'
import React from 'react'

export const Main = props =>
    <React.Fragment>
        <main className="main">
            <div>
                {props.children}
            </div>            
        </main>
    </React.Fragment>
    

export default Main