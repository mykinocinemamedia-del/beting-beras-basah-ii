-- BBB II Leads table — stores contact form submissions
-- Run this in Supabase SQL Editor for project tgikwdngogwzpmbttjoc

-- Table: bbb_leads
CREATE TABLE IF NOT EXISTS public.bbb_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  package_interest TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for sorting by created_at
CREATE INDEX IF NOT EXISTS idx_bbb_leads_created_at
  ON public.bbb_leads (created_at DESC);

-- RLS: enable Row Level Security
ALTER TABLE public.bbb_leads ENABLE ROW LEVEL SECURITY;

-- Policy: anyone can INSERT (anonymous form submission)
DROP POLICY IF EXISTS "Allow anonymous INSERT on bbb_leads" ON public.bbb_leads;
CREATE POLICY "Allow anonymous INSERT on bbb_leads"
  ON public.bbb_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: NO SELECT/UPDATE/DELETE for anon (only via dashboard)
DROP POLICY IF EXISTS "Block anon SELECT on bbb_leads" ON public.bbb_leads;
CREATE POLICY "Block anon SELECT on bbb_leads"
  ON public.bbb_leads
  FOR SELECT
  TO anon
  USING (false);

-- Comments
COMMENT ON TABLE public.bbb_leads IS
  'Contact form leads for Beting Beras Basah II landing page';
COMMENT ON COLUMN public.bbb_leads.package_interest IS
  'Sponsorship package the lead is interested in (Saujana / Sinar Warisan / Wira Budaya)';
