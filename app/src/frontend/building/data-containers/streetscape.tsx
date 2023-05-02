import React, { Fragment } from 'react';
import InfoBox from '../../components/info-box';
import { dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';

import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';

/**
* Streetscape view/edit section
*/
const StreetscapeView: React.FunctionComponent<CategoryViewProps> = (props) => (
    <Fragment>
        <InfoBox>
            For more information on the Walkability Index please see the project github <a href="https://github.com/JosephineRoper/THERE">here</a>.
        </InfoBox>
        <NumericDataEntry
            title={dataFields.ext_walk_index.title}
            slug="ext_walk_index"
            value={props.building.ext_walk_index}
            tooltip={dataFields.ext_walk_index.tooltip}
            min={0}
            max={100}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
        <NumericDataEntry
            title={dataFields.ext_walk_employment.title}
            slug="ext_walk_employment"
            value={props.building.ext_walk_employment}
            tooltip={dataFields.ext_walk_employment.tooltip}
            min={0}
            max={100}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
        <NumericDataEntry
            title={dataFields.ext_walk_education.title}
            slug="ext_walk_education"
            value={props.building.ext_walk_education}
            tooltip={dataFields.ext_walk_education.tooltip}
            min={0}
            max={100}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
        <NumericDataEntry
            title={dataFields.ext_walk_shopping.title}
            slug="ext_walk_shopping"
            value={props.building.ext_walk_shopping}
            tooltip={dataFields.ext_walk_shopping.tooltip}
            min={0}
            max={100}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
        <NumericDataEntry
            title={dataFields.ext_walk_errands.title}
            slug="ext_walk_errands"
            value={props.building.ext_walk_errands}
            tooltip={dataFields.ext_walk_errands.tooltip}
            min={0}
            max={100}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
        <NumericDataEntry
            title={dataFields.ext_walk_recreation.title}
            slug="ext_walk_recreation"
            value={props.building.ext_walk_recreation}
            tooltip={dataFields.ext_walk_recreation.tooltip}
            min={0}
            max={100}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
        <NumericDataEntry
            title={dataFields.ext_num_trees_within_100.title}
            slug="ext_num_trees_within_100"
            value={props.building.ext_num_trees_within_100}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
        <NumericDataEntry
            title={dataFields.ext_greenspace_proximity.title}
            slug="ext_greenspace_proximity"
            value={props.building.ext_greenspace_proximity}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
    </Fragment>
);
const StreetscapeContainer = withCopyEdit(StreetscapeView);

export default StreetscapeContainer;
