selectAllDepts = () => {
    return 'SELECT * FROM emptracker_db.department'
};

selectAllRoles = () => {
    return `
    SELECT 
    A.id, 
    A.title,
    A.salary,
    B.name as 'department'

    FROM emptracker_db.role A
    LEFT JOIN emptracker_db.department B on A.department_id = B.id
    `
}

selectAllEmployees = () => {
    return `
    SELECT 
    A.id,
    concat(A.first_name, ' ', A.last_name) as empName,
    B.title,
    C.name as 'department',
    B.salary,
    concat(D.first_name, ' ', D.last_name) as manager
   
    FROM emptracker_db.employee A 
    LEFT JOIN emptracker_db.role B on A.role_id = B.id
    LEFT JOIN emptracker_db.department C on B.department_id = C.id
    LEFT JOIN emptracker_db.employee D on A.manager_id = D.id`
}

insertDepartment = (dept) => {
    return `INSERT INTO emptracker_db.department SET name = '${dept}'`
}

insertRole = (title, salary, department) => {
    return `
    INSERT INTO emptracker_db.role (title, salary, department_id)
    SELECT 
    '${title}',
    ${salary},
    A.id
    from emptracker_db.department A
    WHERE A.name = '${department}'
    `
}

insertEmployee = (firstName, lastName, roleTitle) => {
    return `
    INSERT INTO emptracker_db.employee (first_name, last_name, role_id)
	Select
	'${firstName}', 
	'${lastName}', 
	A.id
	FROM emptracker_db.role A
	WHERE A.title = '${roleTitle}';

    `
}

module.exports = { selectAllDepts, selectAllRoles, selectAllEmployees, insertDepartment, insertRole, insertEmployee };

