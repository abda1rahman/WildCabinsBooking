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

  const handleCloseModal = (e: React.MouseEvent) => {
    // Stop event propagation to prevent it from reaching the parent container
    e.stopPropagation();
    // Close the modal
    comfirmModal.onClose();
  };

  if (!comfirmModal.isOpen) {
    return <></>;
  }
  return (
    <div
      onClick={handleCloseModal}
      className='fixed flex items-center justify-center z-10 inset-0 bg-neutral-800/70'
    >
      <div className='w-full md:w-4/6 lg:w-3/6 xl:w-3/6'>
        <div className='w-full h-full   flex   flex-col bg-white rounded-lg shadow-lg p-6'>
          <div className='flex p-2 items-center mx-auto  rounded-t'>
            <p className='text-lg font-bold mb-4 '>{title}</p>
          </div>
          <div className='flex justify-end space-x-4'>
            <Button outline label='Close' onClick={handleCloseModal} />
            <Button label='Delete' onClick={hancleAction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
