class User < ActiveRecord::Base
  #access
  attr_readonly :role
  attr_accessible :name, :provider, :uid, :email

  #validation
  validates_presence_of :name, :provider, :uid
  validates_uniqueness_of :uid, :scope => :provider


  def authenticated?
    self.id.present?
  end


  def admin?
    puts self.role
    self.role == 'admin'
  end
end
