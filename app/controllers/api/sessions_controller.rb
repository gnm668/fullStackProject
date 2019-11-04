class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_creds(
            params[:user][:username],
            params[:user][:password])
        if @user.nil?
            render json: ['Invalid login credentials']
        else
            login!(@user)
            render 'api/users/show';
        end
    end

    def destroy
        logout!
        render json: { message: 'Successfully Logged Out'}
    end
end
