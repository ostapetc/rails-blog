class AddAdmin < ActiveRecord::Migration
  def up
    execute "UPDATE users SET role = 'admin' WHERE uid='100003136452311'"
  end

  def down
  end
end
