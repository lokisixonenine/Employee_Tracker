INSERT INTO departments (department_name)
    VALUES 
    ("Intructors"),
    ("Teaching Assistant"),
    ("Students")

INSERT INTO roles (title, salary, department_id)
    VALUES 
    ("Instructor", 100000.00, 1),
    ("Teaching Assistant", 90000.00, 2),
    ("Student", 0.00, 3);

/* Thank you Tyler for making this! It's saved me a lot of time! */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES 
    ("Schaen","Harrison", 1, NULL),
    ("Huynh", "Steph", 2, 1),
    ("Landgraf", "Steven", 2, 1),
    ("Angulo", "Daniel", 3, 1),
    ("Aguilar", "Said", 3, 1),
    ("Bell", "Matthew", 3, 1),
    ("Acosta", "Julian", 3, 1),
    ("Arthur", "Tyler", 3,1),
    ("Banuelos", "Javier", 3, 1),
    ("Aragon", "Art", 3, 1),
    ("Bunnell", "Cara", 3, 1),
    ("Bagtas", "Jaycee", 3, 1),
    ("Chalita", "Alexia", 3, 1),
    ("Glasser", "Lizbeth", 3, 1),
    ("Kier", "Collin", 3, 1),
    ("Monteverde", "Brian", 3, 1),
    ("Schuman", "Greg", 3, 1),
    ("Fabella", "Amy", 3, 1),
    ("Riley", "Jason", 3, 1);