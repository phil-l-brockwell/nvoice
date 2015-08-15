class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  respond_to :json

  def angular
    render 'layouts/application'
  end
end
