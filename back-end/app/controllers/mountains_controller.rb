class MountainsController < ApplicationController

    def index
        @mountains = Mountain.all
        render json: @mountains, only: [:id, :name, :height, :location, :difficulty]
    end

    def show
        @mountain = Mountain.find(params[:id])
        render json: @mountain, only: [:id, :name, :height, :location, :difficulty], include: :posts
    end

    def new
        @mountain = Mountain.new
    end

    def create
        @mountain = Mountain.create(mountain_params)
    end

    def edit
    end

    def update
    end

    def destroy
    end

    private

    def mountain_params
        params.require(:mountain).permit(:name, :height, :location, :difficulty)
    end
    
end
