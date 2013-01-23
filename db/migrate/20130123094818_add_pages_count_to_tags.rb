class AddPagesCountToTags < ActiveRecord::Migration
  def change
    add_column :tags, :pages_count, :integer, :after => :name, :default => 0
  end
end
