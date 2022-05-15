import { SiteListNoResult } from './styles/SiteList.styles'
import { MdSearchOff } from "react-icons/md";

const SelectedNoResult = () => {
  return (
    <SiteListNoResult>
      <MdSearchOff className="icon" />
      <p>抱歉，此區域內沒有古蹟資料</p>
    </SiteListNoResult>
  )
}

export default SelectedNoResult