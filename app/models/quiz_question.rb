# coding: utf-8

class QuizQuestion < ActiveRecord::Base
  TYPE_SINGLE_ANSWER = 1
  TYPE_MULTI_ANSWER  = 2

  #access
  attr_accessible :image, :quiz_id, :text, :answer_type

  #validation
  validates_presence_of :quiz_id, :text, :answer_type
  validates_uniqueness_of :quiz_id, :scope => :text

  #relations
  belongs_to :quiz
  has_many :answers, :class_name => 'QuizAnswer', :foreign_key => :question_id


  def self.answer_types
    {
        TYPE_SINGLE_ANSWER => 'один верный ответ',
        TYPE_MULTI_ANSWER  => 'несколько верных ответов'
    }
  end


  def answer_type_view
    QuizQuestion.answer_types[self.answer_type]
  end
end
