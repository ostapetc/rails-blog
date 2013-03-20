class QuizQuestionsController < ApplicationController
  #cancan
  load_and_authorize_resource

  #events
  before_filter :findQuiz, :only => [:index, :new, :create, :show]


  def menu
    @menu = 'quizzes/menu'
  end


  def findQuiz
    @quiz = Quiz.find(params[:quiz_id])
  end


  # GET /quiz_questions
  # GET /quiz_questions.json
  def index
    @questions = @quiz.questions

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @questions }
    end
  end

  # GET /quiz_questions/1
  # GET /quiz_questions/1.json
  def show
    @question = QuizQuestion.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @question }
    end
  end

  # GET /quiz_questions/new
  # GET /quiz_questions/new.json
  def new
    @quiz_question = @quiz.questions.build

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @quiz_question }
    end
  end

  # GET /quiz_questions/1/edit
  def edit
    @quiz_question = QuizQuestion.find(params[:id])
  end

  # POST /quiz_questions
  # POST /quiz_questions.json
  def create
    @quiz_question = @quiz.questions.build(params[:quiz_question])

    respond_to do |format|
      if @quiz_question.save
        format.html { redirect_to [@quiz, @quiz_question], notice: 'Quiz question was successfully created.' }
        format.json { render json: @quiz_question, status: :created, location: @quiz_question }
      else
        format.html { render action: "new" }
        format.json { render json: @quiz_question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /quiz_questions/1
  # PUT /quiz_questions/1.json
  def update
    @quiz_question = QuizQuestion.find(params[:id])

    respond_to do |format|
      if @quiz_question.update_attributes(params[:quiz_question])
        format.html { redirect_to @quiz_question, notice: 'Quiz question was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @quiz_question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /quiz_questions/1
  # DELETE /quiz_questions/1.json
  def destroy
    @quiz_question = QuizQuestion.find(params[:id])
    @quiz_question.destroy

    respond_to do |format|
      format.html { redirect_to quiz_questions_url }
      format.json { head :no_content }
    end
  end
end
