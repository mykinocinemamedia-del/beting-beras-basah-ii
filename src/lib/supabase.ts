// Supabase REST API client (no SDK dependency)
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://tgikwdngogwzpmbttjoc.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_X5wuVZWmx3l3q_ncJUHLnA_Lvsrynod";

export const supabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
  restUrl: `${supabaseUrl}/rest/v1`,
};

export type LeadRecord = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  package_interest: string;
  message: string;
  created_at?: string;
};

/**
 * Insert a lead into the bbb_leads table via Supabase REST API.
 * Requires RLS policy allowing INSERT for anon role.
 */
export async function insertLead(
  lead: Omit<LeadRecord, "id" | "created_at">
): Promise<{ success: boolean; data?: LeadRecord; error?: string }> {
  try {
    const response = await fetch(`${supabaseConfig.restUrl}/bbb_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseConfig.anonKey,
        Authorization: `Bearer ${supabaseConfig.anonKey}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Supabase insert error:", errText);
      return {
        success: false,
        error: `HTTP ${response.status}: ${errText.substring(0, 200)}`,
      };
    }

    const data = (await response.json()) as LeadRecord[];
    return { success: true, data: data[0] };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("insertLead exception:", msg);
    return { success: false, error: msg };
  }
}
