/**
 * This file defines all the valid tileset names that can be obtained from the tilserver.
 * Adjust the values here if modifying the list of styles in the tileserver.
 */

export type BuildingMapTileset = 'date_year' | 
    'ext_heritage_zoning' |
    'ext_aboriginal_land_ownership' |
    'size_height' |
    'size_storeys' |
    'size_footprint' |
    'size_plot' |
    'construction_core_material' |
    'ext_solarpanels' |
    'ext_building_quality' |
    'location' |
    'ext_walk_index' |
    'ext_walk_employment' |
    'ext_walk_education' |
    'ext_walk_shopping' |
    'ext_walk_errands' |
    'ext_walk_recreation' |
    'ext_num_trees_within_100' |
    'ext_greenspace_proximity' |
    'likes' |
    'planning_combined' |
    'ext_nabers_energy_rating' |
    'ext_nabers_water_rating' |
    'ext_nabers_indoor_rating' |
    'ext_nabers_waste_rating' |
    'ext_electricity' |
    'building_attachment_form' |
    'ext_designated_land_use' |
    'ext_predominant_land_use' |
    'dynamics_demolished_count' |
    'landuse' |
    'dynamics_demolished_count' |
    'team';

export type SpecialMapTileset = 'base_night' | 'base_light' | 'highlight' | 'number_labels';

export type MapTileset = BuildingMapTileset | SpecialMapTileset;
