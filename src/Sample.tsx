import * as React from 'react'
import styled from 'styled-components'
import Lottie from './Lottie'
import animData from './sample-anim'
import Intersection, {
  IntersectAnimation
} from 'react-intersect'

export default function() {
  const [isAnimated, setAnimated] = React.useState(false)
  const callback = React.useCallback(() => {
    if (isAnimated) {
      setAnimated(false)
    } else {
      setAnimated(true)
    }
  }, [isAnimated, setAnimated])
  return (
    <Wrapper>
      <Item>
        <Lottie src={animData} autoplay />
      </Item>
      <h6>
        <button onClick={callback}>click</button>
      </h6>
      <Item>
        <Lottie when={isAnimated} src={animData} />
      </Item>
      <h6>Intersect</h6>
      <Item>
        <IntersectFadeIn>
          {isIntersected => (
            <Lottie
              when={isIntersected}
              src={animData}
              loopStartFrame={0}
            />
          )}
        </IntersectFadeIn>
      </Item>
      <Item>
        <IntersectFadeIn>
          {isIntersected => (
            <Lottie
              when={isIntersected}
              src={animData}
              loopStartFrame={0}
            />
          )}
        </IntersectFadeIn>
      </Item>
      <Item>
        <IntersectFadeIn>
          {isIntersected => (
            <Lottie
              when={isIntersected}
              src={animData}
              loopStartFrame={0}
            />
          )}
        </IntersectFadeIn>
      </Item>
      <Item>
        <IntersectFadeIn>
          {isIntersected => (
            <Lottie
              when={isIntersected}
              src={animData}
              loopStartFrame={0}
            />
          )}
        </IntersectFadeIn>
      </Item>
      <Item>
        <IntersectFadeIn>
          {isIntersected => (
            <Lottie
              when={isIntersected}
              src={animData}
              loopStartFrame={0}
            />
          )}
        </IntersectFadeIn>
      </Item>
      <Item>
        <IntersectFadeIn>
          {isIntersected => (
            <Lottie
              when={isIntersected}
              src={animData}
              loopStartFrame={0}
            />
          )}
        </IntersectFadeIn>
      </Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 30px;
`

const Item = styled.div`
  width: 300px;
  height: 300px;
`

const IntersectFadeIn = styled(Intersection).attrs({
  animationOption: {
    type: IntersectAnimation.FadeIn
  }
})``
