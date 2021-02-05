COPY routes FROM '/Users/ktt44/code/sei/python_django/sql-airplane-lab/routes.csv' DELIMITER ',' CSV;
-- COPY airports FROM '/Users/ktt44/code/sei/python_django/sql-airplane-lab/airports.csv' DELIMITER ',' CSV;
COPY airlines FROM '/Users/ktt44/code/sei/python_django/sql-airplane-lab/airlines.csv' DELIMITER ',' CSV;

-- GRANT ALL ON TABLE public.airlines TO PUBLIC;

-- GRANT ALL ON TABLE public.airports TO PUBLIC;

-- GRANT ALL ON TABLE public.routes TO PUBLIC;


-- COPY routes FROM 'C:\Users\ktt44\Desktop\routes.csv' DELIMITER ',' CSV;
-- COPY airports FROM 'C:\Users\ktt44\Desktop\airports.csv' DELIMITER ',' CSV;
-- COPY airlines FROM 'C:\Users\ktt44\Desktop\airlines.csv' DELIMITER ',' CSV;