class QuizAnswer < ActiveRecord::Base
  #accesss
  attr_accessible :question_id, :is_right, :text

  #validation
  validates_presence_of :question_id, :is_right, :text

  #relations
  belongs_to :question, :class_name => 'QuizQuestion', :foreign_key => :question_id
end
