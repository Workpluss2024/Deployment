import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new Schema({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true
  },
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  authenticationMode: String,
  accountCreationDate: Date,
  lastModifiedDate: Date,
  isActive: Boolean,
  isVerified: Boolean,
  profilePic: String,
  dob: Date,
  address: String,
  baseLocation: String,
  subLocation: String,
  workType: String,
  workId: [{ type: Schema.Types.ObjectId, ref: 'Work' }],
  experience: Number,
  profession: String,
  currentEmployeerName: String,
  isEmailVerified: Boolean,
  isPhoneVerified: Boolean,
  isDocumentVerified: Boolean,
  governmentIdType: String,
  governmentIdNumber: String,
  lastLogin: Date
});

export default model('User', userSchema);
