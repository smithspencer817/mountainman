Rails.application.routes.draw do
  resources :posts
  resources :hikers
  resources :mountains
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
