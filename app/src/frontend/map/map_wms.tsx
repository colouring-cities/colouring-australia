import { GeoJsonObject } from 'geojson';
import React, { Component, Fragment } from 'react';
import { AttributionControl, GeoJSON, Map, TileLayer, ZoomControl } from 'react-leaflet-universal';

import 'leaflet/dist/leaflet.css';
import './map.css';

import { apiGet } from '../apiHelpers';
import { HelpIcon } from '../components/icons';

import Legend from './legend';
import SearchBox from './search-box';
import ThemeSwitcher from './theme-switcher';
import { categoryMapsConfig } from '../config/category-maps-config';
import { Category } from '../config/categories-config';
import { Building } from '../models/building';
import L, {CRS, tileLayer} from "leaflet";
import wms = tileLayer.wms;
import {WMSTileLayer} from "react-leaflet";


const OS_API_KEY = 'NVUxtY5r8eA6eIfwrPTAGKrAAsoeI9E9';

interface ColouringMapProps {
    selectedBuildingId: number;
    mode: 'basic' | 'view' | 'edit' | 'multi-edit';
    category: Category;
    revisionId: string;
    onBuildingAction: (building: Building) => void;
}

interface ColouringMapState {
    theme: 'light' | 'night';
    lat: number;
    lng: number;
    zoom: number;
    boundary: GeoJsonObject;
}
/**
 * Map area
 */

