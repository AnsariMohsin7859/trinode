const pool = require('../config/db.config')


//get all user
const getAllPost = (request, response) => {
    pool.query('SELECT * FROM public."user"', (error, results) => {
      if (error) {
        throw error
      }
       return response.status(200).json(results.rows)
    })
  }

  //get user by id 
const getPostById = (request, response) => {
   const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM public."user" WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createPost = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO public."user" (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

const updatePost = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE public."user" SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deletePost = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM public."user" WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {getAllPost , getPostById , createPost , updatePost , deletePost}