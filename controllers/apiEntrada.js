const Entrada = require('../models/entrada');

module.exports = class API {
    // Todas las entradas
    static async fetchAllPost(req,res){
        try{   
            const entradas = await Entrada.find();
            res.status(200).json(entradas);
        } catch(err){
            res.status(404).json({message: err.message})
        }
    }
    // Entrada por su ID
    static async fetchPostByID(req,res){
        const id = req.params.id;
        try{
            const entrada = await Entrada.findById(id);
            res.status(200).json(entrada);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }
    // Crear entradas
    static async createPost(req,res){
        const entrada = req.body;
        
        try{
            await Entrada.create(entrada);
            res.status(201).json({message: 'Entrada creada'})
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
    // Actualizar entrada
    static async updatePost(req,res){
        const id = req.params.id;

        const newPost = req.body;

        try {
            await Entrada.findByIdAndUpdate(id, newPost);
            res.status(200).json({message: 'Entrada actualizada'})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
    // Eliminar entrada
    static async deletePost(req,res){
        const id = req.params.id;
        try {
            const result = await Entrada.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('./uploads' + result.image);
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({message: 'Entrada eliminada'})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
}