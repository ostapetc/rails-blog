class SessionsController < ApplicationController
  def create
    auth = request.env["omniauth.auth"]

    @user = User.find_by_uid_and_provider(auth['uid'], auth['provider'])
    unless @user
      @user          = User.new
      @user.uid      = auth['uid']
      @user.provider = auth['provider']
      @user.name     = auth['info']['name']
      unless @user.save
        raise @user.errors
      end
    end

    session[:user_id] = @user.id
    redirect_to root_path, notice: "Welcome #{@user.name}"
  end


  def destroy
    session[:user_id] = nil
    redirect_to '/', :notice => 'Bye'
  end
end
