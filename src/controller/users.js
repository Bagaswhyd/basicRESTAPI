const UsersModel = require('../models/users.js'); // import model users

// POST 
const createNewUser = async (req, res) => {
    const {body} = req;

    // Validasi
    const missingFields = [];
    if (!body.name) missingFields.push('name');
    if (!body.email) missingFields.push('email');
    if (!body.address) missingFields.push('address');

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: `Belum memasukkan ${missingFields.join(' dan ')}`,
            data: null
        });
    }


    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'CreateNewUser failed & Server Error',
            serverMessage: error,
        })
    }
}
// GET
const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all Users success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'GetAllUsers failed & Server Error',
            serverMessage: error,
        })
    }
}
// PATCH
const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.status(201).json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'UpdateUser failed & Server Error',
            serverMessage: error,
        })
    }
    
}
// DELETE
const deleteUser = async (req, res) => {
    const {idUser} = req.params; 
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'DeleteUser failed & Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    createNewUser,
    getAllUsers,
    updateUser,
    deleteUser
}
