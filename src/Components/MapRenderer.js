import React from 'react';
import { NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

class MapRenderer extends React.Component {
    constructor(props) {
      super(props);

      const navermaps = window.naver.maps;
  
      this.state = {
        zoomControl: true, //줌 컨트롤의 표시 여부
        zoomControlOptions: { //줌 컨트롤의 옵션
            position: navermaps.Position.TOP_RIGHT
        },

        // min max zoom
        minZoom: 15,
        maxZoom: 20,

        // interaction
        draggable: true,
        pinchZoom: true,
        scrollWheel: true,
        keyboardShortcuts: true,
        disableDoubleTapZoom: false,
        disableDoubleClickZoom: false,
        disableTwoFingerTapZoom: false,

        center: {
          lat: 35.8612078,
          lng: 127.0800198,
        }
      }
  
      this.panToVia = this.panToVia.bind(this);
    }
  
    panToVia() {
      this.setState({ center: { lat: 35.8612078, lng: 127.0800198 }})
    }
  
    render() {

        const navermaps = window.naver.maps;

        return (
            <div>
                {/*
                <button onClick={this.panToVia}>Pan To Via</button>
                <p>lat: {this.state.center.y || this.state.center.lat}</p>
                <p>lng: {this.state.center.x || this.state.center.lng}</p>
                */}
                <NaverMap 
                    id="react-naver-maps-introduction"
                    style={{width: '100%', height: '600px'}}

                    defaultZoom={17}
        
                    center={this.state.center}
                    onCenterChanged={center => this.setState({ center })}
                >
                    <Marker
                        key={1}
                        position={new navermaps.LatLng(35.8612078, 127.0800198)}
                        animation={2}
                        onClick={() => {alert('Here we are.');}}
                    />
                </NaverMap>
            </div>
        )
    }
  }

  export default MapRenderer;
  