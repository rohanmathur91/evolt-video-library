import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (show) => setShowModal(show);

  return { showModal, handleShowModal };
};
