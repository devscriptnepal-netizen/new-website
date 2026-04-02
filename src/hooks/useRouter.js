import { useState, useEffect } from "react";

export function useRouter() {
  const getPage = () => window.location.hash.replace("#/", "") || "home";
  const [page, setPage] = useState(getPage);
  useEffect(() => {
    const fn = () => { setPage(getPage()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", fn);
    return () => window.removeEventListener("hashchange", fn);
  }, []);
  const navigate = (p) => { window.location.hash = "#/" + p; };
  return { page, navigate };
}
