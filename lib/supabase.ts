import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          city: string;
          target_score: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["profiles"]["Row"], "created_at">;
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      tryout_results: {
        Row: {
          id: string;
          user_id: string;
          tryout_id: string;
          tryout_number: number;
          twk_score: number;
          tiu_score: number;
          tkp_score: number;
          total_score: number;
          is_official: boolean;
          mode: "official" | "practice";
          submitted_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["tryout_results"]["Row"], "id" | "submitted_at">;
        Update: never;
      };
    };
  };
};
