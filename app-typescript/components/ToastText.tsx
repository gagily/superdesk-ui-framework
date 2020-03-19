import * as React from 'react';
import { Icon } from './Icon';

interface IProps {
  id: string;
  title?: string | React.ReactNode;
  icon?: string;
  onClose: () => void;
  textHeight(height: number): void;
}

const ToastText = ({ id, title, icon, onClose, textHeight }: IProps) => {
  const ref = React.useRef(null);
  React.useEffect(() => textHeight(ref.current.clientHeight), []);

  return (
    <React.Fragment>
      {icon ?
        <div className='sd-toast__icon'>
          <Icon name={icon} />
        </div> : null}
      <div ref={ref} id={id} className='sd-toast__message'>
        {title}
      </div>
      {onClose && <Close onClose={onClose} />}
    </React.Fragment>
  );
};

const Close = ({ onClose }: { onClose: () => void }) => (
  <button
    className="icn-btn sd-toast__actions"
    type="button"
    aria-label="Close"
    onClick={onClose}
  >
    <Icon name='close-small' />
  </button>
);

export default ToastText;
