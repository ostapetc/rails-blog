class User < ActiveRecord::Base
  attr_accessible :name, :provider, :uid
  validates_presence_of :name, :provider, :uid
  validates_uniqueness_of :uid, :scope => :provider
end
