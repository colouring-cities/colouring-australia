/**
 * This file defines all the valid tileset names that can be obtained from the tilserver.
 * Adjust the values here if modifying the list of styles in the tileserver.
 */

export type BuildingMapTileset = 'date_year' | 
    'size_height' |
    'construction_core_material' |
    'location' |
    'comm_walk_index' |
    'planning_combined' |
    'sust_nabers_energy_rating' |
    'building_attachment_form' |
    'landuse' |
    'dynamics_demolished_count';

export type SpecialMapTileset = 'base_light' | 'base_night' | 'highlight' | 'number_labels';

export type MapTileset = BuildingMapTileset | SpecialMapTileset;
