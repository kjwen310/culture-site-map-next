import { SiteListContainer } from './styles/SiteList.styles'
import icons from '../assets/icons'

const SiteList = ({
  markerRefs,
  mapRef,
  prevMarker,
  setPrevMarker,
  prevIcon,
  setPrevIcon,
  culSite,
  setSite,
  setIsShow,
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
      const correction = 0.006
      mapRef.current.flyTo([item.latitude + correction, item.longitude], zoomLevel, {
        duration: 0.5
      })
    }

    currentMarker.openPopup()
  }

  return (
    culSite && culSite.length && <SiteListContainer>
      {
        culSite.map((item) => {
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
    </SiteListContainer>
  )
}

export default SiteList