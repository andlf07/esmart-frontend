import React from "react";

const useHandleRegisterModal = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const handleRegisterModal = (value: boolean) => setIsOpenModal(value);
  return {
    handleRegisterModal,
    isOpenModal,
  };
};

export default useHandleRegisterModal;
