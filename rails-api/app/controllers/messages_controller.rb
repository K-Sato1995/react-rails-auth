class MessagesController < ApplicationController
  include Secured
  before_action :set_message, only: [:show, :update, :destroy]

  def index
    messages = Message.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded messages', data: messages }
  end

  def show
    render json: { status: 'SUCCESS', message: 'Loaded the message', data: @message }
  end

  def create
    message = Message.new(message_params)
    if message.save
      render json: { status: 'SUCCESS', data: message }
    else
      render json: { status: 'ERROR', data: message.errors }
    end
  end

  def destroy
    @message.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the message', data: @message }
  end

  def update
    if @message.update(message_params)
      render json: { status: 'SUCCESS', message: 'Updated the message', data: @message }
    else
      render json: { status: 'SUCCESS', message: 'Not updated', data: @message.errors }
    end
  end

  private

  def set_message
    @message = Message.find(params[:id])
  end

  def message_params
    params.require(:message).permit(:title)
  end
end
