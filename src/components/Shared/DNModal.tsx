import { FC } from "react";
import { Modal } from "antd";

interface DNModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
}

const DNModal: FC<DNModalProps> = ({
  children,
  isModalOpen,
  setIsModalOpen,

  title,
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        okButtonProps={{ type: "default", hidden: true }}
        onCancel={handleCancel}
        cancelButtonProps={{hidden:true}}
      >
        {children}
      </Modal>
    </>
  );
};

export default DNModal;
