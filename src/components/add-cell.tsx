import { VscAdd } from 'react-icons/vsc';
import { useActions } from '../hooks/use-actions';
import './add-cell.css';

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

interface AddButtonProps {
  onClick: () => void;
  text: string;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, text }) => {
  return (
    <button className='button is-rounded is-primary is-small' onClick={onClick}>
      <span className='icon is-small'>
        <VscAdd size={16} />
      </span>
      <span>{text}</span>
    </button>
  );
};

const AddCell: React.FC<AddCellProps> = ({
  previousCellId,
  forceVisible = '',
}) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className='add-buttons'>
        <AddButton
          onClick={() => insertCellAfter(previousCellId, 'code')}
          text='Code'
        />
        <AddButton
          onClick={() => insertCellAfter(previousCellId, 'text')}
          text='Text'
        />
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default AddCell;
