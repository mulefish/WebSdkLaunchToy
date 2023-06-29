import React from 'react';
// import step1_waffle from './step1_waffle.png';
import step1_waffle from './step1_wafle.png';
import step2_data_collection from './step2_data_collection.png';
import step3_hamburger from './step3_hamburger.png';

function Documentation() {

    return (
        <>
            <hr></hr>
            <ul>
                <li>   https://experience.adobe.com/#/@lululemonathleticacanadainc/home
                </li>
                <li>
                    waffle<br />
                    <img src={step1_waffle} height="100" alt="step1_waffle" />
                </li>
                <li>
                    step2_dataCollection<br />
                    <img src={step2_data_collection} height="400" alt="step2_dataCollection" />
                </li>
                <li>
                    step3_hamburger<br />
                    <img src={step3_hamburger} height="100" alt="step3_hamburger" />

                </li>



            </ul>


        </>
    );
}
export default Documentation;