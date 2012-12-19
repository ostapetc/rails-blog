class AlterPageTagsAddIndexes < ActiveRecord::Migration
  def up
    add_index :page_tags, [:page_id, :tag_id], :unique => true
  end

  def down
    remove_index :page_tags, [:page_id, :tag_id]
  end
end
