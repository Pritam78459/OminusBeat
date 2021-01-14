import React from 'react';
import {Route} from 'react-router-dom';
import OminusBeatMusic from './containers/OminusBeatMusic';



const BaseRouter= () => (
    <div>
        <Route exact path='/' component={OminusBeatMusic} />
        <Route exact path='/ominusmusic' component={OminusBeatMusic} />
    </div>
)

export default BaseRouter;