Rails.application.routes.draw do
  get 'dashboard/show'
  root to: 'home#index'
  
  get '/logout' => 'logout#logout'
  get 'home' => 'home#index'
  get 'dashboard' => 'dashboard#show'
  get 'auth/auth0/callback' => 'auth0#callback'
  get 'auth/failure' => 'auth0#failure'
end