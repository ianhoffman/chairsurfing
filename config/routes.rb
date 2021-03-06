Rails.application.routes.draw do
  
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :chairs, only: [:create, :index, :show, :update]
    resources :bookings, only: [:index, :show, :create, :destroy, :update]
    resources :reviews, except: [:new, :edit]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
