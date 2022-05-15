import ReactLoading from 'react-loading';
import { LoadingContainer } from './styles/Loading.styles'

const Loading = ({
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
  return (
    <LoadingContainer>
      <div className="wrapper">
        <ReactLoading
          type={'spinningBubbles'}
          color={'#F2A074'}
          height={'100%'}
          width={'100%'}
          className="loading"
        />
      </div>
    </LoadingContainer>
  )
}

export default Loading