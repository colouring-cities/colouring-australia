import React, { Fragment } from 'react';

import { dataFields } from '../../config/data-fields-config';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';
import SelectDataEntry from '../data-components/select-data-entry';
import TextboxDataEntry from '../data-components/textbox-data-entry';
import Verification from '../data-components/verification';
import YearDataEntry from '../data-components/year-data-entry';
import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';

/**
* Age view/edit section
*/
const AgeView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const currentYear = new Date().getFullYear();

    return (
        <Fragment>
            <NumericDataEntry
                title={dataFields.date_year.title}
                slug="date_year"
                value={props.building.date_year}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                min={1}
                max={currentYear}
                // "type": "year_estimator"
                />
            <NumericDataEntry
                title={dataFields.ext_age_year_demolition.title}
                slug="ext_age_year_demolition"
                value={props.building.ext_age_year_demolition}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                min={1}
                max={currentYear}
                // "type": "year_estimator"
                />
            <NumericDataEntry
                title={dataFields.ext_age_year_renovation.title}
                slug="ext_age_year_renovation"
                value={props.building.ext_age_year_renovation}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                min={1}
                max={currentYear}
                // "type": "year_estimator"
                />
            <SelectDataEntry
                title={dataFields.ext_heritage_zoning.title}
                tooltip={dataFields.ext_heritage_zoning.tooltip}
                slug="ext_heritage_zoning"
                value={props.building.ext_heritage_zoning}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                options={dataFields.ext_heritage_zoning.items}
            />
            <SelectDataEntry
                title={dataFields.ext_aboriginal_land_ownership.title}
                tooltip={dataFields.ext_aboriginal_land_ownership.tooltip}
                slug="ext_aboriginal_land_ownership"
                value={props.building.ext_aboriginal_land_ownership}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                options={dataFields.ext_aboriginal_land_ownership.items}
            />

            <TextboxDataEntry
                title={dataFields.ext_historical_notes.title}
                slug="ext_historical_notes"
                value={props.building.ext_historical_notes}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                tooltip={dataFields.date_source_detail.tooltip}
                />
        </Fragment>
    );
};
const AgeContainer = withCopyEdit(AgeView);

export default AgeContainer;
