const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
          throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }
);
  
const updateUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        } 
        if (typeof results.rows == 'undefined') {
            response.status(404).send(`Resource not found`);
        } else if (Array.isArray(results.rows) && results.rows.length < 1) {
            response.status(404).send(`User not found`);
        } else {
               response.status(200).send(`User modified with ID: ${results.rows[0].id}`)         	
        }
        response.status(200).send(`User modified with ID: ${id}`)
  
      }
    )
  }
}