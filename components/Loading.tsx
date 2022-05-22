import ReactLoading from 'react-loading'
import { StyledLoading } from './styles/Loading.styles'

const Loading = () => {
  return (
    <StyledLoading>
      <div className="wrapper">
        <ReactLoading
          type={'spinningBubbles'}
          color={'#F2A074'}
          height={'100%'}
          width={'100%'}
          className="loading"
        />
      </div>
    </StyledLoading>
  )
}

export default Loading