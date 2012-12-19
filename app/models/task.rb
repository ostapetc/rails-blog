class Task < ActiveRecord::Base
  STATUS_OPTIONS = ['new', 'done', 'canceled']

  attr_accessible :description, :status
  validates_presence_of :description, :status
  validates_inclusion_of :status, :in => STATUS_OPTIONS
end
