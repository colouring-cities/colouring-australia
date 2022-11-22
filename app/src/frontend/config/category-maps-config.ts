import { Category } from './categories-config';
import { BuildingMapTileset } from './tileserver-config';

export type LegendElement = {
    color: string;
    border?: string;
    text: string;
} | {
    subtitle: string;
};

export interface LegendConfig {
    title: string;
    description?: string;
    disclaimer?: string;
    elements: LegendElement[];
}

export interface CategoryMapDefinition {
    mapStyle: BuildingMapTileset;
    legend: LegendConfig;
}

export const defaultMapCategory = Category.Age;

export const categoryMapsConfig: {[key in Category]: CategoryMapDefinition[]} = {
    [Category.Age]: [{
        mapStyle: 'date_year',
        legend: {
            title: 'Age',
            elements: [
                { color: '#fff9b8', text: '>2020' },
                { color: '#fae269', text: '2000-2019' },
                { color: '#fbaf27', text: '1980-1999' },
                { color: '#e6711d', text: '1960-1979' },
                { color: '#cc1212', text: '1940-1959' },
                { color: '#8f0303', text: '1920-1939' },
                { color: '#8f5385', text: '1900-1919' },
                { color: '#c3e1eb', text: '1880-1899' },
                { color: '#6a9dba', text: '1860-1879' },
                { color: '#3b74a3', text: '1840-1859' },
                { color: '#95ded8', text: '1820-1839' },
                { color: '#68aba5', text: '1800-1819' },
                { color: '#acc98f', text: '1750-1799' },
                { color: '#6d8a51', text: '1700-1749' },
                { color: '#d0c291', text: '<1700' },
            ]
        },
    },{
        mapStyle: 'ext_heritage_zoning',
        legend: {
            title: 'Heritage Zoning Status',
            elements: [
                { color: '#e5050d', text: 'In State and Local Heritage Area' },
                { color: '#252aa6', text: 'In conservation area' },
                { color: '#ff8c00', text: 'In State Heritage Area' },
            ]
        },
    }],
    [Category.Size]: [{
        mapStyle: 'size_height',
        legend: {
            title: 'Height to Apex',
            elements: [
                { color: '#f7f4f9', text: '0-5.55'},
                { color: '#e7e1ef', text: '5.55-7.73'},
                { color: '#d4b9da', text: '7.73-11.38'},
                { color: '#c994c7', text: '11.38-18.45'},
                { color: '#df65b0', text: '18.45-35.05'},
                { color: '#e7298a', text: '35.05-89.30'},
                { color: '#ce1256', text: '89.30-152'},
                { color: '#980043', text: '≥152'}
            ]
        },
    },{
        mapStyle: 'size_storeys',
        legend: {
            title: 'Number of Storeys',
            elements: [
                { color: '#ffffcc', text: '40+'},
                { color: '#fed976', text: '20-40'},
                { color: '#fd8d3c', text: '10-20'},
                { color: '#e31a1c', text: '6-10'},
                { color: '#800026', text: '1-6'}
            ]
        },
    },{
        mapStyle: 'size_plot',
        legend: {
            title: 'Size of Plot',
            elements: [
                { color: '#e7e1ef', text: '0-80'},
                { color: '#d4b9da', text: '80-150'},
                { color: '#c994c7', text: '150-300'},
                { color: '#df65b0', text: '300-1,000'},
                { color: '#e7298a', text: '1000-10,000'},
                { color: '#ce1256', text: '10,000-100,000'},
                { color: '#980043', text: '≥100,000'}
            ]
        },
    },{
        mapStyle: 'size_footprint',
        legend: {
            title: 'Size of Footprint',
            elements: [
                { color: '#e7e1ef', text: '0-80'},
                { color: '#d4b9da', text: '80-150'},
                { color: '#c994c7', text: '150-300'},
                { color: '#df65b0', text: '300-1,000'},
                { color: '#e7298a', text: '1000-10,000'},
                { color: '#ce1256', text: '10,000-100,000'},
                { color: '#980043', text: '≥100,000'}
            ]
        },
    }],
    [Category.Team]: [{
        mapStyle: 'team',
        legend: {
            title: 'Team',
            description: '% data collected',
            elements: [
                { color: '#994d00', text: '≥80%' },
                { color: '#e67300', text: '60–80%' },
                { color: '#ff9933', text: '40–60%' },
                { color: '#ffbf80', text: '20–40%' },
                { color: '#ffe6cc', text: '<20%' }
            ]
        },
    }],
    [Category.Construction]: [{
        mapStyle: 'ext_solarpanels',
        legend: {
            title: 'Solar Panels',
            elements: [
                { color: '#cc1212', text: 'Present' },
                { color: '#95ded8', text: 'Absent' },
            ]
        },
        },{
        mapStyle: 'ext_building_quality',
        legend: {
            title: 'Building Quality',
            elements: [
                { color: '#cc1212', text: 'Excellent' },
                { color: '#c05100', text: 'Very Good' },
                { color: '#b17300', text: 'Good' },
                { color: '#9f8d0b', text: 'Below Average' },
                { color: '#8fa33c', text: 'Basic' },
                { color: '#81b568', text: 'Poor' },
                { color: '#79c592', text: 'Very Poor' },
                { color: '#7fd3b9', text: 'Just Habitable' },
                { color: '#95ded8', text: 'Ruin' },
            ]
        },
    },
    /*{
        mapStyle: 'construction_core_material',
        legend: {
            title: 'Construction',
            elements: [
                { color: "#b5a859", text: "Wood" },
                { color: "#ffffe3", text: "Stone" },
                { color: "#f5d96b", text: "Brick" },
                { color: "#beffe8", text: "Steel" },
                { color: "#fca89d", text: "Reinforced Concrete" },
                { color: "#5c8970", text: "Other Metal" },
                { color: "#96613b", text: "Other Natural Material" },
                { color: "#c48a85", text: "Other Man-Made Material" }
            ]
        },
    }*/
    ],
    [Category.Location]: [{
        mapStyle: 'location',
        legend: {
            title: 'Location',
            description: '% data collected',
            elements: [
                { color: '#084081', text: '≥80%' },
                { color: '#0868ac', text: '60–80%' },
                { color: '#43a2ca', text: '40–60%' },
                { color: '#7bccc4', text: '20–40%' },
                { color: '#bae4bc', text: '<20%' }
            ]
        },
    }],
    [Category.Community]: [
        {
            mapStyle: 'likes',
            legend: {
                title: 'Like Me',
                elements: [
                    { color: '#bd0026', text: '👍👍👍👍 100+' },
                    { color: '#e31a1c', text: '👍👍👍 50–99' },
                    { color: '#fc4e2a', text: '👍👍 20–49' },
                    { color: '#fd8d3c', text: '👍👍 10–19' },
                    { color: '#feb24c', text: '👍 3–9' },
                    { color: '#fed976', text: '👍 2' },
                    { color: '#ffe8a9', text: '👍 1'}
                ]
            }
        },
        /*        {
            mapStyle: 'community_local_significance_total',
            legend: {
                title: 'Local Significance',
                description: 'People who think the building should be locally listed',
                elements: [
                    { color: '#bd0026', text: '100+' },
                    { color: '#e31a1c', text: '50–99' },
                    { color: '#fc4e2a', text: '20–49' },
                    { color: '#fd8d3c', text: '10–19' },
                    { color: '#feb24c', text: '3–9' },
                    { color: '#fed976', text: '2' },
                    { color: '#ffe8a9', text: '1'}
                ]
            }
        },
        {
            mapStyle: 'community_expected_planning_application_total',
            legend: {
                title: 'Expected planning application',
                description: 'People who think the building will be affected by a planning application in the near future',
                elements: [
                    { color: '#bd0026', text: '100+' },
                    { color: '#e31a1c', text: '50–99' },
                    { color: '#fc4e2a', text: '20–49' },
                    { color: '#fd8d3c', text: '10–19' },
                    { color: '#feb24c', text: '3–9' },
                    { color: '#fed976', text: '2' },
                    { color: '#ffe8a9', text: '1'}
                ]
            }
        },
        {
            mapStyle: 'community_in_public_ownership',
            legend: {
                title: 'Public Ownership',
                description: 'Is the building in some form of public/community ownership',
                elements: [
                    {color: '#1166ff', text: 'Yes'},
                    {color: '#ffaaa0', text: 'No'}
                ]
            }
        }
        */
    ],
    [Category.Planning]: [{
        mapStyle: 'planning_combined',
        legend: {
            title: 'Statutory protections',
            disclaimer: 'All data relating to designated buildings should be checked on the National Heritage List for England or local authority websites where used for planning or development purposes',
            elements: [
                { color: '#95beba', text: 'In conservation area'},
                { color: '#c72e08', text: 'Grade I listed'},
                { color: '#e75b42', text: 'Grade II* listed'},
                { color: '#ffbea1', text: 'Grade II listed'},
                { color: '#858ed4', text: 'Locally listed'},
            ]
        },
    }],
    [Category.Sustainability]: [{
        mapStyle: 'ext_nabers_energy_rating',
        legend: {
            title: 'NABERS',
            description: 'NABERS Energy Rating',
            elements: [
                { color: "#ff0000", text: '0 Star' },
                { color: "#e92b00", text: '1 Star' },
                { color: "#d35500", text: '2 Star' },
                { color: "#bd8000", text: '3 Star' },
                { color: "#a6aa00", text: '4 Star' },
                { color: "#90d500", text: '5 Star' },
                { color: "#7aff00", text: '6 Star' },
            ]
        },
    },{
        mapStyle: 'ext_electricity',
        legend: {
            title: 'Electricity Usage',
            elements: [
                { color: '#e7e1ef', text: '<2x10^5'},
                { color: '#d4b9da', text: '≥2x10^5'},
                { color: '#c994c7', text: '≥2x10^6'},
                { color: '#df65b0', text: '≥2x10^7'},
                { color: '#e7298a', text: '≥2x10^8'},
                { color: '#ce1256', text: '≥2x10^9'},
                { color: '#980043', text: '≥2x10^10'}
            ]
        },
    }],
    [Category.Type]: [{
        mapStyle: 'building_attachment_form',
        legend: {
            title: 'Type',
            elements: [
                { color: "#f2a2b9", text: "Detached" },
                { color: "#ab8fb0", text: "Semi-Detached" },
                { color: "#3891d1", text: "End-Terrace" },
                { color: "#226291", text: "Mid-Terrace" }
            ]
        },
    }],
    [Category.LandUse]: [{
        mapStyle: 'ext_designated_land_use',
        legend: {
            title: 'Designated Land Use',
            elements: [
                { color: '#e5050d', text: 'Mixed Use' },
                { subtitle: 'Single use:'},
                { color: '#252aa6', text: 'Residential (unverified)' },
                { color: '#7025a6', text: 'Residential (verified)' },
                { color: '#ff8c00', text: 'Retail' },
                { color: '#f5f58f', text: 'Industry & Business' },
                { color: '#73ccd1', text: 'Community Services' },
                { color: '#ffbfbf', text: 'Recreation & Leisure' },
                { color: '#b3de69', text: 'Transport' },
                { color: '#cccccc', text: 'Utilities & Infrastructure' },
                { color: '#898944', text: 'Defence' },
                { color: '#fa667d', text: 'Agriculture' },
                { color: '#53f5dd', text: 'Minerals' },
                { color: '#ffffff', text: 'Vacant & Derelict' },
                { color: '#6c6f8e', text: 'Unclassified, presumed non-residential' }
            ]
            },
    },{
        mapStyle: 'ext_predominant_land_use',
        legend: {
            title: 'Predominant Land Use',
            elements: [
                { color: '#e5050d', text: 'Mixed Use' },
                { subtitle: 'Single use:'},
                { color: '#252aa6', text: 'Residential (unverified)' },
                { color: '#7025a6', text: 'Residential (verified)' },
                { color: '#ff8c00', text: 'Retail' },
                { color: '#f5f58f', text: 'Industry & Business' },
                { color: '#73ccd1', text: 'Community Services' },
                { color: '#ffbfbf', text: 'Recreation & Leisure' },
                { color: '#b3de69', text: 'Transport' },
                { color: '#cccccc', text: 'Utilities & Infrastructure' },
                { color: '#898944', text: 'Defence' },
                { color: '#fa667d', text: 'Agriculture' },
                { color: '#53f5dd', text: 'Minerals' },
                { color: '#ffffff', text: 'Vacant & Derelict' },
                { color: '#6c6f8e', text: 'Unclassified, presumed non-residential' }
            ]
        },
    }],
    [Category.Streetscape]: [{
        mapStyle: 'ext_walk_index',
        legend: {
            title: 'Walk Index',
            elements: [
                { color: '#f0f921', text: '>95' },
                { color: '#f7e225', text: '90-95' },
                { color: '#fccb26', text: '85-90' },
                { color: '#feb72d', text: '80-85' },
                { color: '#fba338', text: '75-80' },
                { color: '#f69044', text: '70-75' },
                { color: '#f07e4f', text: '65-70' },
                { color: '#e76d5b', text: '60-65' },
                { color: '#dc5e66', text: '55-60' },
                { color: '#d14e72', text: '50-55' },
                { color: '#c53f7e', text: '45-50' },
                { color: '#b7308b', text: '40-45' },
                { color: '#a72197', text: '35-40' },
                { color: '#9612a1', text: '30-35' },
                { color: '#8305a7', text: '25-30' },
                { color: '#6f00a8', text: '20-25' },
                { color: '#5901a5', text: '15-20' },
                { color: '#44049e', text: '10-15' },
                { color: '#2c0594', text: '5-10' },
                { color: '#0d0887', text: '<5' },
            ]
            }
    },{
        mapStyle: 'ext_walk_employment',
        legend: {
            title: 'Walk Index Employment Component',
            elements: [
                { color: '#f0f921', text: '>30' },
                { color: '#f7e225', text: '27-30' },
                { color: '#feb72d', text: '24-27' },
                { color: '#f69044', text: '21-24' },
                { color: '#e76d5b', text: '18-21' },
                { color: '#d14e72', text: '15-18' },
                { color: '#b7308b', text: '12-15' },
                { color: '#9612a1', text: '9-12' },
                { color: '#6f00a8', text: '6-9' },
                { color: '#44049e', text: '3-6' },
                { color: '#0d0887', text: '<3' },
            ]
            }
    },{
        mapStyle: 'ext_walk_education',
        legend: {
            title: 'Walk Index Education Component',
            elements: [
                { color: '#f0f921', text: '>14' },
                { color: '#f7e225', text: '12-14' },
                { color: '#feb72d', text: '10-12' },
                { color: '#f69044', text: '8-10' },
                { color: '#e76d5b', text: '6-8' },
                { color: '#d14e72', text: '4-6' },
                { color: '#b7308b', text: '2-4' },
                { color: '#9612a1', text: '<2' }
            ]
            }
    },{
        mapStyle: 'ext_walk_shopping',
        legend: {
            title: 'Walk Index Shopping Component',
            elements: [
                { color: '#f0f921', text: '>20' },
                { color: '#f7e225', text: '18-20' },
                { color: '#feb72d', text: '16-18' },
                { color: '#f69044', text: '14-16' },
                { color: '#e76d5b', text: '12-14' },
                { color: '#d14e72', text: '10-12' },
                { color: '#b7308b', text: '8-10' },
                { color: '#9612a1', text: '6-8' },
                { color: '#6f00a8', text: '4-6' },
                { color: '#44049e', text: '2-4' },
                { color: '#0d0887', text: '<2' },
            ]
            }
    },{
        mapStyle: 'ext_walk_errands',
        legend: {
            title: 'Walk Index Errands Component',
            elements: [
                { color: '#feb72d', text: '>8' },
                { color: '#f69044', text: '7-8' },
                { color: '#e76d5b', text: '6-7' },
                { color: '#d14e72', text: '5-6' },
                { color: '#b7308b', text: '4-5' },
                { color: '#9612a1', text: '3-4' },
                { color: '#6f00a8', text: '2-3' },
                { color: '#44049e', text: '1-2' },
                { color: '#0d0887', text: '<1' },
            ]
            }
    },{
        mapStyle: 'ext_walk_recreation',
        legend: {
            title: 'Walk Index Recreation Component',
            elements: [
                { color: '#f0f921', text: '>21' },
                { color: '#f7e225', text: '19-21' },
                { color: '#feb72d', text: '17-19' },
                { color: '#f69044', text: '15-17' },
                { color: '#e76d5b', text: '13-15' },
                { color: '#d14e72', text: '11-13' },
                { color: '#b7308b', text: '9-11' },
                { color: '#9612a1', text: '7-9' },
                { color: '#6f00a8', text: '5-7' },
                { color: '#44049e', text: '3-5' },
                { color: '#0d0887', text: '<3' },
            ]
            }
    },{
        mapStyle: 'ext_num_trees_within_100',
        legend: {
            title: 'Number of Trees Within 100m',
            elements: [
            { color: '#95ded8', text: '>300' },
                { color: '#7fd3b9', text: '250-300' },
                { color: '#79c592', text: '200-250' },
                { color: '#81b568', text: '160-200' },
                { color: '#8fa33c', text: '120-160' },
                { color: '#9f8d0b', text: '80-120' },
                { color: '#b17300', text: '40-80' },
                { color: '#c05100', text: '20-40' },
                { color: '#cc1212', text: '0-20' },
                { color: '#dd0606', text: '0' },
            ]
        },
    },{
        mapStyle: 'ext_greenspace_proximity',
        legend: {
            title: 'Distance to nearest park',
            elements: [
                { color: '#dd0606', text: '>1000' },
                { color: '#c05100', text: '500-1000' },
                { color: '#b17300', text: '400-500' },
                { color: '#9f8d0b', text: '300-400' },
                { color: '#8fa33c', text: '200-300' },
                { color: '#81b568', text: '100-200' },
                { color: '#79c592', text: '50-100' },
                { color: '#7fd3b9', text: '0-50' },
                { color: '#95ded8', text: '0' },
            ]
        },
    }],
    [Category.Dynamics]: [{
        mapStyle: 'dynamics_demolished_count',
        legend: {
            title: 'Dynamics',
            description: 'Demolished buildings on the same site',
            elements: [
                {
                    text: '7+',
                    color: '#bd0026',
                }, {
                    text: '6',
                    color: '#e31a1c',
                }, {
                    text: '5',
                    color: '#fc4e2a',
                }, {
                    text: '4',
                    color: '#fd8d3c',
                }, {
                    text: '3',
                    color: '#feb24c',
                }, {
                    text: '2',
                    color: '#fed976',
                }, {
                    text: '1',
                    color: '#ffe8a9',
                }, {
                    text: 'None',
                    color: '#0C7BDC'
                }
            ],
        },
    }]
    
};
