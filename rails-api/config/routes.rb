Rails.application.routes.draw do
  resources :messages
  namespace :auth0 do
    get 'users', to: 'users#index'
    post 'users', to: 'users#create'
  end
end
