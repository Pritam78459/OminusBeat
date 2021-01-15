import React from 'react';
import {Route} from 'react-router-dom';
import Explore from './containers/Explore';
import OminusBeatMusic from './containers/OminusBeatMusic';




const BaseRouter= () => (
    <div>
        <Route exact path='/' component={OminusBeatMusic} />
        <Route exact path='/explore' component={Explore} />
    </div>
)

export default BaseRouter;