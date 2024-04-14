"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/v1");
  }, [router]);

  return null; // Render nothing while redirecting
};

export default Home;
