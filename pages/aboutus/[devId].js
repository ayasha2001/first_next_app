import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" }
];

const DevComp = () => {
  const router = useRouter();
  const [devDetails, setDevDetails] = useState(null);

  useEffect(() => {
    const { devId } = router.query;
    if (devId) {
      const selectedDev = details.find(dev => dev.id === parseInt(devId));
      setDevDetails(selectedDev);
    }
  }, [router.query]);

  if (!devDetails) {
    return <div>Not found...</div>;
  }

  return (
    <div>
      <h1>{devDetails.name}</h1>
      <p>{devDetails.role}</p>
    </div>
  );
};

export default DevComp;