class ColouringMap extends Component<ColouringMapProps, ColouringMapState> {
    constructor(props) {
        super(props);
        /*this.state = {
            theme: 'night',
            lat: 51.5245255,
            lng: -0.1338422,
            zoom: 16,
            boundary: undefined,
        };*/
        this.state = {
            theme: 'night',
            lat: -33.91715,
            lng: 151.23351,
            zoom: 16,
            boundary: undefined,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleLocate = this.handleLocate.bind(this);
        this.themeSwitch = this.themeSwitch.bind(this);
    }

    handleLocate(lat, lng, zoom){
        this.setState({
            lat: lat,
            lng: lng,
            zoom: zoom
        });
    }

    handleClick(e) {
        const { lat, lng } = e.latlng;
        apiGet(`/api/buildings/locate?lat=${lat}&lng=${lng}`)
            .then(data => {
                const building = data?.[0];
                this.props.onBuildingAction(building);
            }).catch(err => console.error(err));
    }

    themeSwitch(e) {
        e.preventDefault();
        const newTheme = (this.state.theme === 'light')? 'night' : 'light';
        this.setState({theme: newTheme});
    }

    async getBoundary() {
        const data = await apiGet('/geometries/boundary-detailed.geojson') as GeoJsonObject;
        //const data = await apiGet('/geometries/Australia.geojson') as GeoJsonObject;
        this.setState({
            boundary: data
        });
    }

    componentDidMount() {
        this.getBoundary();
        //console.log(window);
        //L = window.L;
    }

    render() {
        const categoryMapDefinition = categoryMapsConfig[this.props.category];

        const position: [number, number] = [this.state.lat, this.state.lng];

        // baselayer
        const key = OS_API_KEY;
        const tilematrixSet = 'EPSG:3857';
        const layer = (this.state.theme === 'light')? 'Light 3857' : 'Night 3857';
        //const baseUrl = `https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/${tilematrixSet}/${layer}/{z}/{x}/{y}.png?key=${key}`;
        const baseUrl = `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
        const attribution = 'Building attribute data is © Colouring Sydney contributors. Maps contain OS data © Crown copyright: OS Maps baselayers and building outlines. <a href=/ordnance-survey-licence.html>OS licence</a>';
       /* const baseLayer = <TileLayer
            url={baseUrl}
            attribution={attribution}
            maxNativeZoom={18}
            maxZoom={19}
        />;*/

        const baseLayer = <TileLayer
            url={baseUrl}
            attribution={attribution}
            transparent={true}

        />;

        const buildingsBaseUrl = `/tiles/base_${this.state.theme}/{z}/{x}/{y}{r}.png`;
        //const buildingBaseLayer = <TileLayer url={buildingsBaseUrl} minZoom={14} maxZoom={19}/>;
        const buildingBaseLayer = <TileLayer url={buildingsBaseUrl} minZoom={1} maxZoom={19}/>;


        const boundaryLayer = this.state.boundary &&
                <GeoJSON data={this.state.boundary} style={{color: '#bbb', fill: false}}/>;

        const tileset = categoryMapDefinition.mapStyle;
       const dataLayer = tileset != undefined &&
            <TileLayer
                key={tileset}
                url={`/tiles/${tileset}/{z}/{x}/{y}{r}.png?rev=${this.props.revisionId}`}
                minZoom={9}
                maxZoom={19}
            />;


        // const dataLayer1 = L.tileLayer.wms('http://localhost:8080/geoserver/whatif/wms', {
        //     layers: 'whatif:nsw',
        //     version: '1.1.0',
        //     transparent: true,
        //     tms: false,
        //     format : 'image/png',
        //     // tiled: true,
        //     // continuousWorld: true,
        //     crs: L.CRS.EPSG3857,
        //     attribution: 'some text'
        // });

        // highlight
        const highlightLayer = this.props.selectedBuildingId != undefined &&
            <TileLayer
                key={this.props.selectedBuildingId}
                url={`/tiles/highlight/{z}/{x}/{y}{r}.png?highlight=${this.props.selectedBuildingId}&base=${tileset}`}
                minZoom={13}
                maxZoom={19}
                zIndex={100}
            />;

        const numbersLayer = <TileLayer
            key={this.state.theme}
            url={`/tiles/number_labels/{z}/{x}/{y}{r}.png?rev=${this.props.revisionId}`}
            zIndex={200}
            minZoom={17}
            maxZoom={19}
        />


        const wmsLayerlocal = <WMSTileLayer
            key={'wms'}
            //url={'http://localhost:8080/geoserver/whatif/wms'}
            url={'http://localhost:8080/geoserver/whatif/wms'}
            layers={'whatif:color_sydney_suburb'}
            version={'1.1.0'}
            transparent={true}
            tms={false}
            format={'image/png'}
            // tiled= {true}
            // continuousWorld= {true}
            // crs= {L.CRS.EPSG3857}
            zIndex = {10}
            // attribution= {'some text'}
        />

        const wmsLayer1 = <WMSTileLayer
            key={'wms'}
            //url={'http://localhost:8080/geoserver/whatif/wms'}
            url={'https://www.ahdap.dev/geoserver/wms'}
            layers={'colouringsydney:color_sydney_suburb'}
            version={'1.1.0'}
            transparent={true}
            tms={false}
            format={'image/png'}
            // tiled= {true}
            // continuousWorld= {true}
            // crs= {L.CRS.EPSG3857}
            zIndex = {10}
            // attribution= {'some text'}
        />
        const hasSelection = this.props.selectedBuildingId != undefined;
        const isEdit = ['edit', 'multi-edit'].includes(this.props.mode);

        return (
            <div className="map-container">
                <Map
                    center={position}
                    zoom={this.state.zoom}
                    // minZoom={1}
                    // maxZoom={19}
                    // doubleClickZoom={false}
                    // zoomControl={false}
                    // attributionControl={false}
                    // onClick={this.handleClick}
                    // detectRetina={true}
                    // collapsed = {false}
                    // crs={L.CRS.EPSG3857}
                >
                    { wmsLayer1 }
                    { baseLayer }

                    {/*{ buildingBaseLayer }*/}
                    {/*{ boundaryLayer }*/}
                    {/*{ dataLayer }*/}
                    {/*{ highlightLayer }*/}
                    {/*{ numbersLayer }*/}
                    <ZoomControl position="topright" />
                    <AttributionControl prefix=""/>

                </Map>
                {
                    this.props.mode !== 'basic' &&
                    <Fragment>
                        {
                            !hasSelection &&
                            <div className="map-notice">
                                <HelpIcon /> {isEdit ? 'Click a building to edit' : 'Click a building for details'}
                            </div>
                        }
                        <Legend legendConfig={categoryMapDefinition?.legend} />
                        <ThemeSwitcher onSubmit={this.themeSwitch} currentTheme={this.state.theme} />
                        <SearchBox onLocate={this.handleLocate} />
                    </Fragment>
                }
            </div>
        );
    }
}

export default ColouringMap;
