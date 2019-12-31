Rails.application.routes.draw do

  get 'root/root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :videos, except: [:new, :edit]
    resources :likes, only: [:index, :create, :destroy]
    resources :dislikes, only: [:index, :create, :destroy]
    resources :comments, except: [:new, :edit]

    resource :session, only: [:create, :destroy]

  end

  
  root to: 'root#root'
end
