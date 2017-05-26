class Api::BookingsController < ApplicationController
  def index
    if params[:user_id]
      @bookings = Booking.includes(:user).includes(:chair).where(user_id: params[:user_id])
    elsif params[:chair_id]
      @bookings = Booking.includes(:user).includes(:user).where(chair_id: params[:chair_id])
    end

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

  def update
    booking = Booking.includes(:user).includes(:chair).find_by(id: params[:id])

    if booking.update_attributes(booking_params)
      if booking.status == 'APPROVED'
        @bookings = Booking.deny_overlapping_bookings(booking)
        render :index
      else
        @booking = booking
        render :show
      end
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
    params.require(:booking).permit(:user_id, :chair_id, :start_date, :end_date, :status)
  end
end
