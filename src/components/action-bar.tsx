import { VscArrowUp, VscArrowDown, VscChromeClose } from 'react-icons/vsc';
import { useActions } from '../hooks/useActions';

import './action-bar.css';

interface ActionBarProps {
  id: string;
}

interface ActionButtonProps {
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className='action-button button is-primary is-small'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className='action-bar'>
      <ActionButton onClick={() => moveCell(id, 'up')}>
        <VscArrowUp size={18} title='Move up' />
      </ActionButton>
      <ActionButton onClick={() => moveCell(id, 'down')}>
        <VscArrowDown size={18} title='Move down' />
      </ActionButton>
      <ActionButton onClick={() => deleteCell(id)}>
        <VscChromeClose size={18} title='Delete' />
      </ActionButton>
    </div>
  );
};

export default ActionBar;
