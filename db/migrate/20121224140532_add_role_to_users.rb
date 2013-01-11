class AddRoleToUsers < ActiveRecord::Migration
  def change
    add_column :users, :role, :string, after: :name
  end
end
