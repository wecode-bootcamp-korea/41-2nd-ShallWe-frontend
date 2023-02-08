import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export default function Kakaomap() {
  return (
    <MapDisplay id="map">
      상영관 오시는 길 🚗 🚗 🚗 서울 강남구 테헤란로 427 위워크타워 1층
      <Map
        center={{
          lat: 37.50633653172331,
          lng: 127.05367121348014,
        }}
        style={{
          width: '500px',
          height: '450px',
        }}
        level={3}>
        <MapMarker
          position={{
            lat: 37.50633653172331,
            lng: 127.05367121348014,
          }}
          image={{
            src: '/images/location.png',
            size: {
              width: 40,
              height: 40,
            },
            options: {
              offset: { x: 27, y: 30 },
            },
          }}
        />
      </Map>
    </MapDisplay>
  );
}

const MapDisplay = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 500px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
