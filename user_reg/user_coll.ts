const bookService = require("../include/functions");

class HotelBook {
  async bookHotel(req, res) {
    const body = req.body;
    const createdroom = await Hotel_Service.hotelBooking(body);
    return res.status(201).json({
      success: true,
      message: " Successfully Boooked",
      data: createdroom,
    });
  }

  async deleteBooking(req, res) {
    const roomId = req.params.id;
    await Hotel_Service.deleteBook(roomId);
    return res.status(200).json({
      success: true,
      message: "Book Deleted Successfully",
      data: bookToFetch,
    });
  }
}

module.exports = new HotelBook();
