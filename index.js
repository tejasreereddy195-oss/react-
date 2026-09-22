import React from "react";

const Counter = () => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "20px" }}
      className="py-5"
    >
      <button onClick={() => alert("Playing!")}>
        Play Movie
      </button>
    </div>
  );
};

export default Counter;