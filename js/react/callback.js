
// Function that uses a callback example with async fetch

import axios from "axios";
import { useCallback, useEffect, useState } from "react";


export default function Home() 
  const [sections, setSections] = useState<MenuSectionHeading[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get<Menu>(url);
      setSections(response.data.MenuSections);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (<>..
  {/* component UI... */}
  .</>)
}