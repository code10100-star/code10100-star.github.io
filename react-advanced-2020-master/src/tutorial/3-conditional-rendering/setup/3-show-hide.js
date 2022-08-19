import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShow(!show)} className="btn">
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return ()=>{
      window.removeEventListener('resize',checkSize);
    }
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size : {size} PX </h2>
    </div>
  );
};

export default ShowHide;
