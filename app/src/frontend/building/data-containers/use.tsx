import React, { Fragment } from 'react';

import InfoBox from '../../components/info-box';
import { dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';
import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';
import Verification from '../data-components/verification';

/**
 * Use view/edit section
 */
const UseView: React.FunctionComponent<CategoryViewProps> = (props) => (
    <Fragment>
        <DataEntry
            title={dataFields.ext_predominant_land_use.title}
            tooltip={dataFields.ext_predominant_land_use.tooltip}
            slug="ext_predominant_land_use"
            value={props.building.ext_predominant_land_use}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            confirmOnEnter={true}
            autofill={true}
            showAllOptionsOnEmpty={true}
        />
        <Verification
            slug="ext_predominant_land_use"
            allow_verify={props.user !== undefined && props.building.ext_predominant_land_use !== null && !props.edited}
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty("ext_predominant_land_use")}
            user_verified_as={props.user_verified.ext_predominant_land_use && props.user_verified.ext_predominant_land_use.join(", ")}
            verified_count={props.building.verified.ext_predominant_land_use}
            />
        <DataEntry
            title={dataFields.ext_designated_land_use.title}
            tooltip={dataFields.ext_designated_land_use.tooltip}
            slug="ext_designated_land_use"
            value={props.building.ext_designated_land_use}
            mode={props.mode}
            disabled={true}
            copy={props.copy}
            onChange={props.onChange}
        />
    </Fragment>
);
const UseContainer = withCopyEdit(UseView);

export default UseContainer;
