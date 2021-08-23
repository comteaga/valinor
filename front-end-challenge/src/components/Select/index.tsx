import { BiChevronDown } from 'react-icons/bi';
import { useState, useEffect, useRef, HTMLProps } from 'react';
import { Container } from './styles';

interface IOptions {
  value: string;
  label: string;
}

interface IProps {
  options: IOptions[];
  icon?: any;
  actualValue: string;
  changeValue?(value: string): void;
}

const Select: React.FC<IProps & HTMLProps<HTMLDivElement>> = ({
  options,
  icon,
  actualValue,
  changeValue,
  className,
}) => {
  const [optionSelected, setOptionSelected] = useState<string>(actualValue);
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);

  const selectRef = useRef<null | HTMLElement>(null);
  const optionsRef = useRef<null | HTMLElement>(null);
  const buttonRef = useRef<null | HTMLElement>(null);

  function handleClick(selected: string) {
    setToggleSelect(!toggleSelect);
    setOptionSelected(selected);
    if (changeValue) {
      changeValue(selected);
    }
  }

  useEffect(() => {
    const iconsWidth = icon !== null ? 60 : 0;
    const width =
      optionsRef.current && optionsRef.current.offsetWidth + iconsWidth;

    optionsRef.current?.style.setProperty('width', `${width}px`);
    optionsRef.current?.style.setProperty('padding-left', `${22}px`);
    optionsRef.current?.style.setProperty('padding-right', `${22}px`);
    buttonRef.current?.style.setProperty('width', `${width}px`);
  }, []);

  useEffect(() => {
    function clickOutside(event: any) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        if (toggleSelect === true) {
          setToggleSelect(false);
        }
      }
    }
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [selectRef, toggleSelect]);

  return (
    <Container ref={selectRef as any} className={className}>
      <button
        type="button"
        ref={buttonRef as any}
        className="selectButton"
        onClick={() => setToggleSelect(!toggleSelect)}
      >
        <div className="icon">{icon}</div>
        {options.find((option) => option.value === optionSelected)?.label}
        <div className="arrow">
          <BiChevronDown size={18} color="#555" />
        </div>
      </button>
      <li
        id="list"
        className={toggleSelect ? 'listOfOptionsOn' : 'listOfOptionsOff'}
      >
        {options.map((option) => (
          <button
            key={option.value}
            ref={optionsRef as any}
            type="button"
            className="option"
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </button>
        ))}
      </li>
    </Container>
  );
};

export { Select };
