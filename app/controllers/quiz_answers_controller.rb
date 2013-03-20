class QuizAnswersController < ApplicationController
  # GET /quiz_answers
  # GET /quiz_answers.json
  def index
    @quiz_answers = QuizAnswer.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @quiz_answers }
    end
  end

  # GET /quiz_answers/1
  # GET /quiz_answers/1.json
  def show
    @quiz_answer = QuizAnswer.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @quiz_answer }
    end
  end

  # GET /quiz_answers/new
  # GET /quiz_answers/new.json
  def new
    @quiz_answer = QuizAnswer.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @quiz_answer }
    end
  end

  # GET /quiz_answers/1/edit
  def edit
    @quiz_answer = QuizAnswer.find(params[:id])
  end

  # POST /quiz_answers
  # POST /quiz_answers.json
  def create
    @quiz_answer = QuizAnswer.new(params[:quiz_answer])

    respond_to do |format|
      if @quiz_answer.save
        format.html { redirect_to @quiz_answer, notice: 'Quiz answer was successfully created.' }
        format.json { render json: @quiz_answer, status: :created, location: @quiz_answer }
      else
        format.html { render action: "new" }
        format.json { render json: @quiz_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /quiz_answers/1
  # PUT /quiz_answers/1.json
  def update
    @quiz_answer = QuizAnswer.find(params[:id])

    respond_to do |format|
      if @quiz_answer.update_attributes(params[:quiz_answer])
        format.html { redirect_to @quiz_answer, notice: 'Quiz answer was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @quiz_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /quiz_answers/1
  # DELETE /quiz_answers/1.json
  def destroy
    @quiz_answer = QuizAnswer.find(params[:id])
    @quiz_answer.destroy

    respond_to do |format|
      format.html { redirect_to quiz_answers_url }
      format.json { head :no_content }
    end
  end
end
