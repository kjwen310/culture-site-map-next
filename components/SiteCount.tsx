import React from 'react'
import { StyledSiteCount } from './styles/SiteCount.styles'
import { SiteCountProps } from '../types'

const SiteCount: React.FC<SiteCountProps> = ({
  dataLen,
  areaCulSiteLen,
  cityCulSiteLen,
  selectedCity,
  selectedArea,
}) => {

  return (
    <StyledSiteCount>
      <p>
        <span></span>
        {selectedCity ? <span>{selectedCity}</span> : <span>ćšć</span>}
        {selectedArea && <span className="area">{selectedArea}</span>}
        <span className="amount">ć±</span>
        {selectedCity && !selectedArea && <span className="count">{cityCulSiteLen}</span>}
        {selectedCity && selectedArea && <span className="count">{areaCulSiteLen}</span>}
        {!selectedCity && !selectedArea && <span className="count">{dataLen}</span>}
        <span>è</span>
      </p>
    </StyledSiteCount>
  )
}

export default SiteCount
