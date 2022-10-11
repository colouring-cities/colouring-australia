import React, { Fragment } from 'react';

import { dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import { DataEntryGroup } from '../data-components/data-entry-group';
import NumericDataEntry from '../data-components/numeric-data-entry';
import SelectDataEntry from '../data-components/select-data-entry';
import Verification from '../data-components/verification';
import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';

/**
* Size view/edit section
*/
const SizeView: React.FunctionComponent<CategoryViewProps> = (props) => (
    <Fragment>
        <NumericDataEntry
            title={dataFields.ext_footprintsize.title}
            slug="ext_footprintsize"
            value={props.building.ext_footprintsize}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            />
        <NumericDataEntry
            title={dataFields.ext_plotsize.title}
            slug="ext_plotsize"
            value={props.building.ext_plotsize}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            />
            <NumericDataEntry
                title={dataFields.size_height_apex.title}
                slug="size_height_apex"
                value={props.building.size_height_apex}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                step={0.1}
                min={0}
                />
            <Verification
                slug="size_height_apex"
                allow_verify={props.user !== undefined && props.building.size_height_apex !== null}
                onVerify={props.onVerify}
                user_verified={props.user_verified.hasOwnProperty("size_height_apex")}
                user_verified_as={props.user_verified.size_height_apex}
                verified_count={props.building.verified.size_height_apex}
                />
        <NumericDataEntry
            title={dataFields.size_far_ratio.title}
            slug="size_far_ratio"
            value={props.building.size_far_ratio}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            />
            <NumericDataEntry
                title={dataFields.size_storeys_core.title}
                slug="size_storeys_core"
                value={props.building.size_storeys_core}
                mode={props.mode}
                copy={props.copy}
                tooltip={dataFields.size_storeys_core.tooltip}
                onChange={props.onChange}
                step={1}
                min={0}
                />
            <Verification
                slug="size_storeys_core"
                allow_verify={props.user !== undefined && props.building.size_storeys_core !== null}
                onVerify={props.onVerify}
                user_verified={props.user_verified.hasOwnProperty("size_storeys_core")}
                user_verified_as={props.user_verified.size_storeys_core}
                verified_count={props.building.verified.size_storeys_core}
                />

    </Fragment>
);
const SizeContainer = withCopyEdit(SizeView);

export default SizeContainer;
