const pool = require("../config/db.config");

//get all Campus
const getAllCampus = (request, response) => {
  pool.query('SELECT * FROM public."user"', (error, results) => {
    if (error) {
      throw error;
    }
    return response.status(200).json(results.rows);
  });
};

//get Campus by id
const getCampusById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'SELECT * FROM public."user" WHERE id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//create a new Campus
const createCampus = (request, response) => {
  const { name, email } = request.body;

  pool.query(
    'INSERT INTO public."user" (name, email) VALUES ($1, $2) RETURNING *',
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

//update an existing Campus
const updateCampus = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE public."user" SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

//delete an Campus
const deleteCampus = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'DELETE FROM public."user" WHERE id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};

//export all controller of Campus
module.exports = {
  getAllCampus,
  getCampusById,
  createCampus,
  updateCampus,
  deleteCampus,
};
