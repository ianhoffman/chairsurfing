class Api::SessionsController < ApplicationController

  def create
    @user = User.includes(:chair).find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login
      render :show
    else
      render json: ["Oops! Your email or password is incorrect."], status: 422
    end


  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {}, status: 404
    end

  end
end
