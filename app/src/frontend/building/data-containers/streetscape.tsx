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
            title={dataFields.ext_num_trees_within_100.title}
            slug="ext_num_trees_within_100"
            value={props.building.ext_num_trees_within_100}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
        />
    </Fragment>
);
const StreetscapeContainer = withCopyEdit(StreetscapeView);

export default StreetscapeContainer;
