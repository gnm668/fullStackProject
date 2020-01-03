class Api::VideosController < ApplicationController
    def index 
        if params["search"] == ""
            params["search"] = nil
        end

        if params["search"] 
            search = params["search"]
            @videos = Video.where("title LIKE ?", "%#{search}%")
            render :index
        else
            @videos = Video.all
            render :index
        end
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

