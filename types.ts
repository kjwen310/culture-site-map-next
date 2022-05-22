import { Dispatch, SetStateAction } from 'react'

export interface Site {
  caseId: string,
  caseName: string,
  registerDate: string,
  pastHistory: string,
  buildingFeatures: string,
  belongCity: string,
  belongAddress: string,
  assetsClassifyName: string,
  representImage: string | undefined | null,
  latitude: number,
  longitude: number,
  assetsTypes: AssetsTypesItem[],
}

export interface Cities {
  [key: string]: CitiesItem,
}

export interface InfoBoxProps extends BasicInfoAndMapProps {
  shouldShowSiteInfo: boolean,
  site: Site,
  cities: Cities,
  cityCulSites: Site[],
  areaCulSites: Site[],
  selectedCity: string,
  selectedArea: string,
}

export interface MapProps extends BasicInfoAndMapProps {
  data: Site[],
}

export interface SiteListProps extends BasicInfoAndMapProps {
  areaCulSites: Site[],
}

export interface SelectBoxProps {
  mapRef: any,
  cities: Cities,
  dataLen: number,
  cityCulSites: Site[],
  areaCulSites: Site[],
  selectedCity: string,
  selectedArea: string,
  setSelectedCity: Dispatch<SetStateAction<string>>,
  setSelectedArea: Dispatch<SetStateAction<string>>,
  setCityCulSites: Dispatch<SetStateAction<Site[] | null>>,
  setAreaCulSites: Dispatch<SetStateAction<Site[] | null>>,
}

export interface SiteCountProps {
  dataLen: number,
  areaCulSiteLen: number,
  cityCulSiteLen: number,
  selectedCity: string,
  selectedArea: string,
}

export interface SiteInfoProps {
  markerRefs: any,
  site: Site,
  setShouldShowSiteInfo: Dispatch<SetStateAction<boolean>>,
}

export interface BarChartProps {
  cities: Cities,
}

export interface PieChartProps {
  cityCulSites: Site[],
}

interface BasicInfoAndMapProps {
  mapRef: any,
  markerRefs: any,
  prevMarker: any,
  prevIcon: any,
  setPrevMarker: Dispatch<SetStateAction<any>>,
  setPrevIcon: Dispatch<SetStateAction<any>>,
  setSite: Dispatch<SetStateAction<Site>>,
  setShouldShowSiteInfo: Dispatch<SetStateAction<boolean>>,
}

type CitiesItem = {
  nationalNum: number,
  items: Site[],
}

type AssetsTypesItem = {
  name: string
}


