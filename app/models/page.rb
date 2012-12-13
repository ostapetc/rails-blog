class Page < ActiveRecord::Base
  has_many :comments

  attr_accessible :image, :text, :title
  validates_presence_of :title, :text

  default_scope order('created_at desc')
end
