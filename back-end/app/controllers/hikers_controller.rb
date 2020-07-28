class HikersController < ApplicationController

    def index
        @hikers = Hiker.all 
        render json: @hikers, only: [:id, :name, :age, :skill], include: :posts
    end

    def show
        @hiker = Hiker.find(params[:id])
        render json: @hiker, only: [:id, :name, :age, :skill], include: :posts
    end

    def new
        @hiker = Hiker.new
    end

    def create
        @hiker = Hiker.create(hiker_params)
    end

    def edit
    end

    def update
    end

    def destroy
    end

    private

    def hiker_params
        params.require(:hiker).permit(:name, :age, :skill)
    end
    
end
