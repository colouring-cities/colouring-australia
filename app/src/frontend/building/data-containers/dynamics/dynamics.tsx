import React from 'react';
import { Link } from 'react-router-dom';
import InfoBox from '../../../components/info-box';

import { Category } from '../../../config/categories-config';
import { dataFields } from '../../../config/data-fields-config';

import DataEntry from '../../data-components/data-entry';
import { DataEntryGroup } from '../../data-components/data-entry-group';
import { DynamicsBuildingPane, DynamicsDataEntry } from './dynamics-data-entry';
import { FieldRow } from '../../data-components/field-row';
import NumericDataEntry from '../../data-components/numeric-data-entry';
import withCopyEdit from '../../data-container';

import { CategoryViewProps } from '../category-view-props';
import { LogicalDataEntry } from '../../data-components/logical-data-entry/logical-data-entry';

/**
* Dynamics view/edit section
*/
const DynamicsView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const building = props.building;
    const thisYear = (new Date()).getFullYear();
    const currentBuildingConstructionYear = building.date_year || undefined;

    const ageLinkUrl = `/${props.mode}/${Category.Age}/${props.building.building_id}`;

    return (<>
        <InfoBox>
        No attributes at present. Coming soon...
        </InfoBox>
    </>)
};

const DynamicsContainer = withCopyEdit(DynamicsView);

export default DynamicsContainer;
