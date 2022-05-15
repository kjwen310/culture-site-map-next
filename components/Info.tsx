import { useEffect } from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart';
import SiteList from './SiteList';
import SelectedNoResult from './SelectedNoResult'
import { InfoContainer } from './styles/Info.styles';
import SiteInfo from './SiteInfo';

const Info = ({
  mapRef,
  markerRefs,
  prevMarker,
  setPrevMarker,
  prevIcon,
  setPrevIcon,
  isShow,
  setIsShow,
  site,
  setSite,
  cities,
  cityCulSite,
  culSite,
  selectedCity,
  selectedArea,
}) => {
  useEffect(() => {
    setIsShow(false)
  }, [selectedArea])

  return isShow ?
  (
    <InfoContainer>
      <SiteInfo site={site} setIsShow={setIsShow} markerRefs={markerRefs} />
    </InfoContainer>
  )
  : (
    <InfoContainer>
      {selectedCity && selectedArea && culSite.length
        ? <SiteList
            mapRef={mapRef}
            markerRefs={markerRefs}
            culSite={culSite}
            isShow={isShow}
            setIsShow={setIsShow}
            setSite={setSite}
            prevMarker={prevMarker}
            setPrevMarker={setPrevMarker}
            prevIcon={prevIcon}
            setPrevIcon={setPrevIcon}
          />
        : null
      }
      {selectedCity && !selectedArea && cityCulSite.length
        ? <PieChart cityCulSite={cityCulSite} />
        : null
      }
      {!selectedCity && !selectedArea && <BarChart cities={cities} />}
      {(selectedCity && !cityCulSite.length || selectedArea && !culSite.length ) &&
        <SelectedNoResult />
      }
    </InfoContainer>
  )
}

export default Info