class Comment < ActiveRecord::Base
  belongs_to :page

  attr_accessible :text, :user_name, :page_id

  validates_presence_of :user_name, :text, :page_id

  default_scope order('created_at')
end
