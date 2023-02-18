import {
  ChangeEvent,
  DragEvent,
  FC,
  MouseEvent,
  useRef,
  useState,
} from 'react';

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
    console.log('DROP');
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Управляемый"
      />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />
      <button onClick={handleClick}>asfasf</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: 'red' }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'blue' : 'red',
          transition: 'ease 250ms',
          scale: isDrag ? '1.5' : '1',
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};
