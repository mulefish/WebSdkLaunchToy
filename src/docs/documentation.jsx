import React from 'react';
// import step1_waffle from './step1_waffle.png';
import step1_waffle from './step1_wafle.png';
import step2_data_collection from './step2_data_collection.png';
import step3_hamburger from './step3_hamburger.png';
import step4_schemas from './step4_schemas.png';
import step5_create_schema from './step5_create_schema.png'

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

                <li>
                step4_schemas<br />
                    <img src={step4_schemas} width="200" alt="step4_schemas" />

                </li>
                <li>
                step5_create_schema<br />
                    <img src={step5_create_schema} width="200" alt="step5_create_schema" />

                </li>

            </ul>


        </>
    );
}
export default Documentation;