class User < ActiveRecord::Base
  attr_readonly :role
  attr_accessible :name, :provider, :uid, :email
  validates_presence_of :name, :provider, :uid
  validates_uniqueness_of :uid, :scope => :provider


  def authenticated?
    self.id.present?
  end


  def admin?
    self.role == 'admin'
  end
end
