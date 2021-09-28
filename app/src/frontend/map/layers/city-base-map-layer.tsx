import * as React from 'react';
import { TileLayer } from 'react-leaflet';

import { MapTheme } from '../../config/map-config';

const OS_API_KEY = 'UVWEspgInusDKKYANE5bmyddoEmCSD4r';

/**
 * Base raster layer for the map.
 * @param theme map theme
 */
export function CityBaseMapLayer({theme}: {theme: MapTheme}) {

    /**
     * Ordnance Survey maps - UK / London specific
     * (replace with appropriate base map for other cities/countries)
     */
    const apiKey = OS_API_KEY;
    const layer = theme === 'light' ? 'Light_3857' : 'Night 3857';
    
    //const baseUrl = `https://api.os.uk/maps/raster/v1/zxy/${layer}/{z}/{x}/{y}.png?key=${apiKey}`;
    //const baseUrl = `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
    const baseUrl = `https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png`;
    //const attribution = 'Building attribute data is © Colouring London contributors. Maps contain OS data © Crown copyright: OS Maps baselayers and building outlines. <a href=/ordnance-survey-licence.html>OS licence</a>';
    const attribution = '';
    
    return <TileLayer
        key={theme} /* needed because TileLayer.key is not mutabe in react-leaflet v3 */
        url={baseUrl}
        attribution={attribution}
        maxNativeZoom={18}
        maxZoom={19}
        detectRetina={true}
    />;
}

