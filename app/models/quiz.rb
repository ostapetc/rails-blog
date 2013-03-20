class Quiz < ActiveRecord::Base
  #access
  attr_accessible :desc, :passing_per, :title

  #validation
  validates_presence_of :desc, :passing_per, :title
  validates_numericality_of :passing_per, :greater_than => 0
  validates_uniqueness_of :title

  #relations
  has_many :questions, :class_name => 'QuizQuestion', :foreign_key => :quiz_id
end
