/**
 * This file defines all the valid tileset names that can be obtained from the tilserver.
 * Adjust the values here if modifying the list of styles in the tileserver.
 */

export type BuildingMapTileset = 'date_year' | 
    'size_height' |
    'construction_core_material' |
    'ext_solarpanels' |
    'location' |
    'ext_walk_index' |
    'likes' |
    'planning_combined' |
    'ext_nabers_energy_rating' |
    'building_attachment_form' |
    'ext_designated_land_use' |
    'dynamics_demolished_count';

export type SpecialMapTileset = 'base_light' | 'base_night' | 'highlight' | 'number_labels';

export type MapTileset = BuildingMapTileset | SpecialMapTileset;
