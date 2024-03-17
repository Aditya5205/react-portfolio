import { useEffect } from "react";

const useScript = (src) => {
  useEffect(() => {
    let script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

export default useScript;
