import React from 'react';

import withCopyEdit from '../data-container';
import UserOpinionEntry from '../data-components/user-opinion-data-entry';
import { MultiSelectDataEntry } from '../data-components/multi-select-data-entry';

import { CategoryViewProps } from './category-view-props';
import InfoBox from '../../components/info-box';
import { LogicalDataEntry } from '../data-components/logical-data-entry/logical-data-entry';
import { buildingUserFields, dataFields } from '../../config/data-fields-config';

import './community.css';
import SelectDataEntry from '../data-components/select-data-entry';
import Verification from '../data-components/verification';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';

/**
* Community view/edit section
*/
const CommunityView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const worthKeepingReasonsNonEmpty = Object.values(props.building.community_type_worth_keeping_reasons ?? {}).some(x => x);
    return <>
        <div className='community-opinion-pane'>
            <InfoBox>
                Can you share your opinion on how well the building works?
            </InfoBox>
            <UserOpinionEntry
                slug='community_like'
                title={buildingUserFields.community_like.title}

                userValue={props.building.community_like}

                onChange={props.onSaveChange}
                mode={props.mode}
                copy={props.copy}

            />
        </div>
    </>
};
const CommunityContainer = withCopyEdit(CommunityView);

export default CommunityContainer;
