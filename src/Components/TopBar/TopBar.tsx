import React, { forwardRef, useRef, useState } from "react";
import "./TopBar.scss";

interface Props {
  handleDarkMode: () => void;
  changeWholeFont : (font: string) => void;
}

type Ref = HTMLDivElement;

export const TopBar = forwardRef<Ref, Props>((props, ref) => {
  const { handleDarkMode, changeWholeFont } = props;
  const [defaultFont, setDefaultFonts] = useState<String>("Sans Serif");
  const fonts = useRef<HTMLDivElement>(null);

  const [showFonts, setShowFonts] = useState<boolean>(false);

    const handleShowFonts = () => {
        setShowFonts(!showFonts);
    }

    const changeFont = (font: string) => {
        setDefaultFonts(font);
        const fontFamily = font.toLowerCase().replace(" ", "-");
        changeWholeFont(fontFamily);
    }

  return (
    <div className="top-bar" ref={ref}>
      <div className="top-bar__logo">
        <i className="fas fa-book icon"></i>
        <span>Dictionary</span>
      </div>
      
      <div className="top-bar__control">
      <div className="top-bar__fonts" onClick={handleShowFonts}>
        <div className="defaultFont">{defaultFont}</div>
        {showFonts && <div className="values" ref={fonts} >
          <div data-value="serif" onClick={()=>changeFont('Serif')}>Serif</div>
          <div data-value="sans-serif" onClick={()=>changeFont('Sans Serif')}>Sans Serif</div>
          <div data-value="monospace" onClick={()=>changeFont('Monospace')}>Monospace</div>
        </div>}
      </div>
        <input
          type="checkbox"
          className="top-bar__control_switch"
          onClick={handleDarkMode}
        />
        <i className="fas fa-moon icon"></i>
      </div>
    </div>
  );
});
