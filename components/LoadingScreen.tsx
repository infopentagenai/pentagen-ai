useEffect(() => {
  console.log("LoadingScreen mounted");

  const timer = setTimeout(() => {
    console.log("Timer finished");
    setLoading(false);
  }, 1800);

  return () => {
    console.log("LoadingScreen unmounted");
    clearTimeout(timer);
  };
}, []);