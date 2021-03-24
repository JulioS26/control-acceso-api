const Salida = require('../models/salida');

module.exports = class API {
    // fetch all posts
    static async fetchAllPost(req,res){
        try{   
            const salidas = await Salida.find();
            res.status(200).json(salidas);
        } catch(err){
            res.status(404).json({message: err.message})
        }
    }
    // fetch post by ID
    static async fetchPostByID(req,res){
        const id = req.params.id;
        try{
            const salida = await Salida.findById(id);
            res.status(200).json(salida);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }
    // create a post
    static async createPost(req,res){
        const salida = req.body;
        
        try{
            await Salida.create(salida);
            res.status(201).json({message: 'Salida creada'})
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
    // update a post
    static async updatePost(req,res){
        const id = req.params.id;
        

        const newPost = req.body;

        try {
            await Salida.findByIdAndUpdate(id, newPost);
            res.status(200).json({message: 'Salida actualizada'})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
    // delete a post
    static async deletePost(req,res){
        const id = req.params.id;
        try {
            const result = await Salida.findByIdAndDelete(id);
            res.status(200).json({message: 'Salida eliminada'})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
}