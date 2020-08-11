require 'securerandom'

module Auth0
  class UsersController < ApplicationController
    include Secured

    def index
      users = auth0_client.users
      render json: { status: 'SUCCESS', message: 'Loaded users', data: users }
    end

    def create
      user = auth0_client.create_user(params[:email], { "email": params[:email], "connection": "Username-Password-Authentication", "password": "Password1234" })
      render json: { status: 'SUCCESS', data: user }
    rescue => e
      render json: { status: 'ERROR', data: e.message }
    end

    private

    def auth0_client
      @auth0_client ||= Auth0Client.new(
        client_id: ENV['CLIENT_ID'],
        client_secret: ENV['CLIENT_SECRET'],
        domain: ENV['DOMAIN'],
        api_version: 2,
        timeout: 15 # optional, defaults to 10
      )
    end

    def user_params
      params.require(:user).permit(:email)
    end
  end
end