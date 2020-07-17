const Mentor = require ('../models/mentor');

const getMentors = async() =>{
    const mentors= await Mentor.find();
    return mentors;
};

const createMentor = async (data) =>{
    const mentor = await Mentor.create(data);
    return mentor;
}
const updateMentor = async (id, data) =>{
    const mentor = await Mentor.findByIdAndUpdate(id, data, {new: true});
    return mentor;
};

const deleteMentor = async (id) =>{
    await Mentor.findByIdAndDelete (id)
}
module.exports = { getMentors, createMentor, updateMentor, deleteMentor};

