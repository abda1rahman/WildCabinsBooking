import Modal from "./Modal";
import useConfirmModal from "../../hooks/useConfirmModal";
import Button from "../Button";

type Props = {
  title: string;
  onConfirm: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Confirmation = ({ title, onConfirm }: Props) => {
  const comfirmModal = useConfirmModal();

  const hancleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onConfirm(e);
    comfirmModal.onClose();
  };

  if (!comfirmModal.isOpen) {
    return <></>;
  }
  return (
    <div className='fixed flex items-center justify-center z-10 inset-0 bg-black opacity-50'>
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <p className='text-lg mb-4'>{title}</p>
        <div className='flex justify-end space-x-4'>
          <Button
            label='Cancel'
            onClick={(e) => {
              e.stopPropagation();
              comfirmModal.onClose();
            }}
          />
          <Button label='Delete' onClick={hancleAction} />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
