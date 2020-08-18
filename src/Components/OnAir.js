import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기
import { withNavermaps } from 'react-naver-maps/hocs'

import MapRenderer from './MapRenderer'

class OnAir extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {

        const EnhancedApp = withNavermaps(MapRenderer);

        return (
            <RenderAfterNavermapsLoaded
            ncpClientId={'iqo6f9m3th'} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}>
                <EnhancedApp/>
            </RenderAfterNavermapsLoaded>
        )
    }
  }

  export default OnAir;
  