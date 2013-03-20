class AddEmailToComments < ActiveRecord::Migration
  def change
    add_column :comments, :user_email, :string, :after => :user_name, :null => true, :default => nil
  end


  def down
    remove_column :comments, :user_email
  end
end
