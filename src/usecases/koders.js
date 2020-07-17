const Koder = require ('../models/koder');

const getKoders = async() =>{
    const koders= await Koder.find();
    return koders;
};

const createKoder = async (data) =>{
    const koder = await Koder.create(data);
    return koder;
}
const updateKoder = async (id, data) =>{
    const koder = await Koder.findByIdAndUpdate(id, data, {new: true});
    return koder;
};

const deleteKoder = async (id) =>{
    await Koder.findByIdAndDelete (id)
}
module.exports = { getKoders, createKoder, updateKoder, deleteKoder };

