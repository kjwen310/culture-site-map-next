import React from 'react'
import { StyledSiteInfo } from './styles/SiteInfo.styles'
import { MdCloseFullscreen } from "react-icons/md"
import { SiteInfoProps } from '../types'

const SiteInfo: React.FC<SiteInfoProps> = ({
  site,
  setShouldShowSiteInfo,
  markerRefs,
}) => {

  function handleClose(caseId: string) {
    setShouldShowSiteInfo(false)
    const currentMarker = markerRefs.current[caseId]
    currentMarker.closePopup()
  }

  function formatDate(dateStr: String) {
    return dateStr.split(' ')[0];
  }

  return (
    <>
      {
        site && (
          <StyledSiteInfo>
            <div className="close-icon" onClick={() => handleClose(site.caseId)}>
              <MdCloseFullscreen />
            </div>
            <h2>{site.caseName}</h2>
            <ul>
              <li>分級：{site.assetsClassifyName}</li>
              <li>地點：{site.addresses[0].cityName}</li>
              <li>種類：{site.assetsTypes[0].name}</li>
              <li>公告日期：{formatDate(site.announcementList[0].registerDate)}</li>
            </ul>
            <div className="content">
              <p>{site.pastHistory}</p>
              <p>{site.buildingFeatures}</p>
            </div>
          </StyledSiteInfo>
        )
      }
    </>
  )
}

export default SiteInfo
