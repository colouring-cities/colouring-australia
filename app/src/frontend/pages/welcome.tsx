import React from 'react';
import { Link } from 'react-router-dom';

import './welcome.css';

const Welcome = () => (
    <div className="section-body welcome">
        <h1 className="h2">Welcome to Colouring Perth!</h1>
        <p>

	Colouring Perth is a free knowledge exchange platform designed to provide over fifty types of open data on Perth buildings, to help make the city more sustainable. 

        </p>
        <p>
Colouring Perth is also the prototype for the Colouring Cities Research programme based at the Alan Turing Institute and coordinated by the City Futures Research Centre at the University of New South Wales. The programme works with local, regional, national, and international partners to develop open platform code also of relevance to other cities.
        </p>
        <p>
New datasets and features are added all the time. Any help you can give, colouring-in our building maps, and enriching and verifying our open datasets is very much appreciated. 
        </p>
        <p>
            All our <Link to="/data-extracts.html">data</Link> and <a href="https://github.com/colouring-cities/colouring-australia">code</a> are 
            free to download, use and share under our open licence terms.
        </p>
        <Link to="/view/categories"
            className="btn btn-outline-dark btn-lg btn-block">
            Start Colouring Here!
        </Link>
        <div className="image-row">
            <img className="cl-logo" src="images/logo-cc.jpg" alt="Colouring Cities Research Programme"></img>
            <img src="images/logo-turing.jpg" alt="City Futures Research Centre" />
        </div>
        <div className="image-row">
            <img src="images/logo-ccrp.jpg" alt="Colouring Perth collaborating organisations" />
            <img src="images/logo-turing.png" alt="Colouring Perth collaborating organisations" />
            <img src="images/logo-ucl.png" alt="Colouring Perth collaborating organisations" />
            <img src="images/logo-uq.png" alt="Colouring Perth collaborating organisations" />
            <img src="images/logo-curtin.jpg" alt="Colouring Perth collaborating organisations" />
            <img src="images/logo-swinburne.png" alt="Colouring Perth collaborating organisations" />
            <img src="images/logo-unisa.png" alt="Colouring Perth collaborating organisations" />
        </div>
    </div>
);

export default Welcome;
