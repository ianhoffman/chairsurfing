class Api::ChairsController < ApplicationController
  def index
    @chairs = Chair.in_bounds(params[:filters])

    render :index
  end

  def show
    @chair = Chair.find(params[:id])
    render :show
  end

  def create
    @chair = Chair.new(chair_params)

    if @chair.save
      render :show
    else
      render json: @chair.errors.full_messages
    end
  end

  private

  def chair_params
    params.require(:chair).permit(:description, :lat, :lng, :image_url)
  end
end
