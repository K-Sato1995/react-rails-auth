module Auth0
  class UsersController < ApplicationController
    include Secured

    def index
      users = auth0_client.users
      render json: { status: 'SUCCESS', message: 'Loaded users', data: users }
    end

    def create
      user = auth0_client.create_user()
      if message.save
        render json: { status: 'SUCCESS', data: message }
      else
        render json: { status: 'ERROR', data: message.errors }
      end
      @user = auth0_client.users
      # def create_user(name, options = {})
      #   request_params = Hash[options.map { |(k, v)| [k.to_sym, v] }]
      #   request_params[:name] = name
      #   post(users_path, request_params)
      # end
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
  end
end