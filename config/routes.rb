Rails.application.routes.draw do
  resources :listeners
  resources :groups
  resources :djs
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
