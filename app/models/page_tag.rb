class PageTag < ActiveRecord::Base
  attr_accessible :page_id, :tag_id

  belongs_to :page
  belongs_to :tag

  after_create  :increment_tag_pages_count
  after_destroy :decrement_tag_pages_count


  def increment_tag_pages_count
    sql = "UPDATE tags SET pages_count = pages_count + 1 WHERE id = #{self.tag_id}"
    ActiveRecord::Base.connection.execute sql
  end


  def decrement_tag_pages_count
    sql = "UPDATE tags SET pages_count = pages_count - 1 WHERE id = #{self.tag_id}"
    ActiveRecord::Base.connection.execute sql
  end
end
