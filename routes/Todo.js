const express = require('express');
const router = express.Router();

const {
    getAllTodo,
    createTodo,
    getTodoId,
    getTodo,
    updateTodo,
    updateTodoDone,
    updateTodoReject,
    deleteTodo
} = require('../controllers/Todo');

router.get('/todos/', getAllTodo);
router.post('/todos/create', createTodo);

router.param('Id', getTodoId);

router.get('/todos/:Id', getTodo);

router.put('/todos/:Id/update', updateTodo);
router.put('/todos/:Id/update_done', updateTodoDone);
router.put('/todos/:Id/update_reject', updateTodoReject);
router.delete('/todos/:Id/delete', deleteTodo);

module.exports = router;
