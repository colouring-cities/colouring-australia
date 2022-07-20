interface MapViewport {
    position: [number, number];
    zoom: number;
}

export const initialMapViewport: MapViewport = {
  position: [-27.4705, 153.0260 ], // lat,lng
  zoom: 16,
};

export type MapTheme = 'light' | 'night';

export const mapBackgroundColor: Record<MapTheme, string> = {
    light: '#F0EEEB',
    night: '#162639'
};
