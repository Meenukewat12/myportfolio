import React from "react";

function App() {
  function myclick() {
    alert("hello MEENU");
  }
  return (
    <button variant="submit" onClick={myclick}>
      click
    </button>
  );
}
export default App;
