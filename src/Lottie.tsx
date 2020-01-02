import lottie, { AnimationItem } from 'lottie-web'
import * as React from 'react'

/**
 * awaitするとsleepできる関数
 */
function sleep(time: number) {
  return new Promise(r => setTimeout(r, time))
}

interface Props {
  src: any
  /** 切り替わったタイミングでアニメーションが行われる */
  when?: boolean
  /** 自動再生するかどうか。自動再生する場合はループする */
  autoplay?: boolean
  className?: string
  delay?: number
  /** ループ開始フレーム */
  loopStartFrame?: number
}

export default class Lottie extends React.Component<Props> {
  private wrapper = React.createRef<HTMLDivElement>()
  private animation: AnimationItem | null = null

  componentDidMount() {
    const {
      src,
      when,
      autoplay,
      loopStartFrame
    } = this.props
    if (this.wrapper.current == null) {
      return
    }
    this.animation = lottie.loadAnimation({
      container: this.wrapper.current,
      renderer: 'svg',
      loop: autoplay,
      autoplay,
      animationData: src
    })

    // マウント時にwhenがtrueの場合、既に終わっているものとして最後のフレームに移動する
    if (when) {
      this.animation.goToAndStop(
        this.animation.getDuration(true),
        true
      )
    }

    // loopStartFrameがある場合、complete時に指定のフレームから再生する
    if (typeof loopStartFrame !== 'undefined') {
      this.animation.addEventListener('complete', () => {
        if (this.animation == null) {
          return
        }
        this.animation.goToAndPlay(loopStartFrame, true)
      })
    }
  }

  async componentDidUpdate(prevProps: Props) {
    const { when, delay } = this.props
    if (this.animation === null) {
      return
    }

    // 状態が変わった時だけアニメーション
    if (prevProps.when !== when) {
      if (when) {
        if (delay) {
          await sleep(1000 * delay)
        }
        this.play()
      } else {
        this.refresh()
      }
    }
  }

  componentWillUnmount() {
    if (this.animation === null) {
      return
    }

    this.animation.destroy()
  }

  render() {
    const {
      when,
      src,
      autoplay,
      children,
      delay,
      loopStartFrame,
      ...props
    } = this.props
    return <div ref={this.wrapper} {...props} />
  }

  /** 最初から再生 */
  private play = () => {
    if (this.animation === null) {
      return
    }
    try {
      this.animation.goToAndPlay(0, true)
    } catch {}
  }

  /** 最初に戻して止める */
  private refresh = () => {
    if (this.animation === null) {
      return
    }
    this.animation.goToAndStop(0, true)
  }
}
