import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { ITable } from "..";

const DisplayActions = ({ content }: Pick<ITable, "content">) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MdOpenInNew onClick={handleToggleModal} />
      {showModal && content}
    </>
  );
};

export { DisplayActions };
