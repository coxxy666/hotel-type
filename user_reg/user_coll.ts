import Hotel_Service from "../include/functions";

class HotelBook {
  async bookHotel(req: Request, res: Response, next) {
    const body = req.body;
    const createdroom = await Hotel_Service.bookHotel(body);
    return res.status(201).json({
      success: true,
      message: " Successfully Boooked",
      data: createdroom,
    });
  }

  async deleteBooking(req: Request, res: Response) {
    const roomId = req.params.id;
    const deleteRoom = await Hotel_Service.deleteBooking(roomId);
    return res.status(200).json({
      success: true,
      message: "Book Deleted Successfully",
      data: deleteRoom,
    });
  }
}

export default new HotelBook();
