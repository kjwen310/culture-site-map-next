import { StyledSiteListNoResult } from './styles/SiteListNoResult.styles'
import { MdSearchOff } from "react-icons/md"

const SelectedNoResult = () => {
  return (
    <StyledSiteListNoResult>
      <MdSearchOff className="icon" />
      <p>抱歉，此區域內沒有古蹟資料</p>
    </StyledSiteListNoResult>
  )
}

export default SelectedNoResult
