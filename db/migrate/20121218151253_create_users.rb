class CreateUsers < ActiveRecord::Migration
  def change
    drop_table :users

    create_table :users do |t|
      t.string :uid
      t.string :provider
      t.string :name

      t.timestamps
    end
  end
end
