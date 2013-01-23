class TagsController < ApplicationController
  load_and_authorize_resource

  # GET /tags
  # GET /tags.json
  def index
    @tags = Tag.all
    @tag  = Tag.new

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @tags }
    end
  end

  # POST /tags
  # POST /tags.json
  def create
    @tag = Tag.new(params[:tag])

    respond_to do |format|
      if @tag.save
        format.html { redirect_to tags_path, notice: 'Tag was successfully created.' }
        format.json { render json: @tag, status: :created, location: @tag }
      else
        format.html { redirect_to tags_path }
        format.json { render json: @tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # GET /tags/1/edit
  def edit
    @tag = Tag.find(params[:id])
    render '_form', :layout => false
  end

  # PUT /tags/1
  # PUT /tags/1.json
  def update
    @tag = Tag.find(params[:id])
    respond_to do |format|
      if @tag.update_attributes(params[:tag])
        format.html { redirect_to tags_path, notice: 'Tag was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { redirect_to tags_path }
        format.json { render json: @tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tags/1
  # DELETE /tags/1.json
  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy

    respond_to do |format|
      format.html { redirect_to tags_url }
      format.json { head :no_content }
    end
  end

  # GET /tags/fixCounters
  def fix_counters
    text = ""

    Tag.all.each do |tag|
      tag.pages_count = tag.pages.count
      tag.save
      text+= tag.name + '=' + tag.pages.count.to_s + '<br/>'
    end

    render :text => text
  end
end
