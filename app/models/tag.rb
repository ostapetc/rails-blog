class Tag < ActiveRecord::Base
  attr_accessible :name

  validates_uniqueness_of :name
  validates_presence_of :name

  has_many :page_tags
  has_many :pages, :through => :page_tags
end
