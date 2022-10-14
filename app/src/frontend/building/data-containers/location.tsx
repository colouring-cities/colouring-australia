import React, { Fragment } from 'react';

import InfoBox from '../../components/info-box';
import { dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';
import UPRNsDataEntry from '../data-components/uprns-data-entry';
import Verification from '../data-components/verification';
import withCopyEdit from '../data-container';
import { PatternDataEntry } from '../data-components/pattern-data-entry';

import { CategoryViewProps } from './category-view-props';

const locationNumberPattern = "[1-9]\\d*[a-z]?(-([1-9]\\d*))?"; ///[1-9]\d*[a-z]?(-([1-9]\d*))?/;

const LocationView: React.FunctionComponent<CategoryViewProps> = (props) => (
    <Fragment>
        <InfoBox msg="Text-based address fields are disabled at the moment. We're looking into how best to collect this data." />
        <DataEntry
            title={dataFields.location_name.title}
            slug="location_name"
            value={props.building.location_name}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            tooltip={dataFields.location_name.tooltip}
            placeholder="Building name (if any)"
            disabled={true}
            />
        <Verification
            slug="location_name"
            allow_verify={props.user !== undefined && props.building.location_name !== null && !props.edited}
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty("location_name")}
            user_verified_as={props.user_verified.location_name}
            verified_count={props.building.verified.location_name}
            />

        <PatternDataEntry
            title={dataFields.location_number.title}
            slug="location_number"
            value={props.building.location_number}
            pattern={locationNumberPattern}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            tooltip={dataFields.location_number.tooltip}
            />
        <Verification
            slug="location_number"
            allow_verify={props.user !== undefined && props.building.location_number !== null && !props.edited}
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty("location_number")}
            user_verified_as={props.user_verified.location_number}
            verified_count={props.building.verified.location_number}
            />

        <DataEntry
            title={dataFields.location_street.title}
            slug="location_street"
            value={props.building.location_street}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            disabled={true}
            />
        <Verification
            slug="location_street"
            allow_verify={props.user !== undefined && props.building.location_street !== null && !props.edited}
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty("location_street")}
            user_verified_as={props.user_verified.location_street}
            verified_count={props.building.verified.location_street}
            />

        <DataEntry
            title={dataFields.location_line_two.title}
            slug="location_line_two"
            value={props.building.location_line_two}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            disabled={true}
            />
        <DataEntry
            title={dataFields.location_town.title}
            slug="location_town"
            value={props.building.location_town}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            disabled={true}
            />
        <DataEntry
            title={dataFields.location_postcode.title}
            slug="location_postcode"
            value={props.building.location_postcode}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            maxLength={8}
            valueTransform={x=>x.toUpperCase()}
            disabled={true}
            />
    </Fragment>
);
const LocationContainer = withCopyEdit(LocationView);

export default LocationContainer;
