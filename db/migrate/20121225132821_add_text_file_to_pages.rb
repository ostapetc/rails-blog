class AddTextFileToPages < ActiveRecord::Migration
  def change
    add_column :pages, :text_file, :string, after: :text
  end
end
