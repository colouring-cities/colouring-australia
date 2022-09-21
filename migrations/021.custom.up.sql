-- NABERS energy ratings

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_nabers_energy_rating decimal;

-- Walkability data

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_predominant_land_use text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_designated_land_use text;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_ownership text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_building_structure text;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_age_year_demolition smallint;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_age_year_renovation smallint;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_heritage_zoning text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_aboriginal_land_ownership text;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_historical_notes varchar;
ALTER TABLE buildings ADD CONSTRAINT ext_historical_notes_len CHECK (length(date_source_detail) < 2000);

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_footprintsize decimal;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_plotsize decimal;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_building_quality text;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_gardens boolean;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_greenwalls boolean;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_pool boolean;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_solarpanels decimal;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_walk_index decimal;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_greenspace_proximity decimal;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_num_trees_within_100 decimal;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_electricity decimal;
ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_water decimal;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_num_demolished decimal;

ALTER TABLE buildings ADD COLUMN IF NOT EXISTS ext_local_significance text;
