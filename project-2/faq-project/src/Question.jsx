import { useState } from "react";

import React from "react";

const Question = ({ question }) => {

  const [isOpen, setOpen] = useState(false)

  return (
    <section>
      <div className={isOpen ? "open":"closed"}>
        <h4>{question.title}</h4>
        <button
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
    {isOpen && <p>{question.info}</p>}
    </section>
  )
};

export default Question;
