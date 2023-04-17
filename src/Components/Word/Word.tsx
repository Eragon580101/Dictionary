import { forwardRef } from 'react';
import './Word.scss';

interface Props {
    word: string;
    pronunciation: string;
}

type Ref = HTMLDivElement;

export const Word = forwardRef<Ref, Props>((props, ref) => {

    const { word, pronunciation } = props;

    return (
        <div className="word" ref={ref}>
            <div className="word__header">
                <div className="word__header__title">
                    <span className="word__header__title__text">{word}</span>
                    <span className="word__header__title__pronunciation">{pronunciation}</span>
                </div>
                {pronunciation &&
                <div className="word__header__audio">
                    <i className="fas fa-volume-up icon"></i>
                </div>}
            </div>
        </div>
    )
})