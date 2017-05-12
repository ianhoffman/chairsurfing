class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login
      render :show
    else
      render json: {errors: ["Invalid Credentials"]}
    end


  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {}, status:404
    end
    
  end
end
