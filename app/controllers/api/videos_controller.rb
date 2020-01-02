class Api::VideosController < ApplicationController
    def index 
        @videos = Video.all.includes(:user)
        render :index
    end

    #grab likes with videos

    def create
        @video = Video.new(video_params)
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def show
        @video = Video.find_by(id: params[:id])
    end

    def update
        @video = Video.find_by(id: params[:id])
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.find_by(id: params[:id])
        if @video.destroy
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    private

    def video_params
        params.require(:video).permit(:user_id, :title, :description, :media, :search)
    end

end

