class User < ApplicationRecord
  before_destroy :delete_user_on_auth0
	before_save :update_user_on_auth0
  
	private
    def delete_user_on_auth0
      auth0_client.delete_user(self.auth0_id)
			# RubySDKでAuth0側のユーザーを削除する。
			# ユーザーの削除に失敗した場合はSynca側でも削除させない。
    end

    def update_user_on_auth0
			# RubySDKでAuth0側のユーザーを編集する。
			# ユーザーの削除に失敗した場合はSynca側でも編集させない。
    end

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
