# coding: utf-8


class Comment < ActiveRecord::Base
  #relations
  belongs_to :page

  #attributes access
  attr_accessible :text, :user_name, :user_email, :page_id

  #validation
  validates_presence_of :user_name, :text, :page_id
  validates :user_email, :email_format => {:message => 'Неверный формат'}

  #scopes
  default_scope order('created_at')
end
