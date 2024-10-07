"use client";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setError, setItems, setLoading } from "@/store/dataSlice";

import { getData } from "./getData";

export default function Notes() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      try {
        const data = await getData();
        // console.log(data, " <--- data");
        dispatch(setItems(data));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchData();
    // console.log(items, " <--- fetched data");
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">
        User Data from pixelgram_schema.users:
      </h2>

      {items.length > 0 && (
        <div className="mb-8 rounded-lg bg-gray-100 p-4">
          <h3 className="mb-2 text-xl font-semibold">Data Structure:</h3>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(items[0], null, 2)}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg bg-white p-4 shadow-md">
            <p className="mb-2">
              <span className="font-semibold">Username:</span> {item.username}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {item.email}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Profile URL:</span>{" "}
              {item.profile_url}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
