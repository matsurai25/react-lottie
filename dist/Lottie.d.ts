import * as React from 'react';
interface Props {
    src: any;
    /** 切り替わったタイミングでアニメーションが行われる */
    when?: boolean;
    /** 自動再生するかどうか。自動再生する場合はループする */
    autoplay?: boolean;
    className?: string;
    delay?: number;
    /** ループ開始フレーム */
    loopStartFrame?: number;
}
export default class Lottie extends React.Component<Props> {
    private wrapper;
    private animation;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): Promise<void>;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /** 最初から再生 */
    private play;
    /** 最初に戻して止める */
    private refresh;
}
export {};
