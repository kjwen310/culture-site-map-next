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
        {selectedCity ? <span>{selectedCity}</span> : <span>全國</span>}
        {selectedArea && <span className="area">{selectedArea}</span>}
        <span className="amount">共</span>
        {selectedCity && !selectedArea && <span className="count">{cityCulSiteLen}</span>}
        {selectedCity && selectedArea && <span className="count">{areaCulSiteLen}</span>}
        {!selectedCity && !selectedArea && <span className="count">{dataLen}</span>}
        <span>處</span>
      </p>
    </StyledSiteCount>
  )
}

export default SiteCount
