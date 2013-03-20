class ApplicationController < ActionController::Base
  before_filter :menu


  def menu
    @menu = 'layouts/menu'
  end


  def error_not_found(title = 'Not Found')
    raise ActionController::RoutingError.new(title)
  end


  def current_ability
    @current_ability ||= Ability.new(current_user)
  end


  def current_user
    @current_user = session[:user_id] ? User.find(session[:user_id]) : User.new
  end


  private
  def firebug(message, type = :debug)
    request.env['firebug.logs'] ||= []
    request.env['firebug.logs'] << [type.to_sym, message.to_s]
  end
end
