"use server";

import { createClient } from "@/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();

  const schema = "pixelgram_schema";
  const table = "users";

  try {
    const { data, error } = await supabase.rpc("get_table_from_schema", {
      schema_name: schema,
      table_name: table,
    });

    if (error) {
      console.error("Supabase query error:", error.message);
      console.error("Error details:", error);
      return <div>Error fetching data: {error.message}</div>;
    }

    // Parse the JSON data
    const parsedData = JSON.parse(JSON.stringify(data));

    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">
          User Data from {schema}.{table}:
        </h2>

        {parsedData.length > 0 && (
          <div className="mb-8 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Data Structure:</h3>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(parsedData[0], null, 2)}
            </pre>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {parsedData.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <p className="mb-2"><span className="font-semibold">Username:</span> {item.username}</p>
              <p className="mb-2"><span className="font-semibold">Email:</span> {item.email}</p>
              <p className="mb-2"><span className="font-semibold">Profile URL:</span> {item.profile_url}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return <div>An unexpected error occurred: {error.message}</div>;
  }
}
