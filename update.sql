-- Run this to update your profiles table for Phase 3
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS github_username text;
