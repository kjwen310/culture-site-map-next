import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import MarkerClusterGroup from "./MapCluster"
import { StyledMapContainer, PopupContainer } from './styles/Map.styles'
import icons from '../assets/icons'
import Image from 'next/image'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const Map = ({
  mapRef,
  prevMarker,
  setPrevMarker,
  prevIcon,
  setPrevIcon,
  markerRefs,
  data,
  setIsShow,
  setSite,
}) => {

  function handleSetView(item) {
    const currentMarker = markerRefs.current[item.caseId]
    setSite(item)

    if (prevMarker) prevMarker.setIcon(prevIcon)
    if (currentMarker.getIcon() === icons.red) {
      setPrevMarker(null)
      setIsShow(false)
    } else {
      setPrevMarker(currentMarker)
      setPrevIcon(currentMarker.getIcon())
      currentMarker.setIcon(icons.red)
      setIsShow(true)
      const zoomLevel = 18
      const correction = 0.0006
      mapRef.current.flyTo([item.latitude + correction, item.longitude], zoomLevel, {
        duration: 0.5
      })
    }
  }

  return (
    <StyledMapContainer>
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
            data.map((item, i) => {
              const icon = item.assetsClassifyName === '國定古蹟' ? icons.green : icons.grey

              return (
                <Marker
                  key={item.caseId}
                  ref={(ref) => markerRefs.current[item.caseId] = ref}
                  icon={icon}
                  position={[
                    item.latitude ? item.latitude : '',
                    item.longitude ? item.longitude : '',
                  ]}
                  eventHandlers={{
                    click: () => handleSetView(item),
                  }}
                >
                  <Popup closeButton={true}>
                    <PopupContainer>
                      {
                        item.representImage
                        ? <Image src={item.representImage} alt={item.caseName} layout="fill" />
                        : <p>無影像資料</p>
                      }
                      <h4>{item.caseName}</h4>
                    </PopupContainer>
                  </Popup>
                </Marker>
              )
            })
          }
        </MarkerClusterGroup>
    
      </MapContainer>
    </StyledMapContainer>
  )
}

export default Map