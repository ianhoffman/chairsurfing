class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.find_by(chair_id: params[:id])

    render :index
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :chair_id, :body, :rating)
  end
end
