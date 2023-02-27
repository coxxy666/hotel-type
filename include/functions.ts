import HotelBooking from "../model/model_title";

class Hotel_Service {
  // booking
  async bookHotel(data: H_create_booking) {
    return await HotelBooking.create(data);
  }

  // Update booking
  async updateBooking(updateData: Partial<H_create_booking>) {
    return await HotelBooking.findByIdAndUpdate(updateData, {
      new: true,
    });
  }

  // Delete booking
  async deleteBooking(id: Partial<H_create_booking>) {
    return await HotelBooking.findByIdAndDelete(id);
  }

  async getBooking(filter: Partial<H_create_booking>) {
    return await HotelBooking.findOne(filter);
  }
}

export default new Hotel_Service();
