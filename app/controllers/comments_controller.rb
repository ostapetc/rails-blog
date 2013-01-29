class CommentsController < ApplicationController
  load_and_authorize_resource
  layout false

  # GET /comments
  # GET /comments.json
  def index
    @comments = params[:page_id] ? Comment.where(page_id: params[:page_id]) : Comment.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @comments }
    end
  end


  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(params[:comment])

    respond_to do |format|
      if @comment.save
        cookies[:user_name] = @comment.user_name
        format.json { render json: @comment, status: :created, location: @comment }
      else
        format.json { render json: @comment.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end


  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    respond_to do |format|
      format.html { redirect_to comments_url }
      format.json { head :no_content }
    end
  end


  #GET /comments/manage
  def manage
    @comments = Comment.all(:order => 'created_at desc')
    render :layout => 'application'
  end
end
