
create table
  kural (
    kural_number int not null primary key,
    kural_json jsonb not null,
    oai_embedding vector(1536),
    create_on timestamp with time zone default now(),
    updated_on timestamp with time zone default now()
  );

create
or replace function search_kural (
  query_embedding vector (1536),
  match_threshold float,
  max_result_to_return int
) returns table (id int, kural_json jsonb, similarity float) language sql stable as $$
  select 
    k.kural_number,
    k.kural_json,
    1 - (k.oai_embedding <=> query_embedding) as similarity
  from kural k
  where k.oai_embedding <=> query_embedding < 1 - match_threshold
  order by k.oai_embedding <=> query_embedding
  limit max_result_to_return;
$$;
