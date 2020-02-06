selectAllDepts = () => {
    return 'SELECT * FROM emptracker_db.department'
};

selectAllRoles = () => {
    return 'SELECT * FROM emptracker_db.role'
}

selectAllEmployees = () => {
    return `
    SELECT 
    A.id,
    concat(A.first_name, ' ', A.last_name) as empName,
    B.title,
    C.name as 'department',
    concat(D.first_name, ' ', D.last_name) as manager,
    B.salary
    
    FROM emptracker_db.employee A 
    LEFT JOIN emptracker_db.role B on A.role_id = B.id
    LEFT JOIN emptracker_db.department C on B.department_id = C.id
    LEFT JOIN emptracker_db.employee D on A.manager_id = D.id`
}

insertDepartment = (dept) => {
    return `INSERT INTO emptracker_db.department SET name = '${dept}'`
}

module.exports = { selectAllDepts, selectAllRoles, selectAllEmployees, insertDepartment };