import React from 'react';
import {Route} from 'react-router-dom';
import Explore from './containers/Explore';
import OminusBeatMusic from './containers/OminusBeatMusic';
import Rock from './containers/Rock';
import Synthwave from './containers/Synthwave';
import Rap from './containers/Rap';
import Metal from './containers/Metal';
import Blues from './containers/Blues';
import Hiphop from './containers/Hiphop';
import Pop from './containers/Pop';
import Classical from './containers/Classical';





const BaseRouter= () => (
    <div>
        <Route exact path='/' component={OminusBeatMusic} />
        <Route exact path='/explore' component={Explore} />
        <Route exact path='/rock' component={Rock} />
        <Route exact path='/blues' component={Blues} />
        <Route exact path='/pop' component={Pop} />
        <Route exact path='/metal' component={Metal} />
        <Route exact path='/rap' component={Rap} />
        <Route exact path='/hiphop' component={Hiphop} />
        <Route exact path='/classical' component={Classical} />
        <Route exact path='/synthwave' component={Synthwave} />
        
    </div>
)

export default BaseRouter;