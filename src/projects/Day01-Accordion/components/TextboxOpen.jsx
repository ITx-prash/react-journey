import { IconPlus } from "@tabler/icons-react";

const TextboxOpen = ({
  id,
  que,
  ans,
  activeId,
  setActiveId,
  enableMultiSelection,
  multiSelected,
  setMultiSelected,
}) => {
  const handleSingleSelection = () => setActiveId(activeId === id ? null : id);
  const handleMultipleSelection = () => {
    if (multiSelected.includes(id)) {
      setMultiSelected(multiSelected.filter((itemId) => itemId !== id));
    } else {
      setMultiSelected([...multiSelected, id]);
    }
  };
  return (
    <>
      <div
        className="flex w-1/3 cursor-pointer flex-col gap-2 rounded-xs bg-gray-600 px-6 py-7"
        onClick={
          enableMultiSelection ? handleMultipleSelection : handleSingleSelection
        }
      >
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-white">{que}</h3>
          <IconPlus stroke={2} className="shrink-0 text-white" />
        </div>
        <p className="text-white">{ans}</p>
      </div>
    </>
  );
};

export default TextboxOpen;
