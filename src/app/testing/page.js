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

    return (
      <div>
        <h2>
          Data from {schema}.{table}:
        </h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return <div>An unexpected error occurred: {error.message}</div>;
  }
}
