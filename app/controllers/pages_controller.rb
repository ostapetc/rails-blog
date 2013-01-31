class PagesController < ApplicationController
  before_filter :tags_sidebar, only: ['index', 'show']
  load_and_authorize_resource

  # GET /pages
  # GET /pages.json
  def index
    if (params[:tag_id])
      @tag   = Tag.find(params[:tag_id]) || error_not_found
      @pages = @tag.pages.includes(:tags).paginate(page: params[:page], per_page: 7)
    else
      @pages = Page.includes(:tags).paginate(page: params[:page], per_page: 7)
    end

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @pages }
    end
  end

  # GET /pages/1
  # GET /pages/1.json
  def show
    @page    = Page.find(params[:id])
    @comment = @page.comments.build
    @comment.user_name = cookies[:user_name]

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @page }
    end
  end

  # GET /pages/new
  # GET /pages/new.json
  def new
    @page = Page.new
    @tags = Tag.all

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @page }
    end
  end

  # GET /pages/1/edit
  def edit
    @tags = Tag.all
    @page = Page.find(params[:id])
  end

  # POST /pages
  # POST /pages.json
  def create
    @page = Page.new(params[:page])

    respond_to do |format|
      if @page.save
        format.html { redirect_to @page, notice: 'Page was successfully created.' }
        format.json { render json: @page, status: :created, location: @page }
      else
        format.html { render action: "new" }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /pages/1
  # PUT /pages/1.json
  def update
    @page = Page.find(params[:id])

    respond_to do |format|
      if @page.update_attributes(params[:page], tags: params[:tags])
        format.html {
          redirect_to params[:commit] == 'redirect_to_show' ? @page : edit_page_path(@page),
                      notice: 'Page was successfully updated.'
        }
      else
        raise @page.errors.full_messages.length.to_s
        format.html { render action: "edit" }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pages/1
  # DELETE /pages/1.json
  def destroy
    @page = Page.find(params[:id])
    @page.destroy

    respond_to do |format|
      format.js
    end
  end

  # GET /pages/1
  def detectTags
    @page  = Page.find(params[:id])
    text   = @page.text_content.downcase
    result = []

    Tag.all.each do |tag|
      if text.include? tag.name.mb_chars.downcase!
        result.push tag.id
      end
    end

    render :json => result
  end

  #GET /feed
  def feed
    @pages = Page.all(order: 'created_at DESC', limit: 20)
    respond_to do |format|
      format.rss { render layout: false }
    end
  end

  #GET my badges
  def badges
  end

  # setup tags sidebar
  def tags_sidebar
    @sidebar = 'tags/sidebar'
  end
end
