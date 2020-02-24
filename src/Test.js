import React, { useState, useEffect, useRef } from "react";

const Test = () => {
// We need to listen to scroll events on the window so we
// manage an event listener ourselves.
React.useEffect(() => {
  const handleScroll = e => {
    console.log(window.scrollY)
  }
  document.addEventListener("scroll", handleScroll)
  return () => {
    // This cleans up the event handler when the component unmounts.
    document.removeEventListener("scroll", handleScroll)
  }
})

  return (
    <div>
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
    </div>
  );
};

export default Test;
