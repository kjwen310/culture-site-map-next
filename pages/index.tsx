import React, { useState,useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import dynamic from "next/dynamic"
import Head from 'next/head'

import axios from 'axios'
import addInfo from '../assets/addInfo.json'
import posCorrection from '../assets/posCorrection.json'
import { cities, noDataList, metaInfo } from '../constants'

import Loading from '../components/Loading'
const SelectBox = dynamic(() => import('../components/SelectBox'), { ssr: false })
const InfoBox = dynamic(() => import("../components/InfoBox"), { ssr: false})
const Map = dynamic(() => import("../components/Map"), { ssr:false })

import { ResetStyle, GlobalStyle } from '../components/styles/Global.styles'
import { StyledIndexPage } from '../components/styles/IndexPage.styles'

import { Site, Cities } from '../types'

const Home: NextPage = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [cityCulSites, setCityCulSites] = useState([null])
  const [areaCulSites, setAreaCulSites] = useState([null])
  const [site, setSite] = useState<Site | null>(null)
  const [prevMarker, setPrevMarker] = useState(null)
  const [prevIcon, setPrevIcon] = useState(null)
  const [initData, setInitData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [shouldShowSiteInfo, setShouldShowSiteInfo] = useState(false)

  const mapRef = useRef<HTMLDivElement | null>(null)
  const markerRefs = useRef({})

  useEffect(() => {
    setIsLoading(true)
    axios.get('api/data')
      .then((data) => {
        const formatedData = format(data.data)
        const filteredData = init(formatedData)
        addCitiesData(filteredData, cities)
        setInitData(filteredData)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <Loading />
  if (!initData) return <p>No profile data</p>

  function format(data: any[]): Site[] {
    return data.map((item) => {
      const {
        caseId,
        caseName,
        registerDate,
        pastHistory,
        buildingFeatures,
        addresses,
        assetsClassifyName,
        representImage,
        latitude,
        longitude,
        assetsTypes,
      } = item || {}

      return {
        caseId,
        caseName,
        registerDate,
        pastHistory,
        buildingFeatures,
        addresses,
        assetsClassifyName,
        representImage,
        latitude,
        longitude,
        assetsTypes,
      }
    })
  }

  function init(data: Site[]) {
    const filteredData = data.filter(
      (item) => !noDataList.includes(item.caseId) && item.latitude && item.longitude
    )

    filteredData.forEach((item) => {
      posCorrection.forEach((pos) => {
        if (item.caseId === pos.id) {
          item.latitude = pos.lat;
          item.longitude = pos.lng;
        }
      })
      addInfo.forEach((add) => {
        if (item.caseId === add.id) {
          item.latitude = add.lat;
          item.longitude = add.lng;
          item.pastHistory = add.pastHistory;
          item.buildingFeatures = add.buildingFeatures;
        }
      })
    })

    return filteredData
  }

  function addCitiesData(filteredData: Site[], cities: Cities) {
    filteredData.forEach((item) => {
      const targetCity = item.addresses[0].cityName || ''
      if (cities && cities[targetCity]) {
        if (item.assetsClassifyName === '國定古蹟') cities[targetCity].nationalNum += 1
        cities[targetCity].items?.push(item)
      }
    })
  }

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Head>
        <title>{metaInfo.title}</title>
        <meta name="description" content={metaInfo.desc} />
        <meta property="og:title" content={metaInfo.title} />
        <meta property="og:description" content={metaInfo.desc} />
        <meta property="og:image" content={metaInfo.image} />
        <meta property="og:site_name" content={metaInfo.title} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      </Head>
      <StyledIndexPage>
        <SelectBox
          mapRef={mapRef}
          cities={cities}
          selectedCity={selectedCity}
          selectedArea={selectedArea}
          cityCulSites={cityCulSites}
          areaCulSites={areaCulSites}
          dataLen={initData.length}
          setCityCulSites={setCityCulSites}
          setAreaCulSites={setAreaCulSites}
          setSelectedCity={setSelectedCity}
          setSelectedArea={setSelectedArea}
        />
        <InfoBox
          mapRef={mapRef}
          markerRefs={markerRefs}
          cities={cities}
          selectedCity={selectedCity}
          selectedArea={selectedArea}
          site={site}
          cityCulSites={cityCulSites}
          areaCulSites={areaCulSites}
          prevMarker={prevMarker}
          prevIcon={prevIcon}
          shouldShowSiteInfo={shouldShowSiteInfo}
          setPrevMarker={setPrevMarker}
          setPrevIcon={setPrevIcon}
          setShouldShowSiteInfo={setShouldShowSiteInfo}
          setSite={setSite}
        />
        <Map
          mapRef={mapRef}
          markerRefs={markerRefs}
          prevMarker={prevMarker}
          prevIcon={prevIcon}
          data={initData}
          setShouldShowSiteInfo={setShouldShowSiteInfo}
          setSite={setSite}
          setPrevMarker={setPrevMarker}
          setPrevIcon={setPrevIcon}
        />
      </StyledIndexPage>
    </>
  )
}

export default Home

