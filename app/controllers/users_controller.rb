class UsersController < ApplicationController
  load_and_authorize_resource

  def manage
    @users = User.all(:order => :id)
  end
end
