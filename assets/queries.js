selectAllDepts = () => {
    return 'SELECT * FROM emptracker_db.department'
};

selectAllRoles = () => {
    return 'SELECT * FROM emptracker_db.role'
}

selectAllEmployees = () => {
    return 'SELECT * FROM emptracker_db.employee'
}

insertDepartment = (dept) => {
    return  `INSERT INTO emptracker_db.department SET name = '${dept}'`
}

module.exports = {selectAllDepts, selectAllRoles, selectAllEmployees, insertDepartment};