-- Add missing fields to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS email text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS linkedin_url text;

-- Add DELETE policy for projects
CREATE POLICY "Users can delete own projects." ON public.projects FOR DELETE USING (auth.uid() = user_id);
