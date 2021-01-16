import React from 'react';
import {Route} from 'react-router-dom';
import Explore from './containers/Explore';
import OminusBeatMusic from './containers/OminusBeatMusic';
import Rock from './containers/Rock'




const BaseRouter= () => (
    <div>
        <Route exact path='/' component={OminusBeatMusic} />
        <Route exact path='/explore' component={Explore} />
        <Route exact path='/rock' component={Rock} />
    </div>
)

export default BaseRouter;