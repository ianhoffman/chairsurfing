class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.includes(:chair).where(user_id: params[:user_id])

    render :index
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render "api/bookings/show.json.jbuilder"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
    @booking = Booking.find(params[:id])
    render 'api/bookings/show.json.jbuilder'
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render :show
  end

  private
  def booking_params
    params.require(:booking).permit(:user_id, :chair_id, :start_date, :end_date, :status)
  end
end
