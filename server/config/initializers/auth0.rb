Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :auth0,
    ENV['CLIENT_ID'],
    ENV['CLIENT_SECRET'],
    ENV['DOMAIN'],
    callback_path: '/auth/auth0/callback',
    authorize_params: {
      scope: 'openid email profile'
    }
  )
end