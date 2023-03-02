import React, { Fragment } from 'react';

import { dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';
import SelectDataEntry from '../data-components/select-data-entry';
import Verification from '../data-components/verification';
import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';

const EnergyCategoryOptions = ["A", "B", "C", "D", "E", "F", "G"];
const BreeamRatingOptions = [
    'Outstanding',
    'Excellent',
    'Very good',
    'Good',
    'Pass',
    'Unclassified'
];
/**
* Sustainability view/edit section
*/
const SustainabilityView: React.FunctionComponent<CategoryViewProps> = (props) => {
    return (
        <Fragment>
            <NumericDataEntry
                title={dataFields.ext_nabers_energy_rating.title}
                slug="ext_nabers_energy_rating"
                value={props.building.ext_nabers_energy_rating}
                tooltip={dataFields.ext_nabers_energy_rating.tooltip}
                min={0}
                max={5}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <NumericDataEntry
                title={dataFields.ext_nabers_water_rating.title}
                slug="ext_nabers_water_rating"
                value={props.building.ext_nabers_water_rating}
                tooltip={dataFields.ext_nabers_water_rating.tooltip}
                min={0}
                max={5}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <NumericDataEntry
                title={dataFields.ext_nabers_indoor_rating.title}
                slug="ext_nabers_indoor_rating"
                value={props.building.ext_nabers_indoor_rating}
                tooltip={dataFields.ext_nabers_indoor_rating.tooltip}
                min={0}
                max={5}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <NumericDataEntry
                title={dataFields.ext_nabers_waste_rating.title}
                slug="ext_nabers_waste_rating"
                value={props.building.ext_nabers_waste_rating}
                tooltip={dataFields.ext_nabers_waste_rating.tooltip}
                min={0}
                max={5}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <NumericDataEntry
                title={dataFields.ext_electricity.title}
                slug="ext_electricity"
                value={props.building.ext_electricity}
                tooltip={dataFields.ext_electricity.tooltip}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <NumericDataEntry
                title={dataFields.ext_water.title}
                slug="ext_water"
                value={props.building.ext_water}
                tooltip={dataFields.ext_water.tooltip}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
        </Fragment>
    );
    };
const SustainabilityContainer = withCopyEdit(SustainabilityView);

export default SustainabilityContainer;
