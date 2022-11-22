-- NABERS energy ratings

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_nabers_energy_rating real;

-- Walkability data

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_predominant_land_use text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_designated_land_use text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_avg_bld_density real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_avg_bld_distance real;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_ownership text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_building_structure text;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_age_year_demolition smallint;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_age_year_renovation smallint;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_heritage_zoning text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_aboriginal_land_ownership text;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_historical_notes varchar;
ALTER TABLE buildings ADD CONSTRAINT ext_historical_notes_len CHECK (length(date_source_detail) < 2000);

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_footprintsize real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_plotsize real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_far_ratio real;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_building_quality text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_gardens boolean;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_greenwalls boolean;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_pool boolean;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_solarpanels real;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_walk_index real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_walk_employment real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_walk_education real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_walk_shopping real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_walk_errands real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_walk_recreation real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_greenspace_proximity real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_num_trees_within_100 real;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_electricity real;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_water real;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_num_demolished real;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_local_significance text;
