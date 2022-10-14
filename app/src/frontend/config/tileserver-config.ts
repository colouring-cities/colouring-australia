/**
 * This file defines all the valid tileset names that can be obtained from the tilserver.
 * Adjust the values here if modifying the list of styles in the tileserver.
 */

export type BuildingMapTileset = 'date_year' | 
    'size_height' |
    'size_storeys' |
    'size_footprint' |
    'size_plot' |
    'construction_core_material' |
    'ext_solarpanels' |
    'ext_building_quality' |
    'location' |
    'ext_walk_index' |
    'ext_num_trees_within_100' |
    'likes' |
    'planning_combined' |
    'ext_nabers_energy_rating' |
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
