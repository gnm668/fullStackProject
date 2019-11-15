class Api::DislikesController < ApplicationController
        def index
        @dislikes = Dislike.all
        render :index
    end

    def create
        @dislike = Dislike.new(dislike_params)
        if @dislike.save
            render :show
        else
            render json: @dislike.errors.full_messages, status: 422
        end
    end

    def destroy 
        @dislike = Dislike.find_by(id: params[:id])
        if @dislike.destroy
            render :show
        else
            render json: @dislike.errors.full_messages, status: 422
        end
    end

    private

    def dislike_params
        params.require(:dislike).permit(:user_id, :video_id)
    end
end
