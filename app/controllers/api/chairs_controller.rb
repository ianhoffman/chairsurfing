class Api::ChairsController < ApplicationController
  def index
    @chairs = Chair.includes(:bookings).in_bounds(params[:filters])

    render :index
  end

  def show
    @chair = Chair.includes(:bookings).find_by(id: params[:id])
    render "api/chairs/show.json.jbuilder"
  end

  def create
    @chair = Chair.new(chair_params)

    if @chair.save
      render :show
    else
      render json: @chair.errors.full_messages, status: 422
    end
  end

  def update
    @chair = Chair.includes(:bookings).find_by(id: params[:id])

    if @chair.update_attributes(chair_params)
      render :show
    else
      render json: @chair.errors.full_messages, status: 422
    end
  end

  private

  def chair_params
    params.require(:chair).permit(
      :description,
      :lat,
      :lng,
      :image_url,
      :about,
      :user_id,
      :address,
      :accepting_guests
    )
  end
end
