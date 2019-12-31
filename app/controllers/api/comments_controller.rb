class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render :index
  end

  def show

  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  # def show
  #   @comment = Comment.find_by(id: params[:id])
  # end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :video_id)
  end
  
end
