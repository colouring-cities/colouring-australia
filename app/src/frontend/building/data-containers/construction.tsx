import React, { Fragment } from 'react';

import { dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import SelectDataEntry from '../data-components/select-data-entry';
import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';

const ConstructionMaterialsOptions = [
    'Wood',
    'Stone',
    'Brick',
    'Steel',
    'Reinforced Concrete',
    'Other Metal',
    'Other Natural Material',
    'Other Man-Made Material'
];

const RoofCoveringOptions = [
    'Slate',
    'Clay Tile',
    'Wood',
    'Asphalt',
    'Iron or Steel',
    'Other Metal',
    'Other Natural Material',
    'Other Man-Made Material'
];

/**
* Construction view/edit section
*/
const ConstructionView: React.FunctionComponent<CategoryViewProps> = (props) => {
    return (
         <Fragment>
            <DataEntry
                title={dataFields.ext_building_quality.title}
                tooltip={dataFields.ext_building_quality.tooltip}
                slug="ext_building_quality"
                value={props.building.ext_building_quality}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <DataEntry
                title={dataFields.ext_gardens.title}
                tooltip={dataFields.ext_gardens.tooltip}
                slug="ext_gardens"
                value={props.building.ext_gardens}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <DataEntry
                title={dataFields.ext_greenwalls.title}
                tooltip={dataFields.ext_greenwalls.tooltip}
                slug="ext_greenwalls"
                value={props.building.ext_greenwalls}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
             <SelectDataEntry
                title={dataFields.construction_core_material.title}
                slug="construction_core_material"
                value={props.building.construction_core_material}
                tooltip={dataFields.construction_core_material.tooltip}
                options={ConstructionMaterialsOptions}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <DataEntry
                title={dataFields.ext_solarpanels.title}
                tooltip={dataFields.ext_solarpanels.tooltip}
                slug="ext_solarpanels"
                value={props.building.ext_solarpanels}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
            <DataEntry
                title={dataFields.ext_pool.title}
                tooltip={dataFields.ext_pool.tooltip}
                slug="ext_pool"
                value={props.building.ext_pool}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            />
        </Fragment>
    );
};

const ConstructionContainer = withCopyEdit(ConstructionView);

export default ConstructionContainer;
