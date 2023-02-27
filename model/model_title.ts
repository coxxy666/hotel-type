import mongoose from "mongoose";
// mongoose.connect("mongodb://localhost:27017/hotelBook", {
//   useNewUrlParser: true,
// });

const UserBookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  roomNo: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const bookingRoom = mongoose.model("HotelBooking", UserBookSchema);
export default bookingRoom;
