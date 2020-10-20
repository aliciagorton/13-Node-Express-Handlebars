USE burger_db;

TRUNCATE TABLE burger;

INSERT INTO burger (burger_name) VALUES 
('Gold Rush Burger'),
('Old School Burger'),
('True Bleu Burger'),
('El Charro Burger');

SELECT * FROM burger;