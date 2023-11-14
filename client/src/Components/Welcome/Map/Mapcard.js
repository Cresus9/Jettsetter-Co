import React from 'react';

import Map from 'devextreme-react/map';
import Button from 'devextreme-react/button';
import CheckBox from 'devextreme-react/check-box';
import './Mapcard.css'

import { markersData } from './Data.js';

const markerUrl = 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/maps/map-marker.png';

const apiKey = {
  bing: 'AsbvoF8OowV27oLJoByhNl2X67VZUncMROQxrUYwnoYtXie8YofnPf-whOofDWto',
};

export default function Mapcard() {
  const [currentMarkersData, setCurrentMarkersData] = React.useState(markersData);
  const [currentMarkerUrl, setCurrentMarkerUrl] = React.useState(markerUrl);

  const onCustomMarkersChange = React.useCallback((value) => {
    setCurrentMarkerUrl(value ? currentMarkerUrl : null);
    setCurrentMarkersData(markersData);
  }, [setCurrentMarkerUrl, setCurrentMarkersData]);

  const showTooltips = React.useCallback(() => {
    setCurrentMarkersData(currentMarkersData.map((item) => {
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.tooltip.isShown = true;
      return newItem;
    }));
  }, [setCurrentMarkersData]);

  const divStyle = {
    backgroundColor: '#eaeaea', // Light grey background
    padding: '20px',            // Padding inside the div
    borderRadius: '5px',        // Rounded corners
    textAlign: 'center',        // Center align the text
    margin: '10px'              // Margin around the div
  };

  const h3Style = {
    color: '#333',              // Dark grey text color
    fontFamily: 'Arial, sans-serif' // Font family
  };

  return (
    <React.Fragment>
        <div style={divStyle}>
      <h3 style={h3Style}>Destinations</h3>
    </div>
      <Map
        defaultZoom={11}
        height={440}
        width="100%"
        controls={true}
        markerIconSrc={currentMarkerUrl}
        markers={currentMarkersData}
        provider="bing"
        apiKey={apiKey}
      >
      </Map>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox
            defaultValue={true}
            text="Use custom marker icons"
            onValueChange={onCustomMarkersChange}
          />
        </div>
        <div className="option">
          <Button
            text="Show all tooltips"
            onClick={showTooltips}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
