class Page < ActiveRecord::Base
  has_many :comments
  has_many :page_tags, :dependent => :destroy
  has_many :tags, :through => :page_tags

  attr_accessible :image, :text, :title
  validates_presence_of :title, :text

  default_scope order('created_at desc')
end
