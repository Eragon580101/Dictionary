import { forwardRef, useEffect, MutableRefObject } from 'react';
import './Word.scss';

interface Props {
    word: string;
    pronunciation: string;
    darkMode: boolean;
}

type Ref = HTMLDivElement;

export const Word = forwardRef<Ref, Props>((props, ref) => {

    const { word, pronunciation, darkMode } = props;

    useEffect(() => {
    if(ref) {
        if(darkMode) {
            (ref as MutableRefObject<HTMLDivElement>).current?.classList.add('dark');
        } else {
            (ref as MutableRefObject<HTMLDivElement>).current?.classList.remove('dark');
        }
    }
    }, [darkMode])

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