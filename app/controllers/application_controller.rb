class ApplicationController < ActionController::Base
  def error_not_found(title = 'Not Found')
    raise ActionController::RoutingError.new(title)
  end
end
