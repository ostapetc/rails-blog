class Page < ActiveRecord::Base
  FILES_DIR = "#{Rails.root}/app/views/pages/files/"

  has_many :comments, :dependent => :destroy
  has_many :page_tags, :dependent => :destroy
  has_many :tags, :through => :page_tags

  attr_accessible :title, :text, :text_file, :image
  validates_presence_of :title
  default_scope order('created_at desc')
  has_attached_file :image, :styles => {medium: '300x300', small: '100x100'}


  def has_tag(tag_id)
    PageTag.exists?(page_id: self.id, tag_id: tag_id)
  end


  def update_attributes(attributes, options = {})
    if super(attributes, options)
      update_tags(options[:tags])
      true
    end
  end

  def text_files
    Dir["#{FILES_DIR}*"].map {|f| Pathname.new(f).basename}
  end


  def text_content
    if self.text_file
      file_path = "#{Rails.root}/app/views/pages/files/#{self.text_file}"
      File.exists?(file_path) ? File.new(file_path).read : "file does not exists"
    else
      text
    end
  end


  private
  def update_tags(tags)
    self.page_tags.delete_all
    if tags
      tags.each do |tag_id|
        self.page_tags.create(tag_id: tag_id)
      end
    end
  end
end
