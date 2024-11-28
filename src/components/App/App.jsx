import React, { useEffect } from 'react';
import {
  YMaps, Map, Clusterer, Placemark,
} from '@pbe/react-yandex-maps';
import api from '../../utils/Api.js';
import Header from '../Header/Header.jsx';

function App() {
  useEffect(() => {
    api.getCoordinates()
      .then((res) => console.log(res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos));
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <YMaps>
          <Map defaultState={{ center: [51.676729, 39.244346], zoom: 12 }}>
            <Clusterer
              options={{
                preset: 'islands#darkGreenClusterIcons',
                groupByCoordinates: false,
              }}
            >
              <Placemark
                key="1"
                geometry={[51.676729, 39.244346]}
                options={
                  {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#3CB371',
                  }
                }
              />
            </Clusterer>
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default App;
