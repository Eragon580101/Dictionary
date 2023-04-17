import "./Meaning.scss";

interface definition {
  definiation: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

interface Props {
  partOfSpeech: string;
  definitions: definition[];
  synonyms: string[];
}

export const Meaning = (props: Props) => {
  const { partOfSpeech, definitions, synonyms } = props;
  return (
    <div className="meaning">
      <div className="meaning__header">
        <div className="meaning__header__title">
          <span className="meaning__header__title__text">{partOfSpeech}</span>
        </div>
      </div>
      <div className="meaning__body">
        <span className="title">Meaning</span>
        {definitions.map((defs: any) => {
          return (
            <>
              <div className="meaning__body__defination__item">
                {defs.definition}
              </div>
              {defs.example ? (
                <div className="meaning__body__example">
                  <span className="meaning__body__example__text">
                    {defs.example}
                  </span>
                </div>
              ) : null}
            </>
          );
        })}
        {synonyms.length > 0 ? (
          <div className="meaning__body_synonyms">
            <span className="meaning__body_synonyms__text title">
              Synonyms:{" "}
            </span>
            {synonyms.map((defs: any) => (
              <span>{defs}{" "}</span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
