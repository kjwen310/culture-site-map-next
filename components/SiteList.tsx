import { StyledSiteList } from './styles/SiteList.styles'
import icons from '../utils/icons'

const SiteList = ({
  markerRefs,
  mapRef,
  prevMarker,
  setPrevMarker,
  prevIcon,
  setPrevIcon,
  areaCulSites,
  setSite,
  setShouldShowSiteInfo,
}) => {

  function handleSetView(item) {
    const currentMarker = markerRefs.current[item.caseId]

    setSite(item)
    if (prevMarker) prevMarker.setIcon(prevIcon)
    if (currentMarker.getIcon() === icons.red) {
      setPrevMarker(null)
      setShouldShowSiteInfo(false)
    } else {
      setPrevMarker(currentMarker)
      setPrevIcon(currentMarker.getIcon())
      currentMarker.setIcon(icons.red)
      setShouldShowSiteInfo(true)
      const zoomLevel = 18
      const correction = 0.0006
      mapRef.current.setView([item.latitude + correction, item.longitude], zoomLevel, {
        duration: 0.5
      })
    }

    currentMarker.openPopup()
  }

  return (
    areaCulSites && areaCulSites.length && <StyledSiteList>
      {
        areaCulSites.map((item) => {
          return (
            <li key={item.caseId} onClick={() => handleSetView(item)}>
              <h3>{item.caseName}</h3>
              <p>分級：{item.assetsClassifyName}</p>
              <p>種類：{item.assetsTypes[0].name}</p>
              <p>
                位址：<a href={`https://www.google.com.tw/maps/place/${item.belongAddress}`}
                      target="_blank" rel="noreferrer noopener" title="Google Map">
                      {item.belongAddress}</a>
              </p>
            </li>
          )
        })
      }
    </StyledSiteList>
  )
}

export default SiteList
