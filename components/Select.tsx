import { SelectContainer, StyledSelect } from './styles/Select.styles'
import { AiFillCaretDown } from "react-icons/ai";
import cityName from '../assets/cityName.json';
import { useEffect } from 'react';
import SiteCount from './SiteCount';

const Select = ({
  mapRef,
  cities,
  dataLen,
  cityCulSite,
  setCityCulSite,
  culSite,
  setCulSite,
  selectedCity,
  selectedArea,
  setSelectedCity,
  setSelectedArea,
}) => {
  const targetCity = cityName.find((city) => city.CityName === selectedCity)

  useEffect(() => updateSelection(), [selectedCity, selectedArea])
  useEffect(() => {
    if (selectedCity && selectedArea) setOverView(culSite[0])
  }, [culSite])
  useEffect(() => {
    if (selectedCity && !selectedArea) setOverView(cityCulSite[0])
  }, [cityCulSite])
  

  const updateSelection = () => {
    if (selectedCity !== '') {
      setCityCulSite(cities[selectedCity].items)
      if (selectedArea) {
        const item = cityCulSite.filter((item) => item.belongCity.slice(3) === selectedArea)
        setCulSite(item)
      }
    }
  }

  function updateSelectCity(e) {
    setSelectedCity(e.target.value)
    setSelectedArea('')
  }

  function updateSelectArea(e) {
    setSelectedArea(e.target.value)
  }

  function setOverView(item) {
    const zoomLevel = selectedArea === '' ? 10 : 13
    const doesHaveMap = mapRef && mapRef.current
    const doesValidItem = item && item.latitude && item.longitude
    if (doesHaveMap && doesValidItem) {
      mapRef.current.flyTo([item.latitude, item.longitude], zoomLevel)
    }
  }

  return (
    <SelectContainer>
      <div className="wrapper">
        <StyledSelect className="city">
          <label htmlFor="cityName">縣市</label>
          <div className="select-wrapper">
            <select id="cityName" onChange={(e) => updateSelectCity(e)}>
              <option value="">-- 全國資料 --</option>
              {
                cityName.map((city) => {
                  return (
                    <option key={city.CityName} value={city.CityName}>
                      {city.CityName}
                    </option>
                  )
                })
              }
            </select>
            <span className="icon">
              <AiFillCaretDown />
            </span>
          </div>
        </StyledSelect>
        <StyledSelect className="area">
          <label htmlFor="area">鄉鎮市區</label>
          <div className="select-wrapper">
            <select id="area" onChange={(e) => updateSelectArea(e)}>
              <option value="" disabled={selectedCity === ''}>-- 全部區域 --</option>
              {
                targetCity?.AreaList.map((area) => {
                  return (
                    <option key={area.AreaName} value={area.AreaName}>
                      {area.AreaName}
                    </option>
                  )
                })
              }
            </select>
            <span className="icon">
              <AiFillCaretDown />
            </span>
          </div>
        </StyledSelect>
      </div>
      <SiteCount
        dataLen={dataLen}
        culSiteLen={culSite.length}
        cityCulSiteLen={cityCulSite.length}
        selectedCity={selectedCity}
        selectedArea={selectedArea}
      />
    </SelectContainer>
  )
}

export default Select