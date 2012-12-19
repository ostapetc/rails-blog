class Page < ActiveRecord::Base
  has_many :comments, :dependent => :destroy
  has_many :page_tags, :dependent => :destroy
  has_many :tags, :through => :page_tags

  attr_accessible :title, :text, :image

  validates_presence_of :title, :text

  default_scope order('created_at desc')

  has_attached_file :image, :styles => {medium: '300x300', small: '100x100'}

  def has_tag(tag_id)
    PageTag.exists?(page_id: self.id, tag_id: tag_id)
  end

  def update_tags(tags)
    self.page_tags.delete_all
    if (tags)
      tags.each do |tag_id|
        self.page_tags.create(tag_id: tag_id)
      end
    end
  end
end
