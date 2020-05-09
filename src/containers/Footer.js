import React from 'react';

import themoviedb from '../../img/themoviedb.svg'

const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-rows">Legal</div>
            <div id="footer-content">
                <div id="legal">
                    <p>
                        We do not claim ownership of any of the images or data in the API. We comply with the Digital Millennium Copyright Act (DMCA).
                        The API data is from <a target="_blank" rel="noopener noreferrer" href="https://www.themoviedb.org"><img src={themoviedb} alt="themoviedb" width="100px"/></a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;