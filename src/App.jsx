import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-500 min-h-[100px] rounded-xl">Hello World!</div>
    </>
  );
}

export default App;
