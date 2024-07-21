import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const passwordSchema = new Schema({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true
  },
  userid: { type: Schema.Types.ObjectId, ref: 'User' },
  password: String,
});

export default model('Password', passwordSchema);
