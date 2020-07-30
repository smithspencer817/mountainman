class PostsController < ApplicationController

    def index
        @posts = Post.all
        render json: @posts, only: [:id, :content, :likes, :image], include: [:hiker, :mountain]
    end

    def show
        @post = Post.find(params[:id])
        render json: @post, only: [:id, :content, :likes], include: [:hiker, :mountain]
    end

    def create
        @post = Post.create(post_params)
        render json: @post, only: [:id, :content, :likes, :image], include: [:hiker, :mountain]
    end

    def update
        @post = Post.find(params[:id])
        @post.update(post_params)
        render json: @post, only: [:id, :content, :likes], include: [:hiker, :mountain]
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
    end

    private 

    def post_params
        params.require(:post).permit(:mountain_id, :hiker_id, :content, :likes, :image)
    end
    
end
