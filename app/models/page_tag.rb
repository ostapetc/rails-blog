class PageTag < ActiveRecord::Base
  attr_accessible :page_id, :tag_id

  belongs_to :page
  belongs_to :tag
end
