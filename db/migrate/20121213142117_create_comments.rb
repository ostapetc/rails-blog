class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :page_id
      t.integer :user_id
      t.string  :user_name
      t.text    :text

      t.timestamps
    end
  end
end
