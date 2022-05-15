import { SiteCountContainer } from './styles/SiteCount.styles'

const SiteCount = ({
  dataLen,
  culSiteLen,
  cityCulSiteLen,
  selectedCity,
  selectedArea,
}) => {

  return (
    <SiteCountContainer>
      <p>
        <span></span>
        {selectedCity ? <span>{selectedCity}</span> : <span>全國</span>}
        {selectedArea && <span className="area">{selectedArea}</span>}
        <span className="amount">共</span>
        {selectedCity && !selectedArea && <span className="count">{cityCulSiteLen}</span>}
        {selectedCity && selectedArea && <span className="count">{culSiteLen}</span>}
        {!selectedCity && !selectedArea && <span className="count">{dataLen}</span>}
        <span>處</span>
      </p>
    </SiteCountContainer>
  )
}

export default SiteCount