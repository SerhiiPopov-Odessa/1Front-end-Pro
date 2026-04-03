"use client";
import { notFound } from "next/navigation";
import Button from "../components/UI/Button";
import { useState } from "react";

async function GetApiInfoFun() {
  const res = await fetch("http://localhost:3000/api/data", {
    cache: "no-store",
  });
  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
  return await res.json();
}

function GetApiInfo() {
  const [infoApi, setInfoApi] = useState(null);
  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    setLoading(true);
    try {
      const data = await GetApiInfoFun();
      setInfoApi(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-center ">
      <Button  title="Get request" onClick={clickHandler}>
        Get request fetch local API
      </Button>

      {loading && <p>Loading...</p>}

      {infoApi && (
        <>
          <p>name: {infoApi.name}</p>
          <p>age: {infoApi.age}</p>
          <p>bio: {infoApi.bio}</p>
        </>
      )}
    </section>
  );
}

export default GetApiInfo;