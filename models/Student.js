import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    course: {
        type: String
    }
});

export default mongoose.model('Student', studentSchema);