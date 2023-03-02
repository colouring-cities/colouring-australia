import React, { Fragment } from 'react';
import InfoBox from '../../components/info-box';

import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';

/**
* Team view/edit section
*/
const TeamView: React.FunctionComponent<CategoryViewProps> = (props) => (
    <Fragment>
        <InfoBox msg="No attributes at present. Coming soon..." />
    </Fragment>
);
const TeamContainer = withCopyEdit(TeamView);

export default TeamContainer;
