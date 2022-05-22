import Image from 'next/image'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import MarkerClusterGroup from "./MapCluster"
import { StyledMap, StyledPopup } from './styles/Map.styles'
import { green, grey, red } from '../utils/icons'
import { MapProps, Site } from "../types"

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const Map: React.FC<MapProps> = ({
  mapRef,
  prevMarker,
  setPrevMarker,
  prevIcon,
  setPrevIcon,
  markerRefs,
  data,
  setShouldShowSiteInfo,
  setSite,
}) => {

  function handleSetView(item: Site) {
    const currentMarker = markerRefs.current[item.caseId]
    setSite(item)

    if (prevMarker) prevMarker.setIcon(prevIcon)
    if (currentMarker.getIcon() === red) {
      setPrevMarker(null)
      setShouldShowSiteInfo(false)
    } else {
      setPrevMarker(currentMarker)
      setPrevIcon(currentMarker.getIcon())
      currentMarker.setIcon(red)
      setShouldShowSiteInfo(true)
      const zoomLevel = 18
      const correction = 0.0006
      mapRef.current.flyTo([item.latitude + correction, item.longitude], zoomLevel, {
        duration: 0.5
      })
    }
  }

  return (
    <StyledMap>
      <MapContainer
        id="map"
        ref={mapRef}
        center={[25.03, 121.55]}
        zoom={13}
        minZoom={6}
        maxZoom={18}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <MarkerClusterGroup>
          {
            data.map((item) => {
              const icon = item.assetsClassifyName === '國定古蹟' ? green : grey

              return (
                <Marker
                  key={item.caseId}
                  ref={(ref) => markerRefs.current[item.caseId] = ref}
                  icon={icon}
                  position={[item.latitude, item.longitude]}
                  eventHandlers={{
                    click: () => handleSetView(item),
                  }}
                >
                  <Popup closeButton={true} autoPan={false}>
                    <StyledPopup>
                      {
                        item.representImage
                        ? <Image src={item.representImage} alt={item.caseName} layout="fill" />
                        : <p>無影像資料</p>
                      }
                      <h4>{item.caseName}</h4>
                    </StyledPopup>
                  </Popup>
                </Marker>
              )
            })
          }
        </MarkerClusterGroup>
    
      </MapContainer>
    </StyledMap>
  )
}

export default Map
