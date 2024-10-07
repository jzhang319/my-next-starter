"use server";

import { createClient } from "@/utils/supabase/server";

export async function getData() {
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
      throw error;
    }

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
}
