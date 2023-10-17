import React, { useEffect } from 'react'

import PieChart from './PieChart'
import BarChart from './BarChart'
import SiteList from './SiteList'
import SiteInfo from './SiteInfo'
import SiteListNoResult from './SiteListNoResult'
import { StyledInfoBox } from './styles/InfoBox.styles'
import { InfoBoxProps } from '../types'

const Info: React.FC<InfoBoxProps> = ({
  mapRef,
  markerRefs,
  prevMarker,
  setPrevMarker,
  prevIcon,
  setPrevIcon,
  shouldShowSiteInfo,
  setShouldShowSiteInfo,
  site,
  setSite,
  cities,
  cityCulSites,
  areaCulSites,
  selectedCity,
  selectedArea,
}) => {
  useEffect(() => {
    setShouldShowSiteInfo(false)
  }, [selectedArea, setShouldShowSiteInfo])

  return (
    <StyledInfoBox>
      {shouldShowSiteInfo ? (
        <SiteInfo site={site} setShouldShowSiteInfo={setShouldShowSiteInfo} markerRefs={markerRefs} />
      ) : (
        <>
          {selectedCity && selectedArea && areaCulSites.length
            ? <SiteList
                mapRef={mapRef}
                markerRefs={markerRefs}
                areaCulSites={areaCulSites}
                setShouldShowSiteInfo={setShouldShowSiteInfo}
                setSite={setSite}
                prevMarker={prevMarker}
                setPrevMarker={setPrevMarker}
                prevIcon={prevIcon}
                setPrevIcon={setPrevIcon}
              />
            : null
          }
          {selectedCity && !selectedArea && cityCulSites.length
            ? <PieChart cityCulSites={cityCulSites} />
            : null
          }
          {!selectedCity && !selectedArea && <BarChart cities={cities} />}
          {(selectedCity && !cityCulSites.length || selectedArea && !areaCulSites.length ) &&
            <SiteListNoResult />
          }
        </>
      )}
    </StyledInfoBox>
  )
}

export default Info
