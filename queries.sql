create table expenses (
  id serial primary key,
  user_id uuid references auth.users not null,
  title varchar(255) not null,
  type varchar(64) not null,
  amount decimal(9, 2) not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone
);

alter table expenses enable row level security;

create policy "Users can view their own expenses." on expenses
  for select using (auth.uid() = user_id);

create policy "Users can add new expenses." on expenses
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own expenses." on expenses
  for update using (auth.uid() = user_id);

create policy "Users can delete their own expenses." on expenses
  for delete using (auth.uid() = user_id);
