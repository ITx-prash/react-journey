import { useState } from "react";
import TextBoxClose from "./components/TextboxClose";
import TextBoxOpen from "./components/TextboxOpen";
const Accordion = () => {
  const [activeId, setActiveId] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const accordion = [
    {
      id: 1,
      que: "What are accordion components?",
      ans: "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id: 2,
      que: "What are they used for?",
      ans: "They are commonly employed in various menus, settings panels, and data table, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id: 3,
      que: "Accordion as a musical instrument?",
      ans: "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music",
    },

    {
      id: 4,
      que: "Can I create an accordion component with a different framework?",
      ans: "I guess you can :)",
    },
  ];
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
        <button
          className="w-1/6 cursor-pointer rounded-xs bg-gray-600 px-3 py-2 text-center text-xl font-bold text-white"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable Multi Selection
        </button>

        <div className="flex w-full flex-col items-center justify-center gap-3">
          {accordion.map((indiAccordion) =>
            enableMultiSelection ? (
              multiSelected.includes(indiAccordion.id) ? (
                <TextBoxOpen
                  key={indiAccordion.id}
                  id={indiAccordion.id}
                  que={indiAccordion.que}
                  ans={indiAccordion.ans}
                  activeId={activeId}
                  setActiveId={setActiveId}
                  enableMultiSelection={enableMultiSelection}
                  multiSelected={multiSelected}
                  setMultiSelected={setMultiSelected}
                />
              ) : (
                <TextBoxClose
                  key={indiAccordion.id}
                  id={indiAccordion.id}
                  que={indiAccordion.que}
                  activeId={activeId}
                  setActiveId={setActiveId}
                  enableMultiSelection={enableMultiSelection}
                  multiSelected={multiSelected}
                  setMultiSelected={setMultiSelected}
                />
              )
            ) : activeId === indiAccordion.id ? (
              <TextBoxOpen
                key={indiAccordion.id}
                id={indiAccordion.id}
                que={indiAccordion.que}
                ans={indiAccordion.ans}
                activeId={activeId}
                setActiveId={setActiveId}
                enableMultiSelection={enableMultiSelection}
                multiSelected={multiSelected}
                setMultiSelected={setMultiSelected}
              />
            ) : (
              <TextBoxClose
                key={indiAccordion.id}
                id={indiAccordion.id}
                que={indiAccordion.que}
                activeId={activeId}
                setActiveId={setActiveId}
                enableMultiSelection={enableMultiSelection}
                multiSelected={multiSelected}
                setMultiSelected={setMultiSelected}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
