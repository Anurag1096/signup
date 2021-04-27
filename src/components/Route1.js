import { useEffect, useState } from "react";

const Route1 = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLc = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLc);

    return () => {
      window.removeEventListener("popstate", onLc);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route1;
