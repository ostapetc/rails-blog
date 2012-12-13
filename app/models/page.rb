class Page < ActiveRecord::Base
  attr_accessible :image, :text, :title
  validates_presence_of :title, :text

  default_scope order('created_at desc')
end
