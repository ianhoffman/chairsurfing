class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render :show
  end

  private
  def booking_params
    params.require(:booking).permit(:user_id, :chair_id, :start_date, :end_date)
  end
end
