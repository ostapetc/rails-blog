class CreatePageTags < ActiveRecord::Migration
  def change
    create_table :page_tags do |t|
      t.integer :page_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
