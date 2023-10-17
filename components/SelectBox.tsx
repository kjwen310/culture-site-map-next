import React, { useEffect } from 'react'

import { AiFillCaretDown } from "react-icons/ai"
import cityName from '../assets/cityName.json'
import { SelectBoxProps, Site } from '../types'

import SiteCount from './SiteCount'
import { StyledSelectBox, StyledSelectItem } from './styles/SelectBox.styles'

const Select: React.FC<SelectBoxProps> = ({
  mapRef,
  cities,
  dataLen,
  cityCulSites,
  setCityCulSites,
  areaCulSites,
  setAreaCulSites,
  selectedCity,
  selectedArea,
  setSelectedCity,
  setSelectedArea,
}) => {
  const targetCity = cityName.find((city) => city.CityName === selectedCity)

  useEffect(() => updateSelection(), [selectedCity, selectedArea])

  useEffect(() => {
    if (selectedCity && selectedArea) setOverView(areaCulSites[0])
  }, [areaCulSites])
  useEffect(() => {
    if (selectedCity && !selectedArea) setOverView(cityCulSites[0])
  }, [cityCulSites])

  const updateSelection = () => {
    if (selectedCity) {
      setAreaCulSites([])
      setCityCulSites(cities[selectedCity].items)
      if (selectedArea) {
        const items = cityCulSites.filter((item) => item.addresses[0].distName === selectedArea)
        setAreaCulSites(items)
      }
    }
  }

  const updateSelectCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setSelectedCity(e.target.value)
    setSelectedArea('')
  }

  const updateSelectArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setSelectedArea(e.target.value)
  }

  function setOverView(item: Site | null) {
    const zoomLevel = selectedArea === '' ? 10 : 13
    const doesHaveMap = mapRef && mapRef.current
    const doesValidItem = item && item.latitude && item.longitude
    if (doesHaveMap && doesValidItem) {
      mapRef.current.flyTo([item.latitude, item.longitude], zoomLevel)
    }
  }

  return (
    <StyledSelectBox>
      <div className="wrapper">
        <StyledSelectItem className="city">
          <label htmlFor="cityName">縣市</label>
          <div className="select-wrapper">
            <select id="cityName" value={selectedCity} onChange={updateSelectCity}>
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
        </StyledSelectItem>
        <StyledSelectItem className="area">
          <label htmlFor="area">鄉鎮市區</label>
          <div className="select-wrapper">
            <select id="area" value={selectedArea} onChange={updateSelectArea}>
              <option value="">-- 全部區域 --</option>
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
        </StyledSelectItem>
      </div>
      <SiteCount
        dataLen={dataLen}
        areaCulSiteLen={areaCulSites.length}
        cityCulSiteLen={cityCulSites.length}
        selectedCity={selectedCity}
        selectedArea={selectedArea}
      />
    </StyledSelectBox>
  )
}

export default Select
