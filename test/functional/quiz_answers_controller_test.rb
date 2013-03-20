require 'test_helper'

class QuizAnswersControllerTest < ActionController::TestCase
  setup do
    @quiz_answer = quiz_answers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:quiz_answers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create quiz_answer" do
    assert_difference('QuizAnswer.count') do
      post :create, quiz_answer: { : @quiz_answer., is_right: @quiz_answer.is_right, text: @quiz_answer.text }
    end

    assert_redirected_to quiz_answer_path(assigns(:quiz_answer))
  end

  test "should show quiz_answer" do
    get :show, id: @quiz_answer
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @quiz_answer
    assert_response :success
  end

  test "should update quiz_answer" do
    put :update, id: @quiz_answer, quiz_answer: { : @quiz_answer., is_right: @quiz_answer.is_right, text: @quiz_answer.text }
    assert_redirected_to quiz_answer_path(assigns(:quiz_answer))
  end

  test "should destroy quiz_answer" do
    assert_difference('QuizAnswer.count', -1) do
      delete :destroy, id: @quiz_answer
    end

    assert_redirected_to quiz_answers_path
  end
end
